<script setup>
    import { itemStore } from './store/items';
    const store = itemStore();
    // store.$reset();
    // store.$patch({
    //     items: []
    // });
    // store.$subscribe((mutation, state) => {
    //     console.log(state);
    // });
</script>

<template>
    <div>{{ JSON.stringify(store.items)  }}</div>
</template>