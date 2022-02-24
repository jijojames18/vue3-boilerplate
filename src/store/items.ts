import { defineStore } from "pinia";

export const itemStore = defineStore("items", {
  state: () => ({
    items: [],
  }),
  getters: {
    getItems: (state) => state.items,
  },
  actions: {
    addItem(item) {
      return this.items.push(item);
    },
    async getAndAddItem(itemId) {
      // fetch item here
      const fetchedItem = await [{ id: itemId }];
      return this.items.push(fetchedItem);
    },
    removeItem(itemId) {
      this.items = this.items.filter((item) => item.id !== itemId);
      return this.items;
    },
  },
});
