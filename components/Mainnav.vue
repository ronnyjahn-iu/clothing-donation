<template>
    <ul :class="classes">
        <li>
            <NuxtLink to="/" :class="route.path === '/' ? 'active' : ''">Start</NuxtLink>
        </li>
        <li>
            <NuxtLink to="/unterstuetzen" :class="route.path === '/unterstuetzen' ? 'active' : ''">Unterstützen</NuxtLink>
        </li>
        <li>
            <NuxtLink to="/ueber-uns" :class="route.path === '/ueber-uns' ? 'active' : ''">Über uns</NuxtLink>
        </li>
        <li>
            <NuxtLink to="/kontakt" :class="route.path === '/kontakt' ? 'active' : ''">Kontakt</NuxtLink>
        </li>
        <li>
            <NuxtLink :to="(route.path !== '/' ? '/' : '') + '#register'" class="btn">Jetzt spenden</NuxtLink>
        </li>
    </ul>
</template>

<script setup>
import { onMounted, watch, nextTick } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const props = defineProps({
    classes: {
        type: String,
        default: "",
    },
});

const scrollToAnchor = () => {
    if (window.location.hash === "#register") {
        nextTick(() => {
            const element = document.querySelector("#register");

            if (element) {
                // alert("test");
                element.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        });
    }
};

// Initialer Check, falls die Seite mit einem Hash-Fragment geladen wird
onMounted(() => {
    scrollToAnchor();
});

// Watcher für Routeänderungen
watch(
    () => route.fullPath,
    () => {
        scrollToAnchor();
    }
);
</script>
