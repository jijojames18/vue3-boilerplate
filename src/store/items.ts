import { defineStore } from 'pinia';
import { ItemDefinition, ItemsDefinition } from '@/types/items';
export const itemStore = defineStore('items', {
  state: () =>
    ({
      items: []
    } as ItemsDefinition),
  getters: {
    getItems: (state) => state.items
  },
  actions: {
    addItem(item: ItemDefinition) {
      return this.items.push(item);
    },
    async getAndAddItem(itemId: string): Promise<number> {
      const fetchedItem = await Promise.resolve({ id: itemId });
      return this.items.push(fetchedItem);
    },
    removeItem(itemId: string) {
      this.items = this.items.filter((item) => item.id !== itemId);
      return this.items;
    }
  }
});
