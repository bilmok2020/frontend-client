<template>
  <v-layout>
    <div style="padding-top:0vh; text-align:center; width:100% !important;" class="name-card">
      
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
