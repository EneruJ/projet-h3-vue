<template>
  <div>
    <BlogVue />
  </div>
    <div>
      <div v-for="post in posts" :key="post.id">
        <p>Posté par {{ post.user }}</p>
        <p>{{ post.content }}</p>
        <img :src="post.imageUrl" />
      </div>
    </div>
  </template>
<style>
.post {
  margin-bottom: 20px;
  padding: 20px;
  border: 10px solid #000;
  border-radius: 5px;
}
.post p {
    margin: 0;
    text-align: center;
  }
img {
  max-width: 100%;
}
</style>
  <script>
  import BlogVue from "./Blog.vue";
  import firebase from "firebase/compat/app";
  import 'firebase/compat/database';

  
  export default {
    name: 'PostList',
    data() {
      return {
        posts: [],
      };
    },
    components: {
      BlogVue,
    },
    created() {
      const db = firebase.database();
      const postsRef = db.ref('posts');
  
      postsRef.on('value', snapshot => {
        // Récupération des données des posts
        const posts = snapshot.val();
  
        // Mise à jour de la liste des posts dans le composant
        this.posts = Object.keys(posts).map(key => ({
          id: key,
          content: posts[key].content,
          imageUrl: posts[key].imageUrl,
          user: posts[key].user,
        }));
      });
    },
  };
  </script>
  
  