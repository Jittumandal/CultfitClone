/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
    theme: {
        extend: {
            keyframes: {
                move: {
                    '0%': { transform: 'translateX(0px)' },
                    '100%': { transform: 'translateX(300px)' },
                },
            },
            animation: {
                move: 'move 2s infinite',
            },
        },


    },

    plugins: [],
}

