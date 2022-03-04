<template>
  <div class="chat-view">
    <span>{{ credentials.username }}</span>
    <Input @inputChanged="inputChanged" />
    <Button @buttonClicked="sendMessage" :buttonText="'Send'"></Button>
    <div class="message-list">
      <ul>
        <li v-for="{ author, id, message } in messages" :key="id.toString()">
          {{ author }} {{ id }} {{ message }}
        </li>
      </ul>
    </div>
    <Login></Login>
    <Spinner></Spinner>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { chatStore } from '@/store/chat';
import { storeToRefs } from 'pinia';
import Login from './Login.vue';
import Button from '@/components/Button.vue';
import Input from '@/components/Input.vue';
import Spinner from '@/components/Spinner.vue';

const store = chatStore();

let { messages, credentials } = storeToRefs(store);

let userName = credentials.value.username;

let newMessage = ref('');

const sendMessage = (): void => {
  messages.value.push({
    author: credentials.value.username,
    id: Math.random(),
    message: newMessage.value
  });

  newMessage.value = '';
};

const inputChanged = (event: Event): void => {
  newMessage.value = event.target.value;
};
</script>

<style></style>
