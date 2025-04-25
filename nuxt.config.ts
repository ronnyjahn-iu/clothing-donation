// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    router: {
        scrollBehavior(to, from, savedPosition) {
            // Wenn der Benutzer zu einer Route mit einem Hash-Fragment navigiert
            if (to.hash) {
                // Sicherstellen, dass das Element existiert und gescrollt werden kann
                return new Promise((resolve) => {
                    setTimeout(() => {
                        const element = document.querySelector(to.hash);
                        if (element) {
                            element.scrollIntoView({ behavior: "smooth" });
                            resolve({ top: element.offsetTop, left: 0 });
                        } else {
                            resolve({ top: 0, left: 0 });
                        }
                    }, 100); // kleine Verzögerung, um sicherzustellen, dass das DOM gerendert ist
                });
            }
            // Standard Scroll-Verhalten: Zurück nach oben, falls kein Hash
            return { x: 0, y: 0 };
        },
    },
    compatibilityDate: "2024-11-01",
    devtools: { enabled: true },
    css: ["~/assets/css/style.css", "mmenu-light/dist/mmenu-light.css"],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
});
