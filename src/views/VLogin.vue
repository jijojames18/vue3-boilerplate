<template>
  <div class="login-view">
    <v-input @inputChanged="updateUserName" />
  </div>
</template>

<script setup lang="ts">
import { chatStore } from '@/store/chat';
import { storeToRefs } from 'pinia';
import VInput from '@/components/VInput.vue';

const store = chatStore();
let { credentials } = storeToRefs(store);

const updateUserName = (event: { target: HTMLInputElement }): void => {
  credentials.value.username = event.target.value;
};
</script>

<style></style>
