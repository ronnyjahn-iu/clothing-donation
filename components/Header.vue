<template>
    <header>
        <div class="container mx-auto py-6 xl:px-48 flex justify-between items-center">
            <NuxtLink to="/">
                <img src="/images/logo-second-love.svg" alt="SecondLove" width="230" />
            </NuxtLink>
            <nav>
                <ul class="flex space-x-8 text-xl">
                    <li><NuxtLink to="/">Start</NuxtLink></li>
                    <li><NuxtLink to="/unterstuetzen">Unterstützen</NuxtLink></li>
                    <li><NuxtLink to="/ueber-uns">Über uns</NuxtLink></li>
                    <li><NuxtLink to="/kontakt">Kontakt</NuxtLink></li>
                </ul>
            </nav>
        </div>
        <img src="/images/headerpic.jpeg" alt="Kleiderspende" class="h-100 w-full object-cover" />
    </header>
</template>
