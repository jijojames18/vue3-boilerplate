<template>
  <input
    :class="classList"
    :id="id"
    :type="type"
    :placeholder="placeholder"
    @change="inputChanged"
  />
</template>

<script setup lang="ts">
const props = defineProps({
  classList: {
    type: String,
    default:
      'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
  },
  type: {
    type: String,
    default: 'text'
  },
  placeholder: {
    type: String,
    default: 'Placeholder'
  }
});

const id = new Date().getTime().toString();

const emit = defineEmits(['inputChanged']);

const inputChanged = (value: Event): void => {
  emit('inputChanged', value);
};
</script>
