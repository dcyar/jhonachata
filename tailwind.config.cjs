/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            typography: () => ({
                DEFAULT: {
                  css: {
                    "a": {
                      "font-weight": "600",
                      "text-decoration": "underline",
                      "color": "#4f46e5",
                    },
                    "p": {
                      "color": "#1e293b",
                    },
                    "h1, h2, h3, h4, h5": {
                      "color": "#1e293b",
                      "margin": "1.2rem 0",
                    },
                    "iframe": {
                      "border-radius": "0.5rem",
                    },
                    "code": {
                      "background-color": "rgb(var(--color-code-bg))",
                      "color": "rgb(var(--color-code-text))",
                      "padding": "0.25rem 0.5rem",
                      "border-radius": "0.25rem",
                      "font-size": "0.875rem",
                      "line-height": "1.5",
                      "font-family": "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
                    },
                    "ol > li::before": {
                      "color": "rgb(var(--color-text-bold))",
                    },
                    "li": {
                      "margin-bottom": "0.5rem",
                      "color": "rgb(var(--color-code-text))",
                      "font-size": "1rem",
                      "line-height": "1.5",
                      "font-family": "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
                    },
                    "code::before": {
                      "content": "none",
                    },
                    "code::after": {
                      "content": "none",
                    },
                    "blockquote": {
                      "border": "none",
                      "position": "relative",
                      "width": "96%",
                      "margin": "0 auto",
                      "font-size": "1.0625em",
                      "padding-top": "1.5rem",
                      "padding-bottom": "0.5rem",
                      "padding-left": "1.5rem",
                      "padding-right": "1.5rem",
                    },
                    "blockquote::before": {
                      "font-family": "Arial",
                      "content": "'“'",
                      "font-size": "4em",
                      "color": "rgb(var(--color-text-bold))",
                      "position": "absolute",
                      "left": "-10px",
                      "top": "-10px",
                    },
                    "blockquote::after": {
                      "content": "",
                    },
                    "blockquote p:first-of-type::before": {
                      "content": "",
                    },
                    "blockquote p:last-of-type::after": {
                      "content": "",
                    },
                    "hr": {
                      "margin": "1.5rem 0",
                    },
                    "img": {
                      "box-shadow": "0 2px 4px rgba(3,3,3,0.2)"
                    },
                  },
                },
              }),
        },
        fontFamily: {
            'body': ['Karla', 'system-ui', 'sans-serif'],
            'mono': ['Berkeley Mono', 'monospace'],
          }
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('tailwind-scrollbar-hide'),
    ],
};
