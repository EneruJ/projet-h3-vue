<template>
    <div>
      <form @submit.prevent="connexion">
        <label>Adresse email :</label>
        <input type="email" v-model="email" />
        <label>Mot de passe :</label>
        <input type="password" v-model="motDePasse" />
        <button type="submit">Se connecter</button>
        <p v-if="erreur">{{ erreur }}</p>
      </form>
    </div>
  </template>
  
  <script>
    import firebase from 'firebase/compat/app';
    import 'firebase/compat/auth';
    import 'firebase/compat/firestore';
  
  export default {
    data() {
      return {
        email: "",
        motDePasse: "",
        erreur: null,
      };
    },
    methods: {
      connexion() {
        // Tentative de connexion à Firebase avec l'adresse email et le mot de passe
        firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.motDePasse)
        .then(() => {
            // Si la connexion réussit, on redirige vers le composant de blog
            console.log("wahoo");
            this.$router.push({ name: "blog" });
          })
          .catch((erreur) => {
            // Si la connexion échoue, on affiche l'erreur
            this.erreur = erreur.message;
          });
      },
    },
  };
  </script>