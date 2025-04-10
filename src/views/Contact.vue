<template>
  <div class="contact-page">
    <router-link to="/" class="home-button">🏠</router-link>

    <div class="contact-container">
      <div class="contact-avatar">
        <div class="avatar"></div>
      </div>

      <div class="contact-panel">
        <h1 class="contact-title">Contact Us</h1>

        <form class="contact-form" @submit.prevent="submitForm">
          <label for="name">Full name:</label>
          <input type="text" id="name" v-model="name" />

          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email" />

          <label for="message">Message:</label>
          <input type="text" id="message" v-model="message" />
        </form>

        <div class="contact-info">
          <p><strong>Contact:</strong></p>
          <ul>
            <li>FantasySlayer@gmail.com</li>
          </ul>

          <p><strong>Locate us at:</strong></p>
          <ul>
            <li>Robert Bell rm126, Ball State University</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      message: "",
    };
  },
  methods: {
    submitForm() {
      console.log("Message sent:", {
        name: this.name,
        email: this.email,
        message: this.message,
      });
    },
  },
};
</script>

<style scoped>
.contact-page {
  width: 100%;
  height: 100vh;
  font-family: serif;
  position: relative;
  overflow: hidden;
  background: url("@/assets/background.png") no-repeat center center fixed;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}

.home-button {
  position: absolute;
  top: 20px;
  left: 20px;
  width: 40px;
  height: 40px;
  background: black;
  color: white;
  border-radius: 50%;
  text-align: center;
  line-height: 40px;
  font-size: 1.2rem;
  box-shadow: 0 0 8px gold;
  text-decoration: none;
  transition: transform 0.2s ease;
  z-index: 10;
}
.home-button:hover {
  transform: scale(1.1);
}

/* Layout */
.contact-container {
  display: flex;
  gap: 2rem;
  background: rgba(255, 255, 255, 0.95);
  padding: 2rem;
  border-radius: 12px;
  max-width: 900px;
  width: 90%;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.4);
}

/* Avatar section */
.contact-avatar {
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.avatar {
  width: 120px;
  height: 150px;
  background: #222;
  border-radius: 50% 50% 0 0;
}

/* Panel */
.contact-panel {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.contact-title {
  font-family: "Press Start 2P", monospace;
  font-size: 1.3rem;
  text-align: center;
  margin-bottom: 1rem;
}

/* Form */
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1rem;
}
.contact-form label {
  font-weight: bold;
  font-size: 0.95rem;
  color: #222;
}
.contact-form input {
  padding: 0.5rem;
  border: 1px solid #888;
  border-radius: 6px;
  background: #fdf6e3;
  color: #222;
}

.contact-info {
  font-size: 0.9rem;
  color: #333;
}
.contact-info ul {
  list-style: disc;
  padding-left: 1.5rem;
}
</style>
