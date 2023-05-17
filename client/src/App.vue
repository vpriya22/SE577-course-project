<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
//import RouterLink  from 'vue-router'
import FirstPage from './pages/ReposPage.vue'
import SecondPage from './pages/RepoDetailsPage.vue'
import ThirdPage from './pages/LoginPage.vue'

</script>

<template>
  
  <header>
    <nav > 
        <RouterLink to="/login" class="login-link">Login</RouterLink>
        <RouterLink to="/">About Me</RouterLink>
        <RouterLink to="/p1">My Repositories</RouterLink>
        <RouterLink to="/p2">Repository Details</RouterLink>
    </nav>
    <hr/>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
.login-link {
  position: absolute;
  top: 20px;
  right: 30px;
  font-weight: bold;


}

</style>
