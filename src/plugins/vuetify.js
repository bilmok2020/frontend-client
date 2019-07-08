import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  iconfont: 'md',
  theme: {
    primary: '#218CA5',
    secondary: '#F46257',
    accent: '#FFFFEF',
    error: '#F46257',
    info: '#BAF2E8',
    success: '#4CAF50',
    warning: '#FFC107'
  }
})