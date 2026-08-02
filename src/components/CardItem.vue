<template>
  <div class="card">
    <div class="card-image-container" v-viewer :backdrop="false">
      <img class="card-image" :style="{ 'aspect-ratio': item.image.aspect_ratio }" :src="item.image.thumbnail"
        :data-src="item.image.source" :alt="item.title" loading="lazy" />
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

function formatDate(date: string) {
  const date_= new Date(`${date}T12:00:00-06:30`)
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
    months[date_.getMonth()] +
    " " +
    date_.getDate() +
    ", " +
    (date_.getFullYear())
  );
}
</script>

<style></style>
