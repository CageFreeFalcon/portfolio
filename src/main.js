import Vue from 'vue'
import App from './App.vue'
import router from './router'

// import {library} from '@fortawesome/fontawesome-svg-core'
// import {faFacebook, faInstagram, faLinkedinIn, faGithub} from '@fortawesome/free-brands-svg-icons'
// import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
//
// library.add([faFacebook, faInstagram, faLinkedinIn, faGithub])
//
// Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
