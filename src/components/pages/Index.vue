<template>
  <v-layout id="index-layout">
    <div
      style="padding-top:25vh; text-align:center; width:100% !important;font-size:25px"
      class="font-weight-black name-card"
    >
      {{user.firstname}} {{user.lastname}}
      <v-rating
        color="yellow"
        background-color="black"
        :length="8"
        value="5"
        readonly
        v-model="rating"
      ></v-rating>
      <div style="padding-top:10vh">
        <v-btn class="mx-2" fab dark large color="orange">
          <v-icon x-large dark>assessment</v-icon>
        </v-btn>
      </div>
    </div>
  </v-layout>
</template>
<script>
export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      drawer: true
    };
  },

  components: {},
  computed: {
    rating() {
      return this.user.starCount;
    }
  }
};
</script>
<style>
#index-layout {
  background: #f07c1d;
}
</style>

