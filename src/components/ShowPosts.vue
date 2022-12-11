<template>
<div>
    <BlogVue />
  </div>
  <div>
    <div v-for="post in posts" :key="post.id" class="post">
      <h3>{{ post.user }}</h3>
      <p>{{ post.content }}</p>
      <img :src="post.imageUrl" />
      <p>Likes : {{ post.like }} <button @click="addLike(post.id)">J'aime</button></p>
      <form @submit.prevent="addComment(post.id)">
        <label>Ajouter un commentaire :</label>
        <input v-model="post.newComment" />
        <button type="submit">Envoyer</button>
      </form>
      <ul v-if="post.comments">
        <li v-for="comment in post.comments" :key="comment.id">
          <p>Commentaire par {{ comment.user }}</p>
          <p>{{ comment.content }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// Importer les modules Vue et Firebase
import firebase from "firebase/compat/app";
import 'firebase/compat/database';
import BlogVue from "./Blog.vue";

export default {
  data() {
    return {
      posts: [],
      user: firebase.auth().currentUser,
    };
  },
  components: {
      BlogVue,
    },
  created() {
    const db = firebase.database();
    // Récupérer les posts de la base de données lorsque le composant est créé
    db.ref('posts').on('value', snapshot => {
      this.posts = snapshot.val();
    });
  },
  methods: {
    // Méthode pour ajouter un like à un post
    addLike(postId) {
      // Récupérer le nombre de likes actuels
      let likes = posts.find(post => post.id === postId).likes;

      // Incrémenter le nombre de likes
      likes++;

      // Mettre à jour la base de données
      db.ref(`posts/${postId}`).update({ likes });
    },
    // Méthode pour ajouter un commentaire à un post
    addComment(postId) {
      // Récupérer le contenu du commentaire
      const db = firebase.database();
      let user = firebase.auth().currentUser;
      let comment = this.posts.find((post) => post.id === postId).newComment || "";

      // Ajouter le commentaire à la liste des commentaires du post
      db.ref(`posts/${postId}/comments`).push({ content: comment, user: user.email });

      // Réinitialiser le champ de saisie du commentaire
      this.posts.find((post) => post.id === postId).newComment = '';
    }
  }
};
</script>
<style>
.post {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 500px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}</style>