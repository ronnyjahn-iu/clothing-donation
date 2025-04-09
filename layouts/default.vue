<template>
    <div>
        <Header />
        <main class="container mx-auto px-4 xl:px-48 py-8">
            <NuxtPage />
        </main>
        <Footer />
    </div>
</template>

<script setup>
useHead({
    title: "SecondLove - Deine Hilfe zählt",
    link: [
        {
            rel: "icon",
            type: "image/png",
            sizes: "96x96",
            href: "images/favicon-96x96.png",
        },
        {
            rel: "icon",
            type: "image/svg+xml",
            href: "images/favicon.svg",
        },
        {
            rel: "shortcut icon",
            href: "images/favicon.ico",
        },
        {
            rel: "apple-touch-icon",
            sizes: "180x180",
            href: "images/apple-touch-icon.png",
        },
        {
            rel: "manifest",
            href: "images/site.webmanifest",
        },
    ],
    meta: [
        {
            name: "apple-mobile-web-app-title",
            content: "SecondLove",
        },
    ],
});
</script>
