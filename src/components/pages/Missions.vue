<template>
  <v-layout pa-3>
    <div style="width:100%;">
      <v-dialog v-model="dialog">
        <v-card>
          <v-card-title class="headline grey lighten-2" primary-title>Privacy Policy</v-card-title>
          <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" flat @click="dialog = false">I accept</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-card>
        <v-card-title primary-title>
          <div>
            <div class="headline">Nedir bu görevler?</div>
          </div>
        </v-card-title>
        <v-card-tile>
          <v-btn @click="dialog = !dialog" block>Kısa yazımızı oku</v-btn>
        </v-card-tile>
      </v-card>
    </div>
  </v-layout>
</template>
<script>
export default {
  data() {
    return {
      dialog: false
    };
  }
};
</script>
