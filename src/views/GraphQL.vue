<template>
    <div>{{ route.params }}</div>
</template>

<script setup>
import { useRoute, useRouter, onBeforeRouteUpdate } from 'vue-router';
import { watch } from "vue";
const router = useRouter();
const route = useRoute();

watch(() => route.params.id, () => {
    console.log("Parameter changed, but route remains same");
});

onBeforeRouteUpdate(async () => {
    console.log("Route update called");
});

//router.push({ path: '/' })
</script>
