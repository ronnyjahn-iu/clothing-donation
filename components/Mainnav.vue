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
    </ul>
</template>

<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
const props = defineProps({
    classes: {
        type: String,
        default: "",
    },
});
</script>
