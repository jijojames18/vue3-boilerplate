<template>
  <div class="chat-view">
    <span>{{ credentials.username }}</span>
    <v-input @inputChanged="inputChanged" />
    <v-button @buttonClicked="sendMessage" :buttonText="'Send'"></v-button>
    <v-login></v-login>
    <message-list></message-list>
    <div>{{ welcomeMessage }}</div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch, inject } from 'vue';
import { chatStore } from '@/store/chat';
import { storeToRefs } from 'pinia';
import VLogin from './VLogin.vue';
import VButton from '@/components/VButton.vue';
import VInput from '@/components/VInput.vue';
import MessageList from './MessageList.vue';

const store = chatStore();

let { messages, credentials } = storeToRefs(store);

let welcomeMessage = computed((): string => `Hi ${credentials.value.username}`);

let newMessage = ref('');

const sendMessage = (): void => {
  messages.value.push({
    author: credentials.value.username,
    id: Math.random(),
    message: newMessage.value
  });
};

const inputChanged = (event: { target: HTMLInputElement }): void => {
  newMessage.value = event.target.value;
};

watch(newMessage, (): void => {
  console.log('watch: newMessage changed');
});

const version = inject('version');
console.log(version);
</script>

<style></style>
