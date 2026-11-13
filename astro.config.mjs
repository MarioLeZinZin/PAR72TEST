import { defineConfig } from 'astro/config';

// Quand le nouveau nom de domaine sera choisi, le renseigner ici :
// site: 'https://www.exemple.fr',
export default defineConfig({
  devToolbar: { enabled: false },
  server: { port: 4321 },
});
