<template>
    <div class="chat-view-1">
        <span>{{ credentials.username }}</span>
        <input v-model="newMessage" />
        <button @click="sendMessage">Send</button>
        <div class="message-list">
            <ul>
                <li
                    v-for="({ author, id, message }) in messages"
                    :key="id.toString()"
                >{{ author }} {{ id }} {{ message }}</li>
            </ul>
        </div>
        <login-view></login-view>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { chatStore } from '@/store/chat';
import { storeToRefs } from 'pinia';
import LoginView from './Login.vue';

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
}


</script>

<style>
</style>