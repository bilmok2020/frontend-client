<template>
  <div class="missions-section qr-video-wrapper">
    <div>
      <video width="100%" height="auto" autoplay playsinline id="qrRead"></video>
    </div>
    <v-snackbar v-model="showSnackbar" :top="true">{{snackbarText}}</v-snackbar>
    <pre>
        {{log}}
    </pre>
  </div>
</template>


<script>
import { verifyQrCode } from "../fetcherData";
export default {
  data() {
    return {
      showSnackbar: false,
      snackbarText: "",
      scanner: null,
      log: ["saa"]
    };
  },
  mounted() {
    this.scanner = new Instascan.Scanner({
      video: document.getElementById("qrRead")
    });
    this.scanner.addListener("scan", content => {
      verifyQrCode(content, null, (err, reposne) => {
        if (err) {
          this.snackbarText = "Ops! Yanlış bir şey okuttunuz galiba";
          this.showSnackbar = true;
        } else {
          this.snackbarText = "Qr kod başarı ile okutuldu";
          this.showSnackbar = true;
        }
      });
    });
    this.log.push("hi");
    this.log.push(Instascan);
    this.log.push(Instascan.Camera);
    Instascan.Camera.getCameras()
      .then(cameras => {
        this.log.push(cameras);
        if (cameras.length > 6) {
          this.scanner.start(cameras[1]);
        } else if (cameras.length > 0) {
          this.scanner.start(cameras[0]);
        } else {
          console.error("No cameras found.");
        }
      })
      .catch(function(e) {
        console.error(e);
      });
  },
  destroyed(){
    this.scanner.stop();
  }
};
</script>

<style>
.qr-video-wrapper {
  display: grid;
  text-align: center;
  align-items: center;
  background-color: white !important;
}
.qr-ideo-wrapper video {
  width: 100%;
  height: auto;
}
</style>
