<template>
  <v-layout style="background-color:white;">
    <div id="chat-wrapper" style="position:relative;max-height:83vh;overflow-y:scroll;width:100%;">
      <li v-for="message in messages">{{ message.author }}: {{message.content}}</li>
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
    messages: []
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
    }
  },
  updated() {
    var container = this.$el.querySelector("#chat-wrapper");
    container.scrollTop = container.scrollHeight + 200;
  },
  watch: {
    messages(old) {
      if (this.messages.length > 100) {
        this.messages.shift();
      }
    }
  }
};
</script>


