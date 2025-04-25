<template>
    <header>
        <div class="container mx-auto py-6 xl:px-48 flex justify-between items-center">
            <NuxtLink to="/">
                <img class="w-[160px] lg:w-[230px]" src="/images/logo-second-love.svg" alt="SecondLove" />
            </NuxtLink>
            <nav class="hidden md:block">
                <Mainnav classes="flex space-x-8 lg:text-xl" />
            </nav>
            <nav id="offcanvas">
                <Mainnav />
            </nav>
            <button id="offcanvasToggle" class="block md:hidden">
                <span class="menu-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </span>
            </button>
        </div>
        <Headerpic />
    </header>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
    if (process.client) {
        import("mmenu-light").then((mmenuLight) => {
            const Mmenu = mmenuLight.default || mmenuLight;
            const offcanvas = document.querySelector("#offcanvas");

            if (offcanvas) {
                const menu = new MmenuLight(document.querySelector("#offcanvas"));
                const navigator = menu.navigation({
                    title: "Menü",
                });
                const drawer = menu.offcanvas({
                    position: "right",
                });
                document.querySelector("#offcanvasToggle").addEventListener("click", function (event) {
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
});
</script>
