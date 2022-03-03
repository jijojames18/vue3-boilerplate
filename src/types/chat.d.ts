export declare interface ChatCredentials {
  username: string;
  password: string;
}

export declare interface ChatMessage {
  author: string;
  id: Number;
  message: string;
}

export declare interface ChatStore {
  credentials: ChatCredentials;
  messages: Array<ChatMessage>;
  isLoggedIn: Boolean;
}
