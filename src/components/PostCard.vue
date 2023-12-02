<template>
    <div class="dummy">

        <div class="card">
        <div class="card-image-container">
          <img class="card-image" :src="item.image" />
        </div>
        <div class="card-header">
          <div class="card-title">{{ item.title }}</div>
          <p>
            {{ item.description }}
          </p>
        </div>
        <div class="card-subtitle">
          <span class="chip">{{ item.category }}</span>
        </div>
      </div>
    </div>
</template>

<script setup>
// eslint-disable-next-line
const props = defineProps({
  item: Object,
});
// import { masonry } from "vue-masonry-css";
// import Vue from 'vue'
// Vue.use(VueMasonryPlugin)
// export default {
//   name: "HelloWorld",
//   props: {
//     msg: String,
//   },
// };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.dummy {
    /* border:1px solid red; */
}
@import url("https://fonts.googleapis.com/css2?family=Inter&display=swap");




@import url("https://fonts.googleapis.com/css2?family=Fira+Sans+Condensed:wght@500&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Fira+Sans+Condensed:ital,wght@1,600&display=swap");

@import url("https://fonts.googleapis.com/css2?family=Fira+Sans+Condensed:ital,wght@1,500&display=swap");
/* Generic styles */
html {
  scroll-behavior: smooth;
  background-color: var(--BG-COLOR);
}

body {
  margin: 2rem 1.5rem;
  padding: 0;
}

.boo {
  /* flex:1; */
  flex-basis: 512px;
  flex-shrink: 0;
}

.card {
  background-color: var(--CARD-BG-COLOR);
  /* flex: 1 1 512px; */
  display: flex;
  /* justify-content: space-between; */
  flex-direction: column;
  /* border: 1px solid #5f0f40; */
  padding: 1.5rem;
  /* margin: 0rem 1.5rem; */
  border-radius: 1.5rem 1.5rem 1.5rem 1.5rem;
  max-width: 512px;
  min-width: 300px;
  box-shadow: rgba(64, 55, 67, 0.3) -4px 9px 25px -6px;
}
* {
  box-sizing: border-box;
}
.card-image-container {
  overflow: hidden;
}

.card-image {
  border-radius: 0.25rem 0.25rem 0.25rem 0.25rem;
  width: 100%;
}

.card-title {
  text-transform: capitalize;
  font-family: "Fira Sans Condensed", sans-serif;
  color: var(--CARD-TITLE-COLOR);
  font-weight: 500;
  /* font-style: italic; */
  font-size: 2rem;
  line-height: 2rem;
}

.card-subtitle {
  margin-top: -1rem;
  text-transform: uppercase;
  font-family: "Lato", sans-serif;
  font-size: 0.8rem;
  line-height: 1.5rem;
  color: #3d405b;
  /* opacity: 0.8; */
  font-weight: 700;
  align-self: flex-end;
  /* opacity: 0.75; */
  letter-spacing: 0.125ch;
}

.chip {
  background-color: var(--CHIP-BG-COLOR);
  /* border: 1px solid #5f0f40; */
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  color: var(--CHIP-FG-COLOR);
}

.card-title::after {
  content: "";
  padding-bottom: 1rem;
  width: 3rem;
  border-bottom: 6px solid var(--ACCENT-COLOR);
  /* opacity: 0.25; */
  display: block;
}

.card-header {
  margin: 1rem;
}

.card-body {
  padding: 1rem 1rem;
}

.card-image {
  width: 100%;
}

/* Responsive layout - makes a two column-layout instead of four columns */
/* @media (max-width: 800px) {
    .card-wrapper {
      flex: 50%;
      max-width: 50%;
    }
  } */

/* Responsive layout - makes the two card-wrappers stack on top of each other instead of next to each other */

p {
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  line-height: 1.5;
  color: #272838;
}

/* footer */
footer {
  background-color: #333;
  padding: 0.75rem;
  color: white;
  text-align: center;
  font-size: 0.75rem;
}
</style>
