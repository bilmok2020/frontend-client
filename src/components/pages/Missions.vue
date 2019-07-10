<template>
  <v-layout pa-3>
    <div>
      <Game v-if="activeMission == 'game'" />
      <QrCode v-if="activeMission == 'qrcode'" />
      <div style="width:100%;">
        <v-dialog v-model="dialog">
          <v-card>
            <v-card-text>
              <h2>Eğlenmek için...</h2>
              <p>
                Görevlerin asıl amacı
                <b>Eğlenmek</b>
              </p>
            </v-card-text>
            <v-card-actions>
              <v-btn block color="primary" @click="dialog = false">Dansa Devam</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-card>
          <v-card-title>
            <div
              style="text-align:center !important; width: 100%"
            >8 yıldızdan {{starCount}} tanesini tamamladın</div>
            <div style="transform:translateY(12px); width:100%; text-align:center">
              <v-rating :value="starCount" :length="8" background-color="red" dense></v-rating>
            </div>
          </v-card-title>
          <v-btn @click="dialog = !dialog" block>Nedir bu görevler ?</v-btn>
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
                    <v-rating
                      small
                      background-color="black"
                      dense
                      :value="qrStars"
                      light
                      :length="3"
                    ></v-rating>
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
    starCount() {
      return 3;
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
