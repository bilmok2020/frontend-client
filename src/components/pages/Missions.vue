<template>
  <v-layout id="missions-layout" pa-3>
    <div>
      <Game v-if="activeMission == 'game'" />
      <QrCode v-if="activeMission == 'qrcode'" />
      <div style="width:100%; padding-bottom:35vh">
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
              <v-rating :value="starCount" readonly :length="8" background-color="red" dense></v-rating>
            </div>
          </v-card-title>
          <v-btn @click="dialog = !dialog" block>Nedir bu görevler ?</v-btn>
        </v-card>
        <br />
        <v-card @click=" openMisison('qrcode')" color="#FFFFEF">
          <v-layout>
            <v-flex xs5 pa-1>
              <img width="100%" height="100%" src="@/assets/qrcode.jpg" />
            </v-flex>
            <v-flex xs7>
              <v-card-title style="transform:translateY(-10px)" primary-title>
                <div>
                  <div class="headline">Qr Kod</div>
                  <div
                    class="missions-small-text"
                  >Etraftaki qr kodları bul, 3 yıldıza kadar yıldız kazan</div>
                  <div class="mt-2" style="text-align:center">
                    <v-rating background-color="black" :value="qrStars" light :length="3"></v-rating>
                  </div>
                </div>
              </v-card-title>
            </v-flex>
          </v-layout>
        </v-card>

        <v-card @click=" openMisison('game')" class="mt-4 pa-1 pt-2" color="#FFFFEF">
          <v-layout>
            <v-flex xs7>
              <v-card-title style="transform:translateY(-10px)" primary-title>
                <div>
                  <div class="headline">OYUN</div>
                  <div class="missions-small-text">11 puana ulaş yıldızını kap</div>
                </div>

                <div class="mt-2">Puanın: {{ gameData.highScore}}</div>
              </v-card-title>
            </v-flex>

            <v-flex xs5 pr-1>
              <img width="100%" height="100%" src="http://placekitten.com/200/220" />
            </v-flex>
          </v-layout>
        </v-card>
      </div>
    </div>
  </v-layout>
</template>
<script>
import Game from "../Game";
import QrCode from "../QrCode";
import { eventBus } from "../../bus";
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
  created() {
    eventBus.$on("closemission", e => {
      this.activeMission = "";
      console.log("aaaa geldi event");
    });
  },
  methods: {
    openMisison(mission) {
      history.pushState(
        { page: "active-mission" },
        "page " + window.location.href.split("?")[1]
      );
      history.pushState(
        { page: "active-mission" },
        "page " + window.location.href.split("?")[1]
      );
      this.activeMission = mission;
    }
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
        highScore: 7,
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

#missions-layout {
  background: #f8c5c1;
}
</style>
