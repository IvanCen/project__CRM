import Vue from 'vue';
import Vuelidate from 'vuelidate';
import firebase from 'firebase/app';
import App from './App.vue';
import router from './router';
import store from './store';
import massagePlugin from './utils/message.plugin';
import dateFilter from './filters/date';
import 'materialize-css/dist/js/materialize.min';
import './registerServiceWorker';
import 'firebase/auth';
import 'firebase/database';

Vue.config.productionTip = false;
Vue.use(Vuelidate);
Vue.filter('date', dateFilter);
Vue.use(massagePlugin);

firebase.initializeApp({
  apiKey: 'AIzaSyDfq_UKvK1MIA8deQLREjAAYLLPwxa2xYQ',
  authDomain: 'crm-system-716f0.firebaseapp.com',
  databaseURL: 'https://crm-system-716f0.firebaseio.com',
  projectId: 'crm-system-716f0',
  storageBucket: 'crm-system-716f0.appspot.com',
  messagingSenderId: '488773636440',
  appId: '1:488773636440:web:e1ef96b781e5b9d0a8d52d',
  measurementId: 'G-CPLVT699HQ',
});

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount('#app');
  }
});
