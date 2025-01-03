/** @type {import('tailwindcss').Config} */
export default {
    content: ["./components/**/*.{vue,js}", "./layouts/**/*.vue", "./pages/**/*.vue", "./node_modules/flowbite/**/*.js"],
    theme: {
        extend: {},
    },
    plugins: [require("@tailwindcss/forms"), require("flowbite/plugin")],
};
