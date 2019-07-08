<template>
  <v-bottom-nav class="app-nav" dark color="#F46257" :value="true" absolute>
    <v-btn @click="changeRoute('index')" flat value="recent">
      <span>Ana Sayfa</span>
      <v-icon>home</v-icon>
    </v-btn>
    <v-btn
      @click="changeRoute('missions')"
      :class="route=='missions' ? 'navmenu-selectedColor' : 'navmenu-color'"
      flat
    >
      <span>Görevler</span>
      <v-icon>transfer_within_a_station</v-icon>
    </v-btn>
    <v-btn
      @click="changeRoute('chat')"
      :class="route=='chat' ? 'navmenu-selectedColor' : 'navmenu-color'"
      flat
    >
      <span>Sohbet</span>
      <v-icon>forum</v-icon>
    </v-btn>
    <v-btn
      @click="changeRoute('announcments')"
      :class="route=='announcements' ? 'navmenu-selectedColor' : 'navmenu-color'"
      flat
    >
      <span>Duyurular</span>
      <v-icon>notifications</v-icon>
    </v-btn>
  </v-bottom-nav>
</template>
<script>
import { eventBus } from "../bus";
export default {
  props: {
    route: {
      type: String,
      default: "index"
    }
  },
  data() {
    return {};
  },
  methods: {
    changeRoute(url) {
      eventBus.$emit("route", url);
    }
  }
};
</script>

<style>
</style>
