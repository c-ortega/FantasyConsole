<template>
  <div class="magic-ui">
    <router-link to="/about" class="corner-icon top-left">
      <img src="@/assets/crystalBall.png" alt="About Us" />
    </router-link>

    <router-link to="/contact" class="corner-icon top-right">
      <img src="@/assets/crystalBall.png" alt="Contact Us" />
    </router-link>

    <router-link to="/search" class="corner-icon bottom-right">
      <img src="@/assets/locator.png" alt="Search" />
    </router-link>

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
            <img :src="game.image" :alt="game.name" />
          </div>
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
    };
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
}

.corner-icon {
  position: absolute;
  width: 64px;
  height: 64px;
  z-index: 10;
}
.corner-icon img {
  width: 100%;
  height: 100%;
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
</style>
