<template>
  <Transition name="fade">
    <div v-if="show === item.category || show === 'all'">
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
        <div class="chip">{{ item.category }}</div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
// eslint-disable-next-line
const props = defineProps({
  item: Object,
  show: String,
});
// called before the element is inserted into the DOM.
// use this to set the "enter-from" state of the element
function onBeforeEnter(el) {}

// called one frame after the element is inserted.
// use this to start the entering animation.
function onEnter(el, done) {
  // call the done callback to indicate transition end
  // optional if used in combination with CSS
  done();
}

// called when the enter transition has finished.
function onAfterEnter(el) {}

// called when the enter transition is cancelled before completion.
function onEnterCancelled(el) {}

// called before the leave hook.
// Most of the time, you should just use the leave hook
function onBeforeLeave(el) {}

// called when the leave transition starts.
// use this to start the leaving animation.
function onLeave(el, done) {
  // call the done callback to indicate transition end
  // optional if used in combination with CSS
  done();
}

// called when the leave transition has finished and the
// element has been removed from the DOM.
function onAfterLeave(el) {}

// only available with v-show transitions
function onLeaveCancelled(el) {}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
