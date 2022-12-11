<template>
  <div class="routing-links">
    <router-link to="/register">Inscription </router-link>
    <router-link to="/login">Connexion </router-link>
    <router-link to="/posts">Posts </router-link>
  </div>
  <div class="router-view">
    <router-view />
  </div>

</template> 

<style>
/* Styles pour la div contenant les liens de routage */
div.routing-links {
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  margin-bottom: 50px;
  border: 1px solid #000;
  padding: 30;
}

/* Styles pour les liens de routage */
div.routing-links router-link {
  margin: 100px;
  padding: 20;
}

/* Styles pour l'élément router-view */
div.router-view {
  margin-left: 20px;
}
</style>
