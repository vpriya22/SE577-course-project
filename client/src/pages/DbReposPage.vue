<template>
  <div class="repositories">
    <p class="intro-text">This is the page listing all my static DB repositories</p>
    <div class="repository-cards">
      <div v-for="repo in repositories" :key="repo.name" class="repository-card d-flex flex-column">
        <div class="card-header">
          <h3 class="card-title">{{ repo.name }}</h3>
        </div>
        <div class="card-body">
          <p>{{ repo.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>

.intro-text {
  font-style: italic;
}

.repositories {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.repository-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
}

.repository-card {
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 1rem;
}

.card-header {
  border-bottom: 1px solid #ddd;
  margin-bottom: 0.5rem;
  padding-bottom: 0.5rem;
  text-align: center;
}

.card-body {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

.date-info {
  display: flex;
  justify-content: space-between;
  font-size: small;
}
</style>

<script lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';
import type { RepoDbInterface } from './ApiInterface';

export default {
  name: 'DbReposPage',
  setup() {
    const repositories = ref<RepoDbInterface[]>([]);

    const fetchRepositories = () => {
      axios
        .get('http://localhost:3000/repos')
        .then(response => {
          repositories.value = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    };

    onMounted(fetchRepositories);

    return {
      repositories,
    };
  },
};
</script>
