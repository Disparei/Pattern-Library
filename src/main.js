require("!style!css!sass!./scss/styles.scss");

//Dependencies
import Vue from 'vue'
import VueRouter from 'vue-router'

// Views
import app from './app.vue'
import home from './patterns/home.vue'
import grid from './patterns/grid.vue'
import typography from './patterns/typography.vue'
import buttons from './patterns/buttons.vue'
import forms from './patterns/forms.vue'
import tables from './patterns/tables.vue'
import colors from './patterns/colors.vue'
import utilities from './patterns/utilities.vue'
import spacing from './patterns/spacing.vue'
import mediaqueries from './patterns/mediaqueries.vue'
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
    component: buttons
  },
  '/forms': {
    component: forms
  },
  '/tables': {
    component: tables
  },
  '/colors': {
    component: colors
  },
  '/utilities': {
    component: utilities
  },
  '/spacing': {
    component: spacing
  },
  '/mediaqueries': {
    component: mediaqueries
  }
})

router.start(App, '#app')