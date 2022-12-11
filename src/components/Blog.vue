<template>
  <form @submit.prevent="submitForm" v-if="user">
    <label for="content">Contenu :</label>
    <textarea id="content" v-model="form.content"></textarea>

    <label for="imageUrl">URL de l'image :</label>
    <input id="imageUrl" type="text" v-model="form.imageUrl" />

    <button type="submit">Créer le post</button>

    <p v-if="error" class="error">{{ error }}</p>
  </form>
</template>
  
<script>
import firebase from "firebase/compat/app";
import 'firebase/compat/database';
import 'firebase/compat/auth';

export default {
  name: 'PostForm',
  data() {
    return {
      form: {
        content: '',
        imageUrl: '',
      },
      error: null,
      user: firebase.auth().currentUser,
    };
  },
  methods: {
    async submitForm() {
      // Réinitialisation de l'erreur
      this.error = null;

      // Vérification de la connexion de l'utilisateur
      const user = firebase.auth().currentUser;
      if (!user) {
        this.error = 'Vous devez être connecté pour créer un post.';
        return;
      }
      else console.log(user);
      // Récupération des données du formulaire
      const { content, imageUrl } = this.form;

      try {
        // Ajout du post à la base de données Firebase
        const db = firebase.database();
        const postsRef = db.ref('posts');
        await postsRef.push({
          content,
          imageUrl,
          user: user.email,
        });

        // Réinitialisation du formulaire
        this.form.content = '';
        this.form.imageUrl = '';
      } catch (err) {
        this.error = err.message;
      }
    },
  },
};
</script>

<style>
form {
  display: flex;
  flex-direction: column;
  width: 500px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

label {
  font-weight: bold;
  margin-bottom: 5px;
}

textarea,
input {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  padding: 8px;
  border: 0;
  border-radius: 5px;
  background-color: #333;
  color: #fff;
  cursor: pointer;
}

.error {
  margin: 10px 0;
  padding: 8px;
  color: #f00;
  border: 1px solid #f00;
  border-radius: 5px;
}
</style>
