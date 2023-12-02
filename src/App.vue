<template>
  <main>
    <img class="logo" src="./assets/logo2.svg" />
    <div class="filter-group">
      <button
        class="chip"
        :class="{ filter_active: show === 'all' }"
        @click="setShow('all')"
      >
        all
      </button>
      <button
        class="chip"
        :class="{ filter_active: show === 'baking' }"
        @click="setShow('baking')"
      >
        baking
      </button>
      <button
        class="chip"
        :class="{ filter_active: show === 'embroidery' }"
        @click="setShow('embroidery')"
      >
        embroidery
      </button>
      <button
        class="chip"
        :class="{ filter_active: show === 'miniature sculpting' }"
        @click="setShow('miniature sculpting')"
      >
        miniature sculpting
      </button>
    </div>
    <div class="cards">
      <TransitionGroup name="list">
        <div v-for="item in filtered_items" :key="item.title">
          <div class="card">
            <div class="card-image-container" v-viewer :backdrop="false">
              <!-- <img class="card-image" :src="item.image" :alt="item.title"/> -->
              <img
                class="card-image"
                :src="item.image.thumbnail"
                :data-src="item.image.source"
                :alt="item.title"
              />
            </div>
            <div class="card-header">
              <div class="card-title">{{ item.title }}</div>
              <p>
                {{ item.description }}
              </p>
            </div>
            <div class="card-footer">
              <span class="card-date">{{ item.date }}</span>
              <div class="chip">{{ item.category }}</div>
            </div>
          </div>
        </div>
      </TransitionGroup>
      <!-- <div class="ghost-card"></div>
      <div class="ghost-card"></div>
      <div class="ghost-card"></div>
      <div class="ghost-card"></div>
      <div class="ghost-card"></div>
      <div class="ghost-card"></div> -->
    </div>
  </main>
</template>

<script setup>
import { ref, computed } from "vue";

var show = ref("all");

function setShow(new_val) {
  show.value = "none";
  setTimeout(() => (show.value = new_val), 1);
}

const filtered_items = computed({
  get() {
    return items.filter(
      (item) => show.value === item.category || show.value === "all"
    );
  },
});

const items = [
  {
    title: "hogwarts crest",
    category: "embroidery",
    image: {
      thumbnail: require("./assets/hogwarts_crest_thumbnail.png"),
      source: require("./assets/hogwarts_crest.png"),
    },
    date: "9ᵗʰ FEB '22",
  },
  // {
  //   title: "courage the cowardly dog",
  //   category: "embroidery",
  //   image: require("./assets/courage.png"),
  // },
  // {
  //   title: "vintage style cherry vanilla cake",
  //   description:
  //     "An 8-inch triple layer vanilla cake with cherry filling and Swiss Meringue Buttercream frosting!",
  //   category: "baking",
  //   image: require("./assets/0.png"),
  // },

  // {
  //   title: "biscoff cheesecake",
  //   category: "baking",
  //   image: require("./assets/biscoff_cheesecake.png"),
  // },
  // {
  //   title: "cartoon cake",
  //   category: "baking",
  //   image: require("./assets/cartoon_cake.jpeg"),
  // },
  // {
  //   title: "ice cream in a waffle cone",
  //   category: "miniature sculpting",
  //   image: require("./assets/2.jpeg"),
  // },
  // {
  //   title: "pug iron-on patch",
  //   category: "embroidery",
  //   image: require("./assets/1.png"),
  // },
  // {
  //   title: "KFC fried chicken bucket",
  //   category: "miniature sculpting",
  //   image: require("./assets/3.png"),
  // },
  // {
  //   title: "dulce de leche sandwich cookies",
  //   category: "baking",
  //   image: require("./assets/4.jpeg"),
  // },
  // {
  //   title: "vintage style cake i",
  //   category: "baking",
  //   image: require("./assets/5.jpeg"),
  // },
  // {
  //   title: "Chocolate Malt Cake",
  //   category: "baking",
  //   image: require("./assets/6.jpeg"),
  // },
];
</script>

<style>
.viewer-backdrop {
  transition: all 0.2s !important;
  /* background-color: rgba(0, 0, 0, 0.6) !important; */
  backdrop-filter: blur(8px) grayscale(50%);
}
</style>
