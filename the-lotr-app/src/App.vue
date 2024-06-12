<template>
  <div id="app-root">
    <header>
      <img alt="LOTR logo" class="logo" src="@/assets/1x/lotr.png" />

      <div class="wrapper">
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <router-link :to="{ name: 'quote' }">Quotes</router-link>
          <router-link :to="{ name: 'movie' }">Movies</router-link>
          <router-link :to="{ name: 'character' }">Characters</router-link>
        </nav>
      </div>
    </header>
    <div class="main-content">
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  position: sticky;
  top: 0;
  z-index: 1000;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
  width: 100%;
  max-width: 125px;
  height: auto;
  object-fit: contain;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}


nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
    /* margin: 20px 0px 20px; */
    padding-top: 16px;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: 1rem;
    font-size: 1.25rem;
    padding: 1rem 0;
    margin-top: 0rem;
  }
}
</style>
