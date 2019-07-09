<template>
  <v-layout pa-2>
    <div style="padding-top:1vh; width:100% !important;" class="name-card">
      <h1 style="font-size:40px;">{{`${user.firstname} ${user.lastname}`}}</h1>

      <v-rating style readonly :length="8" :value="rating" dense color="#218CA5"></v-rating>
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
      return 4;
    }
  }
};
</script>
