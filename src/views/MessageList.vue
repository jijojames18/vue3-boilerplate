<template>
  <div class="message-list">
    <ul>
      <li v-for="{ author, id, message } in messages" :key="id.toString()">
        {{ author }} {{ id }} {{ message }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { chatStore } from '@/store/chat';
import { storeToRefs } from 'pinia';
import {
  watchEffect,
  watch,
  onMounted,
  onUpdated,
  onBeforeMount,
  onUnmounted,
  onBeforeUpdate
} from 'vue';

const store = chatStore();
let { messages } = storeToRefs(store);

watchEffect((): void => {
  // Lazy
  console.log('watchEffect: New Message Added');
  console.log(messages.value[messages.value.length - 1]);
});

watch(messages, (): void => {
  // Will not work.. Only work for value change(primitives or value is replaced for others)
  console.log('watch: New message added');
});

// Lifecycle hooks (Not avaialable in SSR)
onMounted((): void => {
  // Called when DOM tree is created and inserted
  console.log('Mounted');
});

onUpdated((): void => {
  // Dont mutate state here. Use nextTick for updated dom
  console.log('Updated');
});

onBeforeMount((): void => {
  // Called when reactive state is setup
  console.log('onBeforeMount');
});

onUnmounted((): void => {
  console.log('onUnmounted');
});

onBeforeUpdate((): void => {
  //Called when props change
  console.log('onBeforeUpdate');
});

// onRenderTracked and onRenderTriggered -> Reactivity is tracked and triggered(Dev only)
</script>
