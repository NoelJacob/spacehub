import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, loadEnv } from 'vite';

export default ({ mode }: { mode: string }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd(), '') };

  return defineConfig({
    plugins: [sveltekit()],
    define: {
      __BUILD_TIMESTAMP__: JSON.stringify(new Date().toISOString()),
      __SITE_URL__: JSON.stringify(process.env.VITE_SITE_URL ?? 'https://example.com'),
    },
  });
};
