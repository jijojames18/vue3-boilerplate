<script setup>
    import { itemStore } from '@/store/items';
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
    <div class="bg-[#f30] local-class">{{ JSON.stringify(store.items)  }}</div>
</template>

<style>
.local-class {
    font-weight: bold;
}

</style>