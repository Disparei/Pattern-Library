require("!style!css!sass!./scss/styles.scss");

//Dependencies
import Vue from 'vue'
import VueRouter from 'vue-router'

// Views
import app from './app.vue'
import grid from './patterns/grid.vue'
import typography from './patterns/typography.vue'
import about from './patterns/forms.vue'

Vue.config.debug = process.env.NODE_ENV !== 'production'

Vue.use(VueRouter)

const App = Vue.extend(app)

const router = new VueRouter()

router.map({
  '/grid': {
    component: grid
  },
  '/typography': {
    component: typography
  }
  ,
  '/about': {
    component: about
  }
})

router.start(App, '#app')