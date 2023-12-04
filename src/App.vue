<template>
  <main>
    <img class="logo"
         src="./assets/logo.svg"
         alt="adil's smörgåsbord" />
    <div class="filter-group">
      <button class="chip"
              :class="{ filter_active: show === 'all' }"
              @click="setShow('all')">
        all
      </button>
      <button class="chip"
              :class="{ filter_active: show === 'baking' }"
              @click="setShow('baking')">
        baking
      </button>
      <button class="chip"
              :class="{ filter_active: show === 'colored pencil' }"
              @click="setShow('colored pencil')">
        colored pencil
      </button>
      <button class="chip"
              :class="{ filter_active: show === 'embroidery' }"
              @click="setShow('embroidery')">
        embroidery
      </button>
      <button class="chip"
              :class="{ filter_active: show === 'painting' }"
              @click="setShow('painting')">
        painting
      </button>
      <button class="chip"
              :class="{ filter_active: show === 'paracord' }"
              @click="setShow('paracord')">
        paracord
      </button>
      <button class="chip"
              :class="{ filter_active: show === 'sculpting' }"
              @click="setShow('sculpting')">
        sculpting
      </button>
      <button class="chip"
              :class="{ filter_active: show === 'wire wrapping' }"
              @click="setShow('wire wrapping')">
        wire wrapping
      </button>
    </div>
    <div class="cards">
      <TransitionGroup name="list">
        <div v-for="item in filtered_items"
             :key="item.title">
          <CardItem :item=item>

          </CardItem>

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
import CardItem from "./components/CardItem.vue";

var show = ref("all");

function setShow(new_val) {
  show.value = "none";
  setTimeout(() => (show.value = new_val), 1);
}

const filtered_items = computed({
  get() {
    return items
      .filter((item) => show.value === item.category || show.value === "all")
      .sort(compare_date);
  },
});

function compare_date(a, b) {
  // return a.date - b.date;
  // return b.date - a.date;
  return Math.random() - 0.5;
  // if (a.date < b.date) {
  //   return -1;
  // } else if (b.date > a.date) {
  //   return 1;
  // }
  // // a must be equal to b
  // return 0;
}

