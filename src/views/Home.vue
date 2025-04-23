<template>
  <div class="magic-ui">
    <!-- Top Left: About Us -->
    <div class="corner-button top-left">
      <router-link to="/about">
        <img src="@/assets/aboutUs.png" alt="About Us" />
      </router-link>
      <span class="button-label">About Us</span>
    </div>

    <!-- Top Right: Contact Us -->
    <div class="corner-button top-right">
      <router-link to="/contact">
        <img src="@/assets/crystalBall.png" alt="Contact Us" />
      </router-link>
      <span class="button-label">Contact Us</span>
    </div>

    <!-- Bottom Right: Locator Spell -->
    <div class="corner-button bottom-right">
      <span class="button-label above">Locator Spell</span>
      <router-link to="/search">
        <img src="@/assets/locator.png" alt="Search" />
      </router-link>
    </div>

    <h1 class="ui-title">Fantasy UI Console</h1>

    <div class="ui-intro">
      <p>
        Welcome to the Fantasy UI Console. Select a game from the shelf to
        reveal its secrets!
      </p>
    </div>

    <div class="magic-shelf-grid">
      <div
        v-for="(row, rowIndex) in shelfGrid"
        :key="rowIndex"
        class="shelf-row"
      >
        <div
          v-for="(shelf, shelfIndex) in row"
          :key="shelfIndex"
          class="shelf-board"
        >
          <div v-for="game in shelf" :key="game.id" class="game-slot">
            <img :src="game.image" :alt="game.name" @click="selectGame(game)" />
          </div>
        </div>
      </div>
    </div>

    <div v-if="selectedGame" class="zoom-overlay" @click.self="clearSelection">
      <div class="zoom-content">
        <img
          :src="selectedGame.image"
          :alt="selectedGame.name"
          class="zoom-image"
        />
        <div class="zoom-text">
          <h2>{{ selectedGame.name }}</h2>
          <p>This is a description of the game</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moonLock from "@/assets/moonLock.webp";

function chunk(arr, size) {
  return arr.reduce((acc, _, i) => {
    if (i % size === 0) acc.push(arr.slice(i, i + size));
    return acc;
  }, []);
}

export default {
  data() {
    const games = [
      { id: 1, name: "Dragon's Keep", image: moonLock },
      { id: 2, name: "Enchanted Realms", image: moonLock },
      { id: 3, name: "Wand Wars", image: moonLock },
      { id: 4, name: "Sorcery Saga", image: moonLock },
      { id: 5, name: "Mystic Market", image: moonLock },
      { id: 6, name: "Arcane Arena", image: moonLock },
    ];

    const shelfRows = chunk(games, 2);
    const shelfGrid = chunk(shelfRows, 2);

    return {
      shelfGrid,
      selectedGame: null,
    };
  },

  methods: {
    selectGame(game) {
      this.selectedGame = game;
    },
    clearSelection() {
      this.selectedGame = null;
    },
  },
};
</script>

<style scoped>
.magic-ui {
  background: url("@/assets/background.png") no-repeat center center fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: #fdf8f3;
  cursor: url("@/assets/blueWand.png"), auto;
  overflow: hidden;
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.ui-title {
  font-family: "Cinzel Decorative", cursive;
  font-size: 3rem;
  color: #f9e8c9;
  text-shadow: 0 0 10px #7a5c28, 0 0 20px #b08d57;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  text-align: center;
  animation: titlePulse 3s ease-in-out infinite;
}

.ui-intro {
  margin-top: 2rem;
  background-color: rgba(255, 255, 255, 0.85);
  padding: 1rem 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  max-width: 600px;
  text-align: center;
  font-family: "Cinzel", serif;
  font-size: 1.5rem;
  color: #3d2f1b;
  animation: fadeInIntro 1.5s ease-out;
}

.corner-button {
  position: absolute;
  width: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;
}

.corner-button img {
  width: 64px;
  height: 64px;
  object-fit: contain;
}

.top-left {
  top: 20px;
  left: 20px;
}
.top-right {
  top: 20px;
  right: 20px;
}
.bottom-right {
  bottom: 20px;
  right: 20px;
}

.button-label {
  margin-top: 6px;
  color: #f9e8c9;
  font-family: "Cinzel Decorative", cursive;
  font-size: 0.9rem;
  text-shadow: 0 0 6px #7a5c28;
  text-align: center;
  white-space: nowrap;
}

.button-label.above {
  margin-top: 0;
  margin-bottom: 6px;
}

.magic-shelf {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.magic-shelf-grid {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  margin-top: 2rem;
}

.shelf-row {
  display: flex;
  gap: 2rem;
  justify-content: center;
}

.shelf-board {
  background: url("@/assets/woodTexture.png") center center no-repeat;
  background-size: cover;
  border: 6px solid #5b3a1a;
  border-radius: 16px;
  padding: 1rem;
  display: flex;
  gap: 1rem;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.game-slot {
  padding: 0.5rem;
  border-radius: 12px;
  transition: transform 0.3s ease;
}
.game-slot img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 15px;
  display: block;
}
.game-slot:hover {
  transform: scale(1.1) rotate(-2deg);
}

.zoom-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(15, 15, 15, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 20;
  cursor: pointer;
}

.zoom-content {
  display: flex;
  width: 80%;
  max-width: 1000px;
  height: 70%;
  background: #fff;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.6);
  animation: zoomIn 0.5s ease forwards;
}

.zoom-image {
  width: 50%;
  height: 100%;
  object-fit: cover;
}

.zoom-text {
  width: 50%;
  padding: 2rem;
  overflow-y: auto;
  background: #fdf8f3;
  color: #333;
  font-family: "Cinzel", serif;
}

@keyframes zoomIn {
  from {
    transform: scale(0.7);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes fadeInIntro {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes titlePulse {
  0%,
  100% {
    text-shadow: 0 0 10px #7a5c28, 0 0 20px #b08d57;
  }
  50% {
    text-shadow: 0 0 20px #d1aa66, 0 0 40px #ffe2a0;
  }
}
</style>
