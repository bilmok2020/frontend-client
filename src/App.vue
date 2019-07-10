<template>
  <v-app id="app-root">
    <Login @submit="loginRequest" v-if="!isAuthenticated" />
    <div v-else style="width:100%" class="root-pages">
      <Index :user="user" v-if="route == 'index'" />
      <Chat v-if="route == 'chat'" />
      <Missions v-if="route=='missions'" />
      <Announcements v-if="route=='announcments'" />
    </div>
    <NavMenu fixed v-if="isAuthenticated" :route="route" />
  </v-app>
</template>

<script>
import { eventBus, dataBus } from "./bus";
import { login, getProfile, getUser } from "./fetcherData";
import Announcements from "./components/pages/Announcements";
import Chat from "./components/pages/Chat";
import Missions from "./components/pages/Missions";
import Index from "./components/pages/Index";
import Login from "./components/pages/Login";
import NavMenu from "./components/NavMenu";
export default {
  name: "App",
  components: {
    Announcements,
    Chat,
    Missions,
    Index,
    Login,
    NavMenu
  },
  data() {
    return {
      isLoading: false,
      isAuthenticated: false,
      route: "",
      user: null
    };
  },
  computed: {
    fullname() {
      return `${this.user.firstname} ${this.user.lastname}`;
    }
  },
  created() {
    if (localStorage.token) {
      console.log(localStorage.token);
      this.getProfileData(localStorage.token);
    }
    this.route = window.location.href.split("?")[1] || "index";
    this.isLoading = false;

    window.addEventListener("popstate", event => {
      if (this.route == event.state.page) {
        return;
      }
      console.log(event.state.page);

      if (event.state.page == "active-mission") {
        eventBus.$emit("closemission");
        this.route = "missions";
        console.log("hi");
        return;
      }
      this.route = "index";
    });

    //Listen for page changing.
    eventBus.$on("route", pageName => {
      if (pageName == this.route) return;
      history.pushState({ page: this.route }, "page " + this.route, "");
      this.route = pageName;
    });
  },
  mounted() {},
  methods: {
    logout() {
      this.isAuthenticated = false;
      localStorage.token = "";
      this.user = "";
    },
    getProfileData(token) {
      getProfile(token, (err, response) => {
        if (err) {
          return;
        }
        this.user = response;
        this.isAuthenticated = true;
      });
    },
    loginRequest({ username, password, storeToken }) {
      login(username, password, (err, response) => {
        if (err) {
          eventBus.$emit("login-failed");
          return;
        }
        if (storeToken) {
          localStorage.token = response.token;
        }
        this.getProfileData(response.token);

        this.isAuthenticated = true;
      });
    }
  }
};
</script>

<style>
#app-root > .application--wrap {
  background-color: #eef0e5 !important;
}
.root-pages {
  max-height: 100vh;
  overflow-y: scroll;
}
.root-pages > .layout {
  height: 100vh;
  max-height: 100vh;
  overflow-y: scroll;
  animation: page-init-anim 300ms forwards;
  background-color: rgb(255, 255, 255);
}
.v-card {
  border-radius: 12px !important;
  box-shadow: 1px 5px 15px -2px rgba(0, 0, 0, 0.5) !important;
}

.v-card img {
  border-radius: 4px;
}
@keyframes page-init-anim {
  0% {
    transform: scale(1.5);
    opacity: 0;
  }
  100% {
    opacity: 1;
    transform: translate(0);
  }
}
</style>
