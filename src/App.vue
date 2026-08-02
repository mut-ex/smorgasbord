<script setup lang="ts">
import { ref, computed } from "vue";
import { items } from "./items.ts";
import CardItem from "./components/CardItem.vue";

const categories: Category[] = ["baking", "drawing", "painting", "calligraphy & lettering", "digital art", "sculpting", "3d prints", "electronics", "sewing & embroidery", "jewelry & pins", "paracord", "printmaking"];

const categoryRef = ref<Category>("all");

function shuffle(arr: any) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function selectCategory(category: Category) {
  categoryRef.value = "none";
  setTimeout(() => (categoryRef.value = category), 1);
}

const itemCountByCategory = Object.fromEntries(
  categories.map((category: Category) => {
    return [category, items.filter((item) => item.category === category).length]
  }))

const itemsFiltered = computed(() => shuffle(items
  .filter((item) => categoryRef.value === item.category || categoryRef.value === "all"))
);

</script>

<template>
  <main>
    <img class="logo" src="./assets/logo.svg" alt="adil's smörgåsbord" />
    <div class="filter-group">
      <button class="chip" :class="{ filter_active: categoryRef === 'all' }" @click="selectCategory('all')">
        all ({{ items.length }})
      </button>
      <button v-for="(category, id) in categories" :key="id" class="chip"
        :class="{ filter_active: categoryRef === category }" @click="selectCategory(category)">
        {{ category }} ({{ itemCountByCategory[category] }})
      </button>
    </div>
    <div class="cards">
      <TransitionGroup name="list">
        <div v-for="item in itemsFiltered" :key="item.title">
          <CardItem :item=item>
          </CardItem>
        </div>
      </TransitionGroup>
    </div>
  </main>
</template>



<style>
.viewer-backdrop {
  transition: all 0.2s !important;
  backdrop-filter: blur(8px) grayscale(50%);
}
</style>
