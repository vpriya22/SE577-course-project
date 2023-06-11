<template>
  <div class="home">
    <p class="welcome-text">Welcome! This is a single-page application (SPA) based on GitHub that integrates with GitHub APIs through a secure web proxy.</p>
    <div v-if="gists.length > 0">
      <h4>My Gists:</h4>
      <table class="gist-table">
        <thead>
          <tr>
            <th>Description</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="gist in gists" :key="gist.id">
            <td>{{ gist.description }}</td>
            <td><a :href="gist.html_url" target="_blank">View Gist</a></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else>
      <p>No gists found.</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { GistGithubInterface } from './ApiInterface';

export default defineComponent({
  data() {
    return {
      gists: [] as GistGithubInterface[],
    };
  },
  mounted() {
    this.fetchGists();
  },
  methods: {
    async fetchGists() {
      try {
        const response = await fetch('http://localhost:3000/ghsecure/users/vpriya22/gists');
        this.gists = await response.json();
      } catch (error) {
        console.error('Error fetching gists:', error);
      }
    },
  },
});
</script>

<style scoped>
.home {
  text-align: center;
  margin-top: 3rem;
}

.welcome-text {
  margin-bottom: 4rem;
}

.gist-table {
  border-collapse: collapse;
  width: auto;
  max-width: 80%; 
  margin: 0 auto;
}

.gist-table th,
.gist-table td {
  border: 1px solid #e2e8f0;
  padding: 0.5rem;
}
.gist-table td {
  text-align: left;
}
</style>
