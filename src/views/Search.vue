<template>
  <div class="search-page">
    <router-link to="/" class="home-button">
      <img src="@/assets/home.png" alt="Home" class="home-icon" />
    </router-link>

    <div class="search-box">
      <h2 class="spell-title">Locator Spell Ingredients</h2>

      <form @submit.prevent="handleSubmit" class="spell-form">
        <ul>
          <li><strong>Genre:</strong> <input type="text" v-model="genre" /></li>
          <li><strong>Title:</strong> <input type="text" v-model="title" /></li>
          <li>
            <strong>Publisher:</strong> <input type="text" v-model="author" />
          </li>
        </ul>
        <button type="submit" class="submit-btn">Cast</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      genre: "",
      title: "",
      author: "",
    };
  },
  methods: {
    handleSubmit() {
      console.log("Submitted values:", {
        genre: this.genre,
        title: this.title,
        author: this.author,
      });
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.search-page {
  font-family: serif;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  background: url("@/assets/background.png") no-repeat center center fixed;
  background-size: cover;
}

.search-box {
  background: #fff;
  border: 10px solid black;
  padding: 2rem;
  max-width: 500px;
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
}

.spell-title {
  color: #222;
  text-align: center;
  font-weight: bold;
  font-size: 1.6rem;
  margin-bottom: 1rem;
}

.spell-form ul {
  list-style: disc;
  padding-left: 1rem;
  margin-bottom: 1.5rem;
}

.spell-form li {
  margin-bottom: 1.5rem;
  color: #222;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.5px;
}

.spell-form li strong {
  display: inline-block;
  width: 80px;
  color: #3b1f0d;
  font-family: "Garamond", serif;
  font-size: 1.05rem;
  font-weight: bold;
}
.spell-form input {
  margin-left: 10px;
  padding: 4px 8px;
  border: 1px solid #aaa;
  border-radius: 4px;
  background-color: #fdf6e3;
  color: #222;
}

.submit-btn {
  display: block;
  margin: 1rem auto 0;
  padding: 0.5rem 1.5rem;
  background: #333;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background 0.3s;
}
.submit-btn:hover {
  background: #555;
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
</style>
