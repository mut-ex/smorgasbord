<template>
  <div class="card">
    <div class="card-image-container" v-viewer :backdrop="false">
      <img class="card-image" :style="{ 'aspect-ratio': item.image.aspect_ratio }" :src="item.image.thumbnail"
        :data-src="item.image.source" :alt="item.title" />
    </div>
    <div class="card-header">
      <div class="card-title">{{ item.title }}</div>
      <!-- <p> -->
      <!-- {{ item.description }} -->
      <!-- </p> -->
    </div>
    <div class="card-footer">
      <span class="card-date">{{ formatDate(item.date) }}</span>
      <div class="chip">{{ item.category }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  item: Item
}>()

function formatDate(date: Date) {
  const months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];
  return (
    months[date.getMonth()] +
    " " +
    date.getDate() +
    ", " +
    (date.getFullYear())
  );
}
</script>

<style></style>
