<template>
<header>
    <div class="container mx-auto py-6 xl:px-48 flex justify-between items-center">
        <NuxtLink to="/">
            <img src="/images/logo-second-love.svg" alt="SecondLove" width="230" />
        </NuxtLink>
        <nav class="hidden md:block">
            <ul class="flex space-x-8 text-xl">
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
        </nav>
        <nav id="offcanvas">
            <ul>
                <li><a href="/">Startseite</a></li>
                <li><a href="#">Über uns</a></li>
                <li><a href="#">Kleiderspenden</a></li>
                <li><a href="#">Kontakt</a></li>
            </ul>
        </nav>
        <button id="menuToggle" class="block md:hidden">
            <span class="menu-icon">☰</span>
        </button>
    </div>
    <img src="/images/headerpic.jpeg" alt="Kleiderspende" class="h-[200px] lg:h-[370px] w-full object-cover" />
</header>
</template>

<script setup>
import {
    onMounted
} from 'vue';

import {
    useRoute
} from 'vue-router'
const route = useRoute()

onMounted(() => {
    if (process.client) {
        import('mmenu-light').then((mmenuLight) => {
            const Mmenu = mmenuLight.default || mmenuLight
            const menuElement = document.querySelector('#offcanvas')

            if (menuElement) {
                const menu = new MmenuLight(document.querySelector("#offcanvas"));
                const navigator = menu.navigation({
                    title: "Menü",
                });
                const drawer = menu.offcanvas({
                    position: "right",
                });
                document
                    .querySelector("#menuToggle")
                    .addEventListener("click", function (event) {
                        event.preventDefault();
                        drawer.open();
                    });
                const mobilenavLinks = document.querySelectorAll("#offcanvas a");
                mobilenavLinks.forEach(function (item) {
                    if (item.getAttribute("href") !== "#") {
                        item.addEventListener("click", function () {
                            drawer.close();
                        });
                    }
                });
            }
        });
    }
})
</script>