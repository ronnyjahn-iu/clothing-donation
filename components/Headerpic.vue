<template>
    <img :src="imagePath" :alt="imageAlt" class="h-[200px] lg:h-[400px] w-full object-cover border-b-[5px] border-primary" />
</template>

<script setup>
import { useRoute } from "vue-router";
import { ref, watch } from "vue";

const route = useRoute();
const imagePath = ref(getImagePath(route.path));
const imageAlt = ref(getImageAlt(route.path));

function getImagePath(path) {
    const routeToImageMap = {
        "/": "/images/headerpic-home.jpeg",
        "/unterstuetzen": "/images/headerpic-support.jpeg",
        "/ueber-uns": "/images/headerpic-about.jpeg",
        "/kontakt": "/images/headerpic-contact.jpeg",
    };
    return routeToImageMap[path] || "/images/headerpic-home.jpeg";
}

function getImageAlt(path) {
    const routeToAltMap = {
        "/": "Willkommen bei SecondLove - Deine Hilfe zählt!",
        "/unterstuetzen": "Unterstütze uns mit deiner Spende",
        "/ueber-uns": "Erfahre mehr über uns",
        "/kontakt": "Kontakt mit uns aufnehmen",
    };
    return routeToAltMap[path] || "Willkommen bei SecondLove - Deine Hilfe zählt!";
}

watch(
    () => route.path,
    (newPath) => {
        imagePath.value = getImagePath(newPath);
        imageAlt.value = getImageAlt(newPath);
    },
    { immediate: true }
);
</script>
