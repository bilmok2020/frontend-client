<template>
  <v-layout style="background-color:white;">
    <div id="chat-wrapper" style="position:relative;max-height:83vh;overflow-y:scroll;width:100%;">
      <p
        v-for="message in messages"
        :style="{color:message.color}"
      >{{ message.author }}: {{message.content}}</p>
    </div>
    <div style="width:100%;position:absolute ;bottom:27px;z-index:1123123123">
      <v-text-field
        v-model="message"
        append-icon="send"
        box
        clear-icon="mdi-close-circle"
        clearable
        label="Mesajınız:"
        type="text"
        @click:append="sendMessage"
      ></v-text-field>
    </div>
  </v-layout>
</template>

<style>
p {
  margin: 0px;
}
</style>
<script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.2.0/socket.io.js"></script>
<script>

import io from 'socket.io-client';
import {dataBus} from '../../bus';
export default {
  data: () => ({
    message: "Hey!",
    messages: [],
    userColors: {},
    socket: io('localhost:4235')
  }),

  methods: {
    sendMessage() {
      console.log(dataBus.user);
      this.socket.emit('chat message', {
        author: dataBus.user.firstname + " " + dataBus.user.lastname.substring(0,1).toUpperCase() + ".",
        content: this.message
      });
      this.clearMessage();
    },
    clearMessage() {
      this.message = "";
    },
    colorExist(author) {
      return this.userColors[author] != null;
    },
    randomColor() {
      var o = Math.round,
        r = Math.random,
        s = 255;
      return "rgb(" + o(r() * s) + "," + o(r() * s) + "," + o(r() * s) + ")";
    }
  },
  updated() {
    var container = this.$el.querySelector("#chat-wrapper");
    container.scrollTop = container.scrollHeight + 200;
  },
  created() {
    this.socket.on('chat message', (data) => {
          this.messages.push(data);
      });
  },
  watch: {
    messages(old) {
      let lastMessage = this.messages[this.messages.length - 1];
      if (this.color == null) {
        if (!this.colorExist(lastMessage.author)) {
          this.userColors[lastMessage.author] = this.randomColor();
        }

        lastMessage.color = this.userColors[lastMessage.author];
      }
      if (this.messages.length > 100) {
        this.messages.shift();
      }
    }
  }
};
</script>


