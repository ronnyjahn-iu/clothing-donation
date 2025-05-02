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
            <NuxtLink @click.prevent="navigateToRegisterForm" class="btn">Jetzt spenden</NuxtLink>
        </li>
    </ul>
</template>

<script setup>
import { nextTick } from "vue";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();
const props = defineProps({
    classes: {
        type: String,
        default: "",
    },
});

const navigateToRegisterForm = () => {
    router.push({ path: "/" }).then(() => {
        nextTick(() => {
            const element = document.querySelector("#register");
            if (element) {
                const elementPosition = registerForm.getBoundingClientRect().top + window.scrollY;
                const offsetPosition = elementPosition - 100;

                setTimeout(function () {
                    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                }, 100);
            }
        });
    });
};
</script>
