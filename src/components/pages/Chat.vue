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
</style>
<script>
export default {
  data: () => ({
    message: "Hey!",
    messages: [],
    userColors: {}
  }),

  methods: {
    sendMessage() {
      this.messages.push({
        author: "me",
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
    setInterval(() => {
      this.messages.push({
        author: "you",
        content: this.message
      });
    }, 2500);
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