const items = [
{
    title: "KFC Fried Chicken Bucket",
    category: "sculpting",
    image: {
      thumbnail: require("./assets/kfc_thumb.webp"),
      source: require("./assets/kfc.jpg"),
      aspect_ratio: "5 / 4",
    },
    date: new Date("2021-05-01T12:00:00-06:30"),
  },
{
    title: "gyro wrap",
    category: "sculpting",
    image: {
      thumbnail: require("./assets/gyro_thumb.webp"),
      source: require("./assets/gyro.jpg"),
      aspect_ratio: "3 / 2",
    },
    date: new Date("2021-05-05T12:00:00-06:30"),
  },
  {
    title: "soap bubble",
    category: "colored pencil",
    image: {
      thumbnail: require("./assets/bubble_thumb.webp"),
      source: require("./assets/bubble.jpg"),
      aspect_ratio: "3 / 2",
    },
    date: new Date("2021-04-19T12:00:00-06:30"),
  },
  {
    title: "ring with polymer clay stone",
    category: "wire wrapping",
    image: {
      thumbnail: require("./assets/ring_thumb.webp"),
      source: require("./assets/ring.jpg"),
      aspect_ratio: "3 / 2",
    },
    date: new Date("2021-11-03T12:00:00-06:30"),
  },
  {
    title: "hotdog bun",
    category: "sculpting",
    image: {
      thumbnail: require("./assets/hotdogbun_thumb.webp"),
      source: require("./assets/hotdogbun.jpg"),
      aspect_ratio: "5 / 4",
    },
    date: new Date("2021-10-19T12:00:00-06:30"),
  },
  {
    title: "slice of pepperoni pizza (acrylic on canvas)",
    category: "painting",
    image: {
      thumbnail: require("./assets/pizza_thumb.webp"),
      source: require("./assets/pizza.jpg"),
      aspect_ratio: "1 / 1",
    },
    date: new Date("2021-09-21T12:00:00-06:30"),
  },
  {
    title: "ice cream in a waffle cone",
    category: "sculpting",
    image: {
      thumbnail: require("./assets/icecream_thumb.webp"),
      source: require("./assets/icecream.jpg"),
      aspect_ratio: "3 / 2",
    },
    date: new Date("2021-04-28T12:00:00-06:30"),
  },
  {
    title: "monkey's fist keyring",
    category: "paracord",
    image: {
      thumbnail: require("./assets/monkey_fist_thumb.webp"),
      source: require("./assets/monkey_fist.jpg"),
      aspect_ratio: "1 / 1",
    },
    date: new Date("2021-04-20T12:00:00-06:30"),
  },
  {
    title: "an escape",
    category: "colored pencil",
    image: {
      thumbnail: require("./assets/sunset_thumb.webp"),
      source: require("./assets/sunset.jpg"),
      aspect_ratio: "4 / 5",
    },
    date: new Date("2021-08-01T12:00:00-06:30"),
  },
  {
    title: "vintage cherry cake",
    category: "baking",
    image: {
      thumbnail: require("./assets/vintage_cherry_thumb.webp"),
      source: require("./assets/vintage_cherry.jpg"),
      aspect_ratio: "4 / 5",
    },
    date: new Date("2023-11-24T12:00:00-06:30"),
  },
  {
    title: "rosette cake",
    category: "baking",
    image: {
      thumbnail: require("./assets/rosette_cake_thumb.webp"),
      source: require("./assets/rosette_cake.jpg"),
      aspect_ratio: "4 / 3",
    },
    date: new Date("2023-06-07T12:00:00-06:30"),
  },
  {
    title: "dulce de leche cookies",
    category: "baking",
    image: {
      thumbnail: require("./assets/dulcedeleche_cookies_thumb.webp"),
      source: require("./assets/dulcedeleche_cookies.jpg"),
      aspect_ratio: "3 / 2",
    },
    date: new Date("2023-06-10T12:00:00-06:30"),
  },
  {
    title: "courage the cowardly dog",
    category: "embroidery",
    image: {
      thumbnail: require("./assets/courage_thumb.webp"),
      source: require("./assets/courage.jpg"),
      aspect_ratio: "4 / 5",
    },
    date: new Date("2022-01-16T12:00:00-06:30"),
  },
  {
    title: "hogwarts crest",
    category: "embroidery",
    image: {
      thumbnail: require("./assets/hogwarts_crest_thumb.webp"),
      source: require("./assets/hogwarts_crest.jpg"),
      aspect_ratio: "1 / 1",
    },
    date: new Date("2022-03-08T12:00:00-06:30"),
  },
  {
    title: "still life I (oil on canvas)",
    category: "painting",
    image: {
      thumbnail: require("./assets/stilllife_apples_thumb.webp"),
      source: require("./assets/stilllife_apples.jpg"),
      aspect_ratio: "5 / 4",
    },
    date: new Date("2021-11-28T12:00:00-06:30"),
  },
  {
    title: "biscoff cheesecake",
    category: "baking",
    image: {
      thumbnail: require("./assets/biscoff_cheesecake_thumb.webp"),
      source: require("./assets/biscoff_cheesecake.jpg"),
      aspect_ratio: "1 / 1",
    },
    date: new Date("2023-09-01T12:00:00-06:30"),
  },
  {
    title: "molasses spice cookies",
    category: "baking",
    image: {
      thumbnail: require("./assets/molasses_spice_cookies_thumb.webp"),
      source: require("./assets/molasses_spice_cookies.jpg"),
      aspect_ratio: "4 / 5",
    },
    date: new Date("2023-08-07T12:00:00-06:30"),
  },
  {
    title: "saguaros in the desert (oil on canvas)",
    category: "painting",
    image: {
      thumbnail: require("./assets/saguaros_thumb.webp"),
      source: require("./assets/saguaros.jpg"),
      aspect_ratio: "5 / 4",
    },
    date: new Date("2021-12-01T12:00:00-06:30"),
  },
];
</script>

<style>
.viewer-backdrop {
  transition: all 0.2s !important;
  /* background-color: rgba(0, 0, 0, 0.6) !important; */
  backdrop-filter: blur(8px) grayscale(50%);
}
</style>
