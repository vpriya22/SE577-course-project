<template>
  <p> This is the page listing all my Github repositories</p>
  <div>
      <ul>
        <li v-for="repo in repositories" :key="repo.id">
          <div class="repo-item">
            <p><strong>{{ repo.name }}</strong></p>
            <p>URL: <a :href="repo.url" target="_blank">{{ repo.url }}</a></p>
            <p>Description: {{ repo.description }}</p>
          </div>
        </li>
      </ul>
    </div>
</template>

<script lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';

export default {
  name: 'ReposPage',
  setup() {
    const repositories = ref([]);

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

<style scoped></style>