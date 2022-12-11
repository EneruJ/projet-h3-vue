import { createApp } from 'vue'
import App from './App.vue'
import firebase from "firebase/compat/app";
import router from './router';
// Initialisation de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBx33ahSxhwQ0SOGcLhafWo9P1kdlk9ErA",
    authDomain: "projet-vue-h3.firebaseapp.com",
    projectId: "projet-vue-h3",
    storageBucket: "projet-vue-h3.appspot.com",
    messagingSenderId: "22682093477",
    appId: "1:22682093477:web:51f20b0a9f1cfb390a8a4c",
    databaseURL: "https://projet-vue-h3-default-rtdb.europe-west1.firebasedatabase.app/",
  };
  
  
firebase.initializeApp(firebaseConfig);
createApp(App).use(router).mount('#app');
