import { defineVitePluginsSetup } from '@slidev/types'

export default defineVitePluginsSetup(() => {
  return [
    {
      name: 'force-dark-mode',
      transformIndexHtml: {
        order: 'pre' as const,
        handler(html: string) {
          const script = `<script>if(!localStorage.getItem('slidev-color-schema')){localStorage.setItem('slidev-color-schema','dark');}document.documentElement.classList.add('dark');document.documentElement.style.colorScheme='dark';<\/script>`
          return html.replace('<meta charset="utf-8">', `<meta charset="utf-8">${script}`)
        },
      },
    },
  ]
})
