<template>
  <button :class="classList" @click="click">{{ buttonText }}</button>
</template>

<script setup lang="ts">
const props = defineProps({
  classList: {
    type: String,
    default:
      'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
  },
  buttonText: {
    type: String,
    default: 'Button'
  }
});

const emit = defineEmits(['buttonClicked']);

const click = (): void => {
  emit('buttonClicked');
};
</script>
