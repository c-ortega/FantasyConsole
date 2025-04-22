<template>
  <div class="contact-page">
    <router-link to="/" class="home-button">🏠</router-link>

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

            <button type="submit" class="magic-button">Send Message ✨</button>
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
  overflow: auto;
  background: url("@/assets/background.png") no-repeat center center fixed;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}

.home-button {
  position: fixed;
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

/* Crystal Ball Design */
.crystal-ball {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  max-width: 600px;
  margin: 4rem 0;
}

.ball-inner {
  width: 150%;
  height: 0;
  padding-bottom: 100%; 
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, 
    rgba(255,255,255,0.8) 0%, 
    rgba(173,216,230,0.6) 20%, 
    rgba(0,191,255,0.4) 60%, 
    rgba(0,0,139,0.2) 100%);
  box-shadow: 
    inset 10px 10px 30px rgba(255,255,255,0.8),
    inset -10px -10px 30px rgba(0,0,139,0.3),
    0 0 30px rgba(0,191,255,0.6);
  position: relative;
  overflow: hidden;
  z-index: 2;
}

.ball-inner::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 70% 30%, 
    rgba(255,255,255,0.9) 0%, 
    transparent 30%);
  border-radius: 50%;
}

.ball-content {
  position: absolute;
  top: 10%;
  left: 10%;
  width: 80%;
  height: 80%;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.75);
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  box-shadow: inset 0 0 20px rgba(0,0,0,0.1);
}

.ball-stand {
  width: 80px;
  height: 100px;
  background: linear-gradient(to right, #b8860b, #daa520, #b8860b);
  border-radius: 5px 5px 0 0;
  box-shadow: 0 0 15px gold;
  z-index: 1;
}

.ball-base {
  width: 180px;
  height: 40px;
  background: linear-gradient(to right, #8b4513, #a0522d, #8b4513);
  border-radius: 50% 50% 0 0;
  box-shadow: 0 5px 20px rgba(0,0,0,0.6);
}

/* Content styling */
.contact-title {
  font-family: "Press Start 2P", monospace;
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 1.5rem;
  color: #333;
  text-shadow: 0 0 5px rgba(0,191,255,0.5);
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.contact-form label {
  font-weight: bold;
  font-size: 1rem;
  color: #222;
}

.contact-form input,
.contact-form textarea {
  padding: 0.6rem;
  border: 1px solid #888;
  border-radius: 6px;
  background: rgba(253, 246, 227, 0.85);
  color: #222;
  font-family: inherit;
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
  margin-top: 0.5rem;
  transition: all 0.3s ease;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
}

.magic-button:hover {
  background: linear-gradient(to right, #9370db, #8a2be2);
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.3);
}

.contact-info {
  font-size: 1rem;
  color: #333;
  margin-top: auto;
}

.contact-info ul {
  list-style: disc;
  padding-left: 1.5rem;
  margin: 0.5rem 0;
}

/* Magical effects */
@keyframes glow {
  0% { box-shadow: 0 0 15px rgba(0,191,255,0.6); }
  50% { box-shadow: 0 0 25px rgba(0,191,255,0.9); }
  100% { box-shadow: 0 0 15px rgba(0,191,255,0.6); }
}

.crystal-ball:hover .ball-inner {
  animation: glow 2s infinite;
}

/* Responsive adjustments */
@media (max-width: 600px) {
  .ball-content {
    padding: 1rem;
  }
  .contact-title {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
  .contact-form {
    gap: 0.8rem;
  }
}
</style>