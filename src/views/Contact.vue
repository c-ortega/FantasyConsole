<template>
  <div class="contact-page">
    <router-link to="/" class="home-button">
      <img src="@/assets/home.png" alt="Home" class="home-icon" />
    </router-link>

    <div class="orb-wrapper">
      <div class="crystal-ball">
        <div class="ball-inner">
          <div class="ball-content">
            <h1 class="contact-title">Contact Us</h1>

            <form class="contact-form" @submit.prevent="submitForm">
              <label for="name">Full name:</label>
              <input type="text" id="name" v-model="name" />

              <label for="email">Email:</label>
              <input type="email" id="email" v-model="email" />

              <label for="message">Message:</label>
              <textarea id="message" v-model="message" rows="3"></textarea>

              <button type="submit" class="magic-button">
                Send Message ✨
              </button>
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

      <div class="ball-stand"></div>
      <div class="ball-base"></div>
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
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.contact-page {
  width: 100%;
  min-height: 100vh;
  font-family: serif;
  position: relative;
  background: url("@/assets/background.png") no-repeat center center fixed;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  overflow-x: hidden;
}

.home-button {
  position: fixed;
  top: 20px;
  left: 20px;
  width: auto;
  height: auto;
  padding: 0;
  background: none;
  border: none;
  box-shadow: none;
  z-index: 10;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.home-button:hover {
  transform: scale(1.05);
}

.home-icon {
  width: 64px;
  height: 64px;
  object-fit: contain;
  display: block;
}

.orb-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-top: 2rem;
}

.crystal-ball {
  width: 720px;
  height: 720px;
  border-radius: 50%;
  background: radial-gradient(
    circle at 30% 30%,
    rgba(255, 255, 255, 0.9) 0%,
    rgba(173, 216, 230, 0.6) 30%,
    rgba(0, 191, 255, 0.4) 60%,
    rgba(0, 0, 139, 0.2) 100%
  );
  box-shadow: 0 0 40px rgba(0, 191, 255, 0.6),
    inset 10px 10px 30px rgba(255, 255, 255, 0.7),
    inset -10px -10px 30px rgba(0, 0, 139, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
  overflow: hidden;
}

.crystal-ball:hover {
  animation: glow 2s infinite;
}

.ball-inner {
  width: 80%;
  height: 80%;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.backdrop-blur {
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
}

.ball-content {
  width: 100%;
  max-height: 100%;
  overflow-y: auto;
  background: radial-gradient(
    circle at 30% 30%,
    rgba(255, 255, 255, 0.88) 0%,
    rgba(173, 216, 230, 0.3) 25%,
    rgba(0, 191, 255, 0.2) 60%,
    rgba(0, 0, 139, 0.1) 100%
  );
  padding: 1.5rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: center;
  box-shadow: inset 0 0 15px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
  scrollbar-width: thin;
}

.ball-stand {
  width: 80px;
  height: 100px;
  background: linear-gradient(to right, #b8860b, #daa520, #b8860b);
  border-radius: 5px 5px 0 0;
  box-shadow: 0 0 15px gold;
  margin-top: -40px;
  z-index: 0;
}

.ball-base {
  width: 180px;
  height: 40px;
  background: linear-gradient(to right, #8b4513, #a0522d, #8b4513);
  border-radius: 50% 50% 0 0;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.6);
}

.contact-title {
  font-family: "Press Start 2P", monospace;
  font-size: 1.5rem;
  text-align: center;
  color: #333;
  text-shadow: 0 0 5px rgba(0, 191, 255, 0.5);
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-form label {
  font-weight: bold;
  font-size: 1rem;
  color: #222;
  text-align: left;
}

.contact-form input,
.contact-form textarea {
  padding: 0.6rem;
  border: 1px solid #888;
  border-radius: 6px;
  background: rgba(253, 246, 227, 0.85);
  color: #222;
  font-family: inherit;
  font-size: 1rem;
}

.contact-form textarea {
  resize: vertical;
  min-height: 80px;
}

.magic-button {
  padding: 0.7rem;
  background: linear-gradient(to right, #8a2be2, #9370db);
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  font-size: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.magic-button:hover {
  background: linear-gradient(to right, #9370db, #8a2be2);
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

.contact-info {
  font-size: 1rem;
  color: #333;
  text-align: left;
}

.contact-info ul {
  list-style: disc;
  padding-left: 1.5rem;
  margin: 0.5rem 0;
}

@keyframes glow {
  0% {
    box-shadow: 0 0 15px rgba(0, 191, 255, 0.6);
  }
  50% {
    box-shadow: 0 0 25px rgba(0, 191, 255, 0.9);
  }
  100% {
    box-shadow: 0 0 15px rgba(0, 191, 255, 0.6);
  }
}

@media (max-width: 600px) {
  .crystal-ball {
    border-radius: 50% / 38%;
    padding: 1rem;
  }

  .ball-content {
    border-radius: 40% / 10%;
    padding: 1rem;
  }

  .contact-title {
    font-size: 1.2rem;
  }

  .contact-form {
    gap: 0.8rem;
  }
}
</style>
