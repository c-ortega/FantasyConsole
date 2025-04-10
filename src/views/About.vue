<template>
  <div class="about-page">
    <router-link to="/" class="home-button">🏠</router-link>

    <div class="about-wrapper">
      <h1 class="title">About Us</h1>

      <div class="about-content">
        <img src="@/assets/crystalBall.png" class="about-logo" alt="FS Logo" />

        <div class="profile-area">
          <div class="profile-icon"></div>
        </div>
      </div>

      <div class="about-box">
        <h2>About us:</h2>
        <p>
          • At the risk of sounding terribly sincere, we are<br />
          &nbsp;&nbsp;largely focused on saving the world.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.about-page {
  font-family: serif;
  color: #222;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url("@/assets/background.png") no-repeat center center fixed;
  background-size: cover;
}

.about-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 800px;
  width: 100%;
  padding: 2rem;
}

.title {
  font-size: 2rem;
  color: #ccc;
  margin-bottom: 1rem;
}

.about-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
}

.about-logo {
  width: 100px;
}

.profile-area {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.profile-icon {
  width: 150px;
  height: 150px;
  background-color: #222;
  border-radius: 50% 50% 0 0;
}

.about-box {
  background: #f4f4f4;
  padding: 1.2rem 1.5rem;
  border-radius: 8px;
  font-style: italic;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.2);
  max-width: 500px;
  text-align: left;
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
  text-decoration: none;
  transition: transform 0.2s ease;
  z-index: 10;
}
.home-button:hover {
  transform: scale(1.1);
}
</style>
