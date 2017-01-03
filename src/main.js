require("!style!css!sass!./scss/styles.scss");

//Dependencies
import Vue from 'vue'
import VueRouter from 'vue-router'

// Views
import app from './app.vue'
import home from './patterns/home.vue'
import grid from './patterns/grid.vue'
import typography from './patterns/typography.vue'
import about from './patterns/forms.vue'
import soon from './patterns/soon.vue'

Vue.config.debug = process.env.NODE_ENV !== 'production'

Vue.use(VueRouter)

const App = Vue.extend(app)

const router = new VueRouter()

router.map({
  '/': {
    component: home
  },
  '/grid': {
    component: grid
  },
  '/typography': {
    component: typography
  },
  '/buttons': {
    component: soon
  },
  '/forms': {
    component: soon
  },
  '/tables': {
    component: soon
  },
  '/colors': {
    component: soon
  },
  '/utilities': {
    component: soon
  },
  '/spacing': {
    component: soon
  },
  '/media Queries': {
    component: soon
  },
  '/about': {
    component: about
  }
})

router.start(App, '#app')