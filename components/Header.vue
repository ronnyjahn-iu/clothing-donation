<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<template>
    <header>
        <div class="container mx-auto py-6 xl:px-48 flex justify-between items-center">
            <NuxtLink to="/">
                <img src="/images/logo-second-love.svg" alt="SecondLove" width="230" />
            </NuxtLink>
            <nav>
                <ul class="flex space-x-8 text-xl">
                    <li><NuxtLink to="/" :class="route.path === '/' ? 'active' : ''">Start</NuxtLink></li>
                    <li><NuxtLink to="/unterstuetzen" :class="route.path === '/unterstuetzen' ? 'active' : ''">Unterstützen</NuxtLink></li>
                    <li><NuxtLink to="/ueber-uns" :class="route.path === '/ueber-uns' ? 'active' : ''">Über uns</NuxtLink></li>
                    <li><NuxtLink to="/kontakt" :class="route.path === '/kontakt' ? 'active' : ''">Kontakt</NuxtLink></li>
                </ul>
            </nav>
        </div>
        <img src="/images/headerpic.jpeg" alt="Kleiderspende" class="h-[370px] w-full object-cover" />
    </header>
</template>
