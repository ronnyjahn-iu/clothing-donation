<template>
    <img :src="imagePath" alt="Headerbild" class="h-[200px] lg:h-[400px] w-full object-cover border-b-[5px] border-primary" />
</template>

<script setup>
import { useRoute } from "vue-router";
import { ref, watch } from "vue";

const route = useRoute();
const imagePath = ref(getImagePath(route.path));

function getImagePath(path) {
    const routeToImageMap = {
        "/": "/images/headerpic-home.jpeg",
        "/unterstuetzen": "/images/headerpic-support.jpeg",
        "/ueber-uns": "/images/headerpic-about.jpeg",
        "/kontakt": "/images/headerpic-contact.jpeg",
    };
    return routeToImageMap[path] || "/images/headerpic-home.jpeg";
}

watch(
    () => route.path,
    (newPath) => {
        imagePath.value = getImagePath(newPath);
    },
    { immediate: true }
);
</script>
