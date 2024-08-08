/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                lato: ['Lato', 'sans - serif'],
                arizonia: ['Arizonia', 'cursive'],
            },
            backgroundImage: {
                background: 'url(./assets/background.jpg)',
                background1: 'url(./assets/background1.jpg)',
                background2: 'url(./assets/background2.jpg)',
                background3: 'url(./assets/background3.jpg)',
            },
        },
    },
    plugins: [],
};
