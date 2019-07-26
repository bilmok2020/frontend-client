<template>
  <div class="login-page">
    <Loading v-if="isLoading" />
    <v-form ref="form" style="padding: 15px" v-model="valid" lazy-validation>
      <img
        src="../../assets/logox.png"
        style="display:inline-block; text-align:center; margin: 10vh 10%"
        width="80%"
        height="auto"
      />
      <v-text-field v-model="username" :rules="nameRules" label="Kullanıcı adı" required outline></v-text-field>
      <v-text-field
        v-model="password"
        type="password"
        :rules="passwordRules"
        label="Şifre"
        required
        outline
      ></v-text-field>

      <v-checkbox color="orange" v-model="checkbox" label="Beni hatırla"></v-checkbox>
      <div>
        <v-btn :color="'dark-orange'" dark :block="true" :disabled="!valid" @click="submit">Giriş</v-btn>
      </div>
    </v-form>
    <v-snackbar v-model="snackbar" :color="'#FF8986'" :top="true" :vertical="true">
      Kullanıcı adı veya şifre yanlış
      <v-btn color="pink" flat @click="snackbar = false">Tamam</v-btn>
    </v-snackbar>
  </div>
</template>

<script>
import Loading from "../Loading";
import { eventBus } from "../../bus";
export default {
  data: () => ({
    snackbar: false,
    isLoading: false,
    valid: true,
    username: "",
    nameRules: [
      v => !!v || "İsim gerekli",
      v => (v && v.length <= 15) || "Kullanici adi 14 haneden kısa olmalıdır"
    ],
    password: "",
    passwordRules: [
      v => !!v || "Şifre gerekli",
      v =>
        !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,10}$/g.test(
          v
        ) || "Şifre geçersiz"
    ],
    checkbox: false
  }),
  created() {
    eventBus.$on("login-failed", e => {
      this.isLoading = false;
      this.snackbar = true;
    });
  },
  methods: {
    submit() {
      this.isLoading = true;
      this.$emit("submit", {
        username: this.username,
        password: this.password,
        storeToken: this.checkbox
      });
    }
  },
  components: {
    Loading
  }
};
</script>

<style>
.login-page {
  width: 100%;
  height: 100vh;
  max-height: 100vh;
  overflow: hidden;
  background: #fff9e9;
}
</style>
