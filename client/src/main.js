import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase'

firebase.initializeApp({
  apiKey: "AIzaSyDxFBSjA3j3zblSGu5Wgf7ImT6DyU_qtVg",
  authDomain: "develop-soulmonsters.firebaseapp.com",
  databaseURL: "https://develop-soulmonsters.firebaseio.com",
  projectId: "develop-soulmonsters",
  storageBucket: "develop-soulmonsters.appspot.com",
  messagingSenderId: "390876996778",
  appId: "1:390876996778:web:f514ab26f81786ab6e9cd3",
  measurementId: "G-9ZDH2P42HS"
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
