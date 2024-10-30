/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                mulish: ['Mulish', 'sans-serif'],
            },
            backgroundImage: {
                background2: 'url(./assets/background2.jpg)',
            },
        },
    },
    plugins: [],
};
