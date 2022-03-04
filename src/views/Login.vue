<template>
  <div class="login-view">
    <input v-model="userName" @change="updateUserName" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { chatStore } from '@/store/chat';
import { storeToRefs } from 'pinia';

const store = chatStore();

let { credentials } = storeToRefs(store);

let userName = ref('');

const updateUserName = (val: Event): void => {
  credentials.value.username = userName.value;
};
</script>

<style></style>
