/**@type {import('tailwindcss').config};*/

export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Rubik', 'sans-serif'],
                mono: ['Consolas', 'monospace'],
            }
        }
    },
    plugins: [require('daisyui')],
    daisyui: {
        themes: ['luxury']
    }
};