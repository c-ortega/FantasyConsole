<template>
  <div class="cauldron-page">
    <router-link to="/" class="home-button">
      <img src="@/assets/home.png" alt="Home" class="home-icon" />
    </router-link>

    <div class="cauldron-container">
      <div class="cauldron">
        <div class="cauldron-top"></div>
        <div class="cauldron-liquid">
          <div class="bubbles">
            <div
              class="bubble"
              v-for="(bubble, index) in bubbles"
              :key="index"
              :style="bubble.style"
            ></div>
          </div>
          <div class="cauldron-content">
            <h1 class="spell-title">{{ gameName || "Mystical Cauldron" }}</h1>

            <div class="current-potion">
              <p class="potion-effect">{{ potionEffect }}</p>
              <button class="brew-button" @click="brewPotion">
                Brew Potion
              </button>
            </div>
          </div>
        </div>
        <div class="cauldron-bottom"></div>
        <div class="cauldron-stand"></div>
      </div>

      <div class="fire-effect">
        <div
          class="flame"
          v-for="(flame, index) in flames"
          :key="index"
          :style="flame.style"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";

export default {
  data() {
    return {
      gameName: "",
      potionEffect: "Add your magical ingredients...",
      bubbles: Array(15)
        .fill()
        .map(() => this.createBubble()),
      flames: Array(5)
        .fill()
        .map(() => this.createFlame()),
      bubbleInterval: null,
      flameInterval: null,
    };
  },
  mounted() {
    const route = useRoute();
    this.gameName = route.query.game || "";

    this.bubbleInterval = setInterval(this.animateBubbles, 100);
    this.flameInterval = setInterval(this.animateFlames, 150);
  },
  beforeDestroy() {
    clearInterval(this.bubbleInterval);
    clearInterval(this.flameInterval);
  },
  methods: {
    brewPotion() {
      this.potionEffect = `Brewing a powerful ${this.gameName} potion!`;

      // Create bubble explosion effect
      this.bubbles = Array(30)
        .fill()
        .map(() => this.createBubble(true));
    },
    createBubble(explosion = false) {
      return {
        style: {
          left: `${Math.random() * 80 + 10}%`,
          width: `${Math.random() * 15 + 5}px`,
          height: `${Math.random() * 15 + 5}px`,
          opacity: Math.random() * 0.7 + 0.3,
          animationDuration: `${Math.random() * 3 + 2}s`,
          animationDelay: `${Math.random() * 2}s`,
          backgroundColor: explosion
            ? `hsl(${Math.random() * 60 + 300}, 100%, 70%)`
            : `hsla(${Math.random() * 60 + 180}, 100%, 70%, 0.7)`,
        },
      };
    },
    createFlame() {
      return {
        style: {
          left: `${Math.random() * 60 + 20}%`,
          width: `${Math.random() * 30 + 20}px`,
          height: `${Math.random() * 40 + 30}px`,
          opacity: Math.random() * 0.5 + 0.5,
          animationDuration: `${Math.random() * 0.5 + 0.3}s`,
        },
      };
    },
    animateBubbles() {
      this.bubbles = this.bubbles.map((b) => {
        if (Math.random() > 0.95) return this.createBubble();
        return b;
      });
    },
    animateFlames() {
      this.flames = this.flames.map((f) => {
        if (Math.random() > 0.8) return this.createFlame();
        return f;
      });
    },
  },
};
</script>

<style scoped>
.cauldron-page {
  width: 100%;
  min-height: 100vh;
  background: #0a0a20 url("@/assets/background.png") no-repeat center center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  position: relative;
  overflow: hidden;
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

.cauldron-container {
  position: relative;
  width: 100%;
  max-width: 600px;
  margin-top: 3rem;
}

.cauldron {
  position: relative;
  width: 100%;
  z-index: 2;
}

.cauldron-top {
  width: 100%;
  height: 40px;
  background: #333;
  border-radius: 50%;
  box-shadow: 0 -5px 10px rgba(0, 0, 0, 0.5);
  border: 3px solid #222;
  position: relative;
  z-index: 3;
}

.cauldron-liquid {
  width: 90%;
  height: 250px;
  margin: 0 auto;
  background: linear-gradient(to bottom, #2a0d66, #4b1e8a);
  border-radius: 0 0 50% 50%;
  position: relative;
  overflow: hidden;
  box-shadow: inset 0 -20px 30px rgba(0, 0, 0, 0.6);
  border-left: 3px solid #222;
  border-right: 3px solid #222;
  border-bottom: 3px solid #222;
}

.cauldron-content {
  position: relative;
  z-index: 2;
  padding: 1.5rem;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.spell-title {
  font-family: "Press Start 2P", cursive;
  color: #f8f8f8;
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 1.3rem;
  text-shadow: 0 0 10px #a45de2;
}

.ingredient-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.8rem;
  margin-bottom: 1.5rem;
}

.ingredient {
  background: rgba(0, 0, 0, 0.4);
  border: 1px solid #a45de2;
  border-radius: 8px;
  padding: 0.6rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.ingredient:hover {
  background: rgba(164, 93, 226, 0.2);
  transform: translateY(-3px);
  box-shadow: 0 3px 10px rgba(164, 93, 226, 0.5);
}

.ingredient-icon {
  font-size: 1.5rem;
}

.ingredient-name {
  color: #f8f8f8;
  font-weight: bold;
}

.current-potion {
  margin-top: auto;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
}

.potion-label {
  color: #a45de2;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.potion-effect {
  color: #f8f8f8;
  font-style: italic;
  min-height: 40px;
  margin-bottom: 1rem;
}

.brew-button {
  background: linear-gradient(to bottom, #ff5e5e, #d23369);
  color: white;
  border: none;
  border-radius: 20px;
  padding: 0.8rem 1.5rem;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 3px 10px rgba(210, 51, 105, 0.5);
}

.brew-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(210, 51, 105, 0.7);
}

.cauldron-bottom {
  width: 80%;
  height: 20px;
  background: #222;
  margin: 0 auto;
  border-radius: 0 0 50% 50%;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
}

.cauldron-stand {
  width: 60%;
  height: 30px;
  background: linear-gradient(to right, #8b4513, #a0522d, #8b4513);
  margin: 0 auto;
  border-radius: 5px;
}

.fire-effect {
  position: absolute;
  bottom: -20px;
  left: 0;
  width: 100%;
  height: 100px;
  z-index: 1;
}

.flame {
  position: absolute;
  bottom: 0;
  background: linear-gradient(to top, #ff7800, #ff2400);
  border-radius: 50% 50% 20% 20%;
  filter: blur(5px);
  animation: flicker ease-in-out infinite;
  transform-origin: bottom;
}

@keyframes flicker {
  0%,
  100% {
    transform: scaleY(1) scaleX(1);
    opacity: 0.8;
  }
  50% {
    transform: scaleY(1.2) scaleX(0.8);
    opacity: 1;
  }
}

.bubbles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.bubble {
  position: absolute;
  bottom: 0;
  border-radius: 50%;
  animation: rise linear infinite;
}

@keyframes rise {
  0% {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
  100% {
    transform: translateY(-250px) scale(0.5);
    opacity: 0;
  }
}

@media (max-width: 600px) {
  .ingredient-list {
    grid-template-columns: 1fr;
  }
  .spell-title {
    font-size: 1.1rem;
  }
}
</style>
