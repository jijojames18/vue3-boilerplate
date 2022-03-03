import { defineStore } from 'pinia';
import type { ChatStore } from '@/types/chat';

export const chatStore = defineStore('chat-store', {
  state: () => {
    return {
      credentials: {
        username: '',
        password: ''
      },
      messages: [],
      isLoggedIn: false
    } as ChatStore;
  }
});
