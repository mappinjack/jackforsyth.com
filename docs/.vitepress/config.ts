import { defineConfig } from 'vitepress';

export default defineConfig({
  lang: 'en-US',
  title: 'Jack Forsyth',
  description: 'Spatial Data Engineer',

  themeConfig: {
    // nav: [
    // { text: 'About', link: '/about' },
    // { text: 'Projects', link: '/projects' },
    // { text: 'Blog', link: '/blog' },
    // { text: 'Contact', link: '/contact' }
    // ],

    // sidebar: [
    //   {
    //     items: [
    //       { text: 'About Me', link: '/about' },
    //       { text: 'Projects', link: '/projects' },
    //       { text: 'Blog', link: '/blog' },
    //       { text: 'Contact', link: '/contact' }
    //     ]
    //   }
    // ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/mappinjack' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/jackforsyth/' }
    ]
  }
  
});
