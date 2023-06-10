<template>
  <div class="about-me">
    <div class="profile-section">
      <div class="profile-details">
        <h2>{{ name }}</h2>
        <p class="program">{{ program }}</p>
        <p class="github-bio">{{ githubBio }}</p>
      </div>
    </div>

    <div class="education-section">
      <h3>Education</h3>
      <p class="education-item">{{ educationDegree }}</p>
      <p class="education-item">{{ educationProgram }}</p>
      <p class="education-item">{{ educationYear }}</p>
    </div>

    <div class="connect-section">
      <h3>Connect with me</h3>
      <div class="connect-icons">
        <a :href="githubUrl" target="_blank">
          <img class="github-img" src="../assets/gh.png" alt="GitHub Profile" />
        </a>
        <a :href="emailUrl" target="_blank">
          <img class="email-img" src="../assets/email.png" alt="Email" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutMePage',
  data() {
    return {
      name: 'Vishnupriya Thokala',
      githubUsername: 'vpriya22',
      githubBio:
        'Full-stack developer with a passion for building scalable web applications | Machine Learning enthusiast | Seeking new challenges and opportunities in the tech industry',
      githubUrl: 'https://github.com/vpriya22',
      emailUrl: 'mailto:vt383@drexel.edu',
      educationDegree: 'Masters in Computer Science',
      educationProgram: 'Drexel University',
      educationYear: 'Expected graduation: 2024',
    };
  },
};
</script>

<style scoped>
.about-me {
  max-width: 600px;
  margin: 0 auto;
  padding: 40px;
  background-color: #f9f9f9;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.github-img,
.email-img {
  max-width: 30px;
  height: auto;
  margin-right: 10px;
}

.education-item {
  margin: 0;
}

.connect-section {
  margin-top: 20px;
}
.connect-icons {
  display: flex;
  align-items: center;
}
</style>