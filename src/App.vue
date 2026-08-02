<template>
  <main>
    <img class="logo" src="./assets/logo.svg" alt="adil's smörgåsbord" />
    <div class="filter-group">
      <button class="chip" :class="{ filter_active: show === 'all' }" @click="setShow('all')">
        all ({{ items.length }})
      </button>
      <button class="chip" :class="{ filter_active: show === 'baking' }" @click="setShow('baking')">
        baking ({{items.filter((item) => item.category === "baking").length}})
      </button>
      <button class="chip" :class="{ filter_active: show === 'colored pencil' }" @click="setShow('colored pencil')">
        colored pencil ({{items.filter((item) => item.category === "colored pencil").length}})
      </button>
      <button class="chip" :class="{ filter_active: show === 'sewing & embroidery' }" @click="setShow('sewing & embroidery')">
        sewing & embroidery ({{items.filter((item) => item.category === "sewing & embroidery").length}})
      </button>
      <button class="chip" :class="{ filter_active: show === 'painting' }" @click="setShow('painting')">
        painting ({{items.filter((item) => item.category === "painting").length}})
      </button>
      <button class="chip" :class="{ filter_active: show === 'paracord' }" @click="setShow('paracord')">
        paracord ({{items.filter((item) => item.category === "paracord").length}})
      </button>
      <button class="chip" :class="{ filter_active: show === 'sculpting' }" @click="setShow('sculpting')">
        sculpting ({{items.filter((item) => item.category === "sculpting").length}})
      </button>
      <button class="chip" :class="{ filter_active: show === 'wire wrapping' }" @click="setShow('wire wrapping')">
        wire wrapping ({{items.filter((item) => item.category === 'wire wrapping').length}})
      </button>
    </div>
    <div class="cards">
      <TransitionGroup name="list">
        <div v-for="item in filtered_items" :key="item.title">
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
    title: 'Pug Plushie',
    category: "sewing & embroidery",
    image: {
      thumbnail: require("./assets/thumbs/pug_plushie.webp"),
      source: require("./assets/pug_plushie.png"),
      aspect_ratio: "1 / 1",
    },
    date: new Date("2024-05-09T12:00:00-06:30"),
  },    
    {
    title: 'Cartoon Cake Slice',
    category: "baking",
    image: {
      thumbnail: require("./assets/thumbs/cartoon_cake.webp"),
      source: require("./assets/cartoon_cake.jpeg"),
      aspect_ratio: "3024 / 4032",
    },
    date: new Date("2023-11-26T12:00:00-06:30"),
  },    
{
    title: 'Hank',
    category: "colored pencil",
    image: {
      thumbnail: require("./assets/thumbs/hank_1.webp"),
      source: require("./assets/hank_1.png"),
      aspect_ratio: "2567 / 1712",
    },
    date: new Date("2023-03-11T12:00:00-06:30"),
  },
  {
    title: 'Flying Saucer',
    category: "sculpting",
    image: {
      thumbnail: require("./assets/thumbs/UFO.webp"),
      source: require("./assets/UFO.png"),
      aspect_ratio: "2048 / 2732",
    },
    date: new Date("2023-03-20T12:00:00-06:30"),
  },
  {
    title: 'Macarons With German Chocolate Buttercream Filling',
    category: "baking",
    image: {
      thumbnail: require("./assets/thumbs/macarons.webp"),
      source: require("./assets/macarons.png"),
      aspect_ratio: "3 / 2",
    },
    date: new Date("2023-03-20T12:00:00-06:30"),
  },
  {
    title: 'Ice Cream (Acrylic)',
    category: "painting",
    image: {
      thumbnail: require("./assets/thumbs/icecream_painting.webp"),
      source: require("./assets/icecream_painting.png"),
      aspect_ratio: "4 / 5",
    },
    date: new Date("2021-09-29T12:00:00-06:30"),
  },
  {
    title: 'Rooster (Gouache)',
    category: "painting",
    image: {
      thumbnail: require("./assets/thumbs/rooster.webp"),
      source: require("./assets/rooster.png"),
      aspect_ratio: "5 / 7",
    },
    date: new Date("2021-08-11T12:00:00-06:30"),
  },
  {
    title: 'Pâte Sablée "Cake" With Chantilly Mascarpone',
    category: "baking",
    image: {
      thumbnail: require("./assets/thumbs/63.webp"),
      source: require("./assets/63.png"),
      aspect_ratio: "5 / 4",
    },
    date: new Date("2023-08-29T12:00:00-06:30"),
  },
  {
    title: "3D Hand Lettering (Acrylic)",
    category: "painting",
    image: {
      thumbnail: require("./assets/thumbs/adil.webp"),
      source: require("./assets/adil.jpg"),
      aspect_ratio: "5 / 4",
    },
    date: new Date("2021-11-01T12:00:00-06:30"),
  },
  {
    title: "Conquistador Watchband",
    category: "paracord",
    image: {
      thumbnail: require("./assets/thumbs/conquistadorwatch.webp"),
      source: require("./assets/conquistadorwatch.jpg"),
      aspect_ratio: "5 / 4",
    },
    date: new Date("2021-05-11T12:00:00-06:30"),
  },
  {
    title: "Chocolate Malt Cake",
    category: "baking",
    image: {
      thumbnail: require("./assets/thumbs/chocolatemalt.webp"),
      source: require("./assets/chocolatemalt.jpg"),
      aspect_ratio: "1 / 1",
    },
    date: new Date("2022-07-08T12:00:00-06:30"),
  },
  {
    title: "Pug Iron-On Patch",
    category: "sewing & embroidery",
    image: {
      thumbnail: require("./assets/thumbs/pugpatch.webp"),
      source: require("./assets/pugpatch.jpg"),
      aspect_ratio: "1 / 1",
    },
    date: new Date("2022-08-01T12:00:00-06:30"),
  },
  {
    title: "Chocolate Chewies",
    category: "baking",
    image: {
      thumbnail: require("./assets/thumbs/chewie.webp"),
      source: require("./assets/chewie.jpg"),
      aspect_ratio: "4 / 5",
    },
    date: new Date("2023-12-10T12:00:00-06:30"),
  },
  {
    title: "S'more Blossom Cookies",
    category: "baking",
    image: {
      thumbnail: require("./assets/thumbs/smore.webp"),
      source: require("./assets/smore.jpg"),
      aspect_ratio: "5 / 4",
    },
    date: new Date("2023-12-11T12:00:00-06:30"),
  },
  {
    title: "Coconut Snowman Cookies",
    category: "baking",
    image: {
      thumbnail: require("./assets/thumbs/snowman.webp"),
      source: require("./assets/snowman.jpg"),
      aspect_ratio: "4 / 5",
    },
    date: new Date("2023-12-10T12:00:00-06:30"),
  },
  {
    title: "Linzer Cookies",
    category: "baking",
    image: {
      thumbnail: require("./assets/thumbs/linzer.webp"),
      source: require("./assets/linzer.jpg"),
      aspect_ratio: "5 / 4",
    },
    date: new Date("2023-12-08T12:00:00-06:30"),
  },
  {
    title: "KFC Fried Chicken Bucket",
    category: "sculpting",
    image: {
      thumbnail: require("./assets/thumbs/kfc.webp"),
      source: require("./assets/kfc.jpg"),
      aspect_ratio: "5 / 4",
    },
    date: new Date("2021-05-01T12:00:00-06:30"),
  },
  {
    title: "biscoff cheesecake",
    category: "baking",
    image: {
      thumbnail: require("./assets/thumbs/biscoff_cheesecake.webp"),
      source: require("./assets/biscoff_cheesecake.jpg"),
      aspect_ratio: "1 / 1",
    },
    date: new Date("2023-09-01T12:00:00-06:30"),
  },
  {
    title: "soap bubble",
    category: "colored pencil",
    image: {
      thumbnail: require("./assets/thumbs/bubble.webp"),
      source: require("./assets/bubble.jpg"),
      aspect_ratio: "3 / 2",
    },
    date: new Date("2021-04-19T12:00:00-06:30"),
  },
  {
    title: "ring with polymer clay stone",
    category: "wire wrapping",
    image: {
      thumbnail: require("./assets/thumbs/ring.webp"),
      source: require("./assets/ring.jpg"),
      aspect_ratio: "3 / 2",
    },
    date: new Date("2021-11-03T12:00:00-06:30"),
  },
  {
    title: "hotdog bun",
    category: "sculpting",
    image: {
      thumbnail: require("./assets/thumbs/hotdogbun.webp"),
      source: require("./assets/hotdogbun.jpg"),
      aspect_ratio: "5 / 4",
    },
    date: new Date("2021-10-19T12:00:00-06:30"),
  },
  {
    title: "slice of pepperoni pizza (acrylic)",
    category: "painting",
    image: {
      thumbnail: require("./assets/thumbs/pizza.webp"),
      source: require("./assets/pizza.jpg"),
      aspect_ratio: "1 / 1",
    },
    date: new Date("2021-09-21T12:00:00-06:30"),
  },
  {
    title: "rosette cake",
    category: "baking",
    image: {
      thumbnail: require("./assets/thumbs/rosette_cake.webp"),
      source: require("./assets/rosette_cake.jpg"),
      aspect_ratio: "4 / 3",
    },
    date: new Date("2023-06-07T12:00:00-06:30"),
  },
  {
    title: "dulce de leche cookies",
    category: "baking",
    image: {
      thumbnail: require("./assets/thumbs/dulcedeleche_cookies.webp"),
      source: require("./assets/dulcedeleche_cookies.jpg"),
      aspect_ratio: "3 / 2",
    },
    date: new Date("2023-06-10T12:00:00-06:30"),
  },
  {
    title: "ice cream in a waffle cone",
    category: "sculpting",
    image: {
      thumbnail: require("./assets/thumbs/icecream.webp"),
      source: require("./assets/icecream.jpg"),
      aspect_ratio: "3 / 2",
    },
    date: new Date("2021-04-28T12:00:00-06:30"),
  },
  {
    title: "monkey's fist keyring",
    category: "paracord",
    image: {
      thumbnail: require("./assets/thumbs/monkey_fist.webp"),
      source: require("./assets/monkey_fist.jpg"),
      aspect_ratio: "1 / 1",
    },
    date: new Date("2021-04-20T12:00:00-06:30"),
  },
  {
    title: "an escape",
    category: "colored pencil",
    image: {
      thumbnail: require("./assets/thumbs/sunset.webp"),
      source: require("./assets/sunset.jpg"),
      aspect_ratio: "4 / 5",
    },
    date: new Date("2021-08-01T12:00:00-06:30"),
  },
  {
    title: "gyro wrap",
    category: "sculpting",
    image: {
      thumbnail: require("./assets/thumbs/gyro.webp"),
      source: require("./assets/gyro.jpg"),
      aspect_ratio: "3 / 2",
    },
    date: new Date("2021-05-05T12:00:00-06:30"),
  },
  {
    title: "vintage cherry cake",
    category: "baking",
    image: {
      thumbnail: require("./assets/thumbs/vintage_cherry.webp"),
      source: require("./assets/vintage_cherry.jpg"),
      aspect_ratio: "4 / 5",
    },
    date: new Date("2023-11-24T12:00:00-06:30"),
  },

  {
    title: "courage the cowardly dog",
    category: "sewing & embroidery",
    image: {
      thumbnail: require("./assets/thumbs/courage.webp"),
      source: require("./assets/courage.jpg"),
      aspect_ratio: "4 / 5",
    },
    date: new Date("2022-01-16T12:00:00-06:30"),
  },
  {
    title: "hogwarts crest",
    category: "sewing & embroidery",
    image: {
      thumbnail: require("./assets/thumbs/hogwarts_crest.webp"),
      source: require("./assets/hogwarts_crest.jpg"),
      aspect_ratio: "1 / 1",
    },
    date: new Date("2022-03-08T12:00:00-06:30"),
  },
  {
    title: "still life I (oil)",
    category: "painting",
    image: {
      thumbnail: require("./assets/thumbs/stilllife_apples.webp"),
      source: require("./assets/stilllife_apples.jpg"),
      aspect_ratio: "5 / 4",
    },
    date: new Date("2021-11-28T12:00:00-06:30"),
  },

  {
    title: "molasses spice cookies",
    category: "baking",
    image: {
      thumbnail: require("./assets/thumbs/molasses_spice_cookies.webp"),
      source: require("./assets/molasses_spice_cookies.jpg"),
      aspect_ratio: "4 / 5",
    },
    date: new Date("2023-08-07T12:00:00-06:30"),
  },
  {
    title: "saguaros in the desert (oil)",
    category: "painting",
    image: {
      thumbnail: require("./assets/thumbs/saguaros.webp"),
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
