/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'oliva-oscuro': '#3B4744',
                'oliva-claro': '#747d5c',
                'crema': '#F5F5DC', // Para textos sobre el fondo verde
                'acento-ocre': '#ce8943',
            },
            fontFamily: {
                serif: ['"TC Milo Serif"', 'serif'],
                sans: ['"TC Milo Sans"', 'sans-serif'],
            }
        },
    },
    plugins: [],
}