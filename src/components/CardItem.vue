<template>
  <div class="card">
    <div class="card-image-container"
         v-viewer
         :backdrop="false">
      <img class="card-image"
      :style="{'aspect-ratio': item.image.aspect_ratio }"
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
      <span class="card-date">{{ format_date(item.date) }}</span>
      <div class="chip">{{ item.category }}</div>
    </div>
  </div>
</template>

<script setup>
// eslint-disable-next-line
const props = defineProps({
  item: Object,
});

function format_date(date) {
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
    (date.getYear() + 1900)
  );
}
</script>

<style ></style>
