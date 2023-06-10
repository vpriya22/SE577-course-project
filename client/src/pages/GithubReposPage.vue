<template>
  <div class="repositories">
    <p class="intro-text">This is the page listing all my GitHub repositories</p>
    <div class="repository-cards">
      <div v-for="repo in repositories" :key="repo.name" class="repository-card">
        <div class="card-header">
          <h3><a :href="repo.html_url" target="_blank" class="repo-link">{{ repo.name }}</a></h3>
          <button class="expand-btn" @click="toggleCommitList(repo)" :class="{ expanded: repo.showCommits }">
            {{ repo.showCommits ? 'Hide Commits' : 'View Commits' }}
          </button>
        </div>
        <div class="card-body">
          <p class="repo-description">{{ repo.description }}</p>
          <div class="commits-list" v-show="repo.showCommits">
            <div class="commit-box" v-for="commit in repo.commits">
              <div class="commit-info">
                <p><strong>Author:</strong> {{ commit.author ? commit.author.login : 'Unknown' }}</p>
                <p><strong>Message:</strong> {{ commit.commit.message }}</p>
                <p class="date-value">Date: {{ commit.author ? formatDate(commit.commit.author.date) : '' }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="card-footer mt-auto">
          <p class="date-info">
            <p class="date-value">Created: {{ formatDate(repo.created_at) }}</p>
            <!-- <span class="spacer"></span> -->
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';
import type { RepoGithubInterface, CommitGithubInterface } from './ApiInterface';

export default {
  name: 'GithubReposPage',
  setup() {
    let repositories = ref<RepoGithubInterface[]>([]);

    const fetchRepositories = () => {
      axios
        .get('http://localhost:3000/ghsecure/user/repos')
        .then(response => {
          repositories.value = response.data;
          fetchCommits(); // Fetch commits after repositories are loaded
        })
        .catch(error => {
          console.error(error);
        });
    };

    const fetchCommits = () => {
      repositories.value.forEach(repo => {
        axios
          .get(`http://localhost:3000/ghsecure/repos/${repo.owner.login}/${repo.name}/commits`)
          .then(response => {
            repo.commits = response.data;
          })
          .catch(error => {
            console.error(error);
          });
      });
    };

    const toggleCommitList = (repo: RepoGithubInterface) => {
      repo.showCommits = !repo.showCommits;
    };

    onMounted(fetchRepositories);

    const formatDate = (dateString: string) => {
      const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
      const date = new Date(dateString);
      return date.toLocaleDateString(undefined, options);
    };

    return {
      repositories,
      formatDate,
      toggleCommitList,
    };
  },
};
</script>

<style>
.repositories {
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* .repository-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  grid-gap: 1rem; 
} */

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

.repo-link {
  text-decoration: none;
}

.expand-btn {
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  color: #0366d6;
}

.card-body {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

.repo-description {
  font-style: italic;
}

.commits-list {
  margin-top: 1rem;
  max-height: 200px; /* Adjust the height as needed */
  overflow-y: auto;
}

.scrollable-list {
  list-style-type: none;
  padding-left: 0;
}

.commit-box {
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
}

.date-info {
  display: flex;
  justify-content: space-between;
  font-size: small;
}

.date-value {
  font-size: small;
  color: #666;
}

.spacer {
  flex: 1;
}
</style>
