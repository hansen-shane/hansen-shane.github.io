import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Control Sync',
      sidebar: [
        {
          label: 'Overview',
          items: [
            { label: 'Introduction', link: '/overview/introduction/' },
          ]
        },
        {
          label: 'Control Sync',
          items: [
            { label: 'Architecture', link: '/control-sync/architecture/' },
            { label: 'Config', link: '/control-sync/config/' },
            { label: 'PushTopics', link: '/control-sync/topics/' },
            { label: 'Stored Procedures', link: '/control-sync/stored-procedures/' },
            { label: 'Opportunity Lifecycle', link: '/control-sync/opportunity-lifecycle/' },
            { label: 'Troubleshooting', link: '/control-sync/troubleshooting/' },
          ]
        },
        {
          label: 'File Server',
          items: [
            { label: 'Architecture', link: '/file-server/architecture/' },
            { label: 'Config', link: '/file-server/config/' },
            { label: 'Files Controller', link: '/file-server/files-controller/' },
            { label: 'Web View', link: '/file-server/web-view/' },
            { label: 'Troubleshooting', link: '/file-server/troubleshooting/' },
          ]
        },
        {
          label: 'Hansen Stream',
          items: [
            { label: 'Architecture', link: '/hansen-stream/architecture/' },
            { label: 'Config', link: '/hansen-stream/config/' },
            { label: 'Troubleshooting', link: '/hansen-stream/troubleshooting/' },
          ]
        },
      ],
    }),
  ],

  // Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
  image: { service: { entrypoint: 'astro/assets/services/sharp' } },
});
