<template>
  <main>
    <img class="logo" src="./assets/logo2.svg" />
    <div class="container">
      <PostCard v-for="item in items" :key="item.title" :item="item">
      </PostCard>
      <div class="boo"></div>
      <div class="boo"></div>
      <div class="boo"></div>
      <div class="boo"></div>
      <div class="boo"></div>
      <div class="boo"></div>
    </div>
  </main>
</template>

<script setup>
import PostCard from "./components/PostCard.vue";

const items = [
  {
    title: "vintage style cherry vanilla cake",
    description:
      "An 8-inch triple layer vanilla cake with cherry filling and Swiss Meringue Buttercream frosting!",
    category: "baking",
    image: require("./assets/0.png"),
  },
  {
    title: "pug iron-on patch",
    category: "embroidery",
    image: require("./assets/1.png"),
  },
  {
    title: "biscoff cheesecake",
    category: "baking",
    image: require("./assets/biscoff_cheesecake.png"),
  },
  {
    title: "cartoon cake",
    category: "baking",
    image: require("./assets/cartoon_cake.jpeg"),
  },
  {
    title: "ice cream in a waffle cone",
    category: "miniature sculpting",
    image: require("./assets/2.jpeg"),
  },
  {
    title: "KFC fried chicken bucket",
    category: "miniature sculpting",
    image: require("./assets/3.png"),
  },
  {
    title: "dulce de leche sandwich cookies",
    category: "baking",
    image: require("./assets/4.jpeg"),
  },
  {
    title: "vintage style cake i",
    category: "baking",
    image: require("./assets/5.jpeg"),
  },
  {
    title: "Chocolate Malt Cake",
    category: "baking",
    image: require("./assets/6.jpeg"),
  },
];
</script>

<style>
.boo {
  /* flex:1; */
  flex-basis: 512px;
  flex-shrink: 0;
}
.container {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 2560px;
}

.header-section {
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo {
  /* flex-basis: 512px; */
  /* margin-top: 1rem; */
  /* margin-bottom: 2rem; */
  margin-bottom: 2%;
  max-width: 512px;
  padding-left: 3rem;
  padding-right: 3rem;
  /* width: 256px; */
}

:root {
  --BG-COLOR: #564592;
  --CARD-BG-COLOR: #fbfef9;
  --CARD-TITLE-COLOR: #564592;
  --ACCENT-COLOR: #edf67d;
  --CHIP-BG-COLOR: #f896d8;
  --CHIP-FG-COLOR: #fbfef9;
}
@import url("https://fonts.googleapis.com/css2?family=Fira+Sans+Condensed:ital,wght@1,900&display=swap");

header {
  font-family: "Fira Sans Condensed", sans-serif;
  font-weight: 900;
  font-style: italic;
  font-size: 3rem;
  text-align: center;
  margin-bottom: 1.5rem;
  color: #e5ddcb;
}

section {
  display: flex;
  flex-direction: column;
  /* border: 1px solid black; */
}

main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* max-width: 70%; */
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
</style>
