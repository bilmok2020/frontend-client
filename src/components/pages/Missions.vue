<template>
  <v-layout pa-3>
    <Game v-if="activeMission == 'game'" />
    <QrCode v-if="activeMission == 'qrcode'" />
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
        <v-card-tile>
          <v-btn @click="dialog = !dialog" block>Nedir bu görevler ?</v-btn>
        </v-card-tile>
      </v-card>
      <br />
      <v-card color="#FFFFEF">
        <v-layout>
          <v-flex xs5 pa-2>
            <img width="100%" height="auto" src="@/assets/qrcode.jpg" />
          </v-flex>
          <v-flex xs7>
            <v-card-title style="transform:translateY(-10px)" primary-title>
              <div>
                <div class="headline">Qr Kod</div>
                <div
                  class="missions-small-text"
                >Etraftaki qr kodları bul, 3 yıldıza kadar yıldız kazan</div>
                <div class="mt-2" style="text-align:center">
                  <v-rating small background-color="black" dense :value="qrStars" light :length="3"></v-rating>
                </div>
              </div>
            </v-card-title>
          </v-flex>
        </v-layout>
        <v-btn @click="activeMission = 'qrcode'" block>OYNA</v-btn>
      </v-card>

      <v-card class="mt-4" color="#FFFFEF">
        <v-layout>
          <v-flex xs7>
            <v-card-title style="transform:translateY(-10px)" primary-title>
              <div>
                <div class="headline">OYUN</div>
                <div class="missions-small-text">Oyunu oyna falan filan abijim</div>
              </div>
              <div>{{ gameData.gameDone ? '' : 'Tamamlanmadı' }}</div>
              <div>Score:{{ gameData.highScore}}</div>
            </v-card-title>
          </v-flex>

          <v-flex xs5 pa-1>
            <img width="100%" height="auto" src="http://placekitten.com/200/200" />
          </v-flex>
        </v-layout>
        <v-btn @click="activeMission = 'game'" block>OYNA</v-btn>
      </v-card>
    </div>
  </v-layout>
</template>
<script>
import Game from "../Game";
import QrCode from "../QrCode";
export default {
  data() {
    return {
      dialog: false,
      activeMission: ""
    };
  },
  components: {
    Game,
    QrCode
  },
  computed: {
    qrStars() {
      return 2;
    },
    gameData() {
      return {
        highScore: 4213,
        gameDone: false
      };
    }
  }
};
</script>
<style>
.missions-small-text {
  font-size: 12px;
}
.missions-section {
  width: 100%;
  top: 0;
  left: 0;
  height: 100vh;
  position: fixed;
  background-color: rgba(0, 128, 0, 0.219);
  z-index: 44;
}
</style>
