// Polyfill the global environment if it doesn't support ES6 Promises (IE).
import 'babel-polyfill'

import Vue from 'vue'
import App from './app.vue'

import Vuetify from 'vuetify'
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
    theme: {
        primary: colors.deepPurple.darken4,
        secondary: colors.blueGrey.darken1,
        accent: colors.shades.black,
        error: colors.red.accent4,
        info: colors.blue.accent3,
        success: colors.green.darken1,
        warning: colors.amber.accent4
    }
})

new Vue({
    render: (h) => h(App)
}).$mount('#app')
