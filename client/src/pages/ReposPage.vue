<template>
  <div class="repositories">
    <h2>This is the page listing all my Github repositories</h2>
    <div class="repository-cards">
      <div v-for="repo in repositories" :key="repo.name" class="repository-card d-flex flex-column">
        <div class="card-header">
          <h3 class="card-title"><a :href="repo.html_url" target="_blank">{{ repo.name }}</a></h3>
        </div>
        <div class="card-body">
          <p>{{ repo.description }}</p>
          <div class="card-footer">
          <p class="date-info">
            Created at: {{ formatDate(repo.created_at) }}
            <span class="spacer"></span>
            Updated at: {{ formatDate(repo.updated_at) }}
          </p>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>

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
import type { RepoGithubInterface } from './ApiInterface';

export default {
  name: 'ReposPage',
  setup() {
    let repositories = ref<RepoGithubInterface[]>([]);

    const fetchRepositories = () => {
      axios
        .get('http://localhost:3000/ghsecure/user/repos')
        .then(response => {
          repositories.value = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    };

    onMounted(fetchRepositories);

    const formatDate = (dateString: string) => {
      const options:Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
      const date = new Date(dateString);
      return date.toLocaleDateString(undefined, options);
    };

    return {
      repositories,
      formatDate,
    };
  },
};
</script>