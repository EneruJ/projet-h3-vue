<template>
    <form @submit.prevent="handleSubmit">
      <label for="email">Adresse email :</label>
      <input type="email" id="email" v-model="email" />
      <label for="password">Mot de passe :</label>
      <input type="password" id="password" v-model="password" />
      <button type="submit">S'inscrire</button>
    </form>
  </template>
  
  <script>
    import firebase from 'firebase/compat/app';
    import 'firebase/compat/auth';
    import 'firebase/compat/firestore';
  
  export default {
    data() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
      handleSubmit() {
        // Référence à l'authentification Firebase
        const auth = firebase.auth();
  
        // S'inscrire sur le système d'authentification
        auth
          .createUserWithEmailAndPassword(this.email, this.password)
          .then(() => {
            // L'inscription a réussi, rediriger vers la page de connexion
            this.$router.push('/login');
          })
          .catch(error => {
            // L'inscription a échoué, afficher l'erreur
            console.error(error);
          });
      }
    }
  };
  </script>
  
  
  
  
  
  
  
  
  
  