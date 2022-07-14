import { defineConfig } from 'vitepress'

export default defineConfig({
    title: 'Steve Brown\s blog',
    description: 'Articles and photos about C# and extreme sports',
    head: [
        ['meta', { name: 'twitter:site', content: '@evolvedlight' }],
        ['meta', { name: 'twitter:card', content: 'summary' }],
        // [
        //     'meta',
        //     {
        //         name: 'twitter:image',
        //         content: 'https://vuejs.org/images/logo.png'
        //     }
        // ],
        // [
        //     'link',
        //     {
        //         rel: 'icon',
        //         type: 'image/x-icon',
        //         href: '/favicon.ico'
        //     }
        // ],
    ],
    vite: {
        build: {
            minify: 'terser'
        }
    }
})