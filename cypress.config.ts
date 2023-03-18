import { defineConfig } from 'cypress';
import { cloudPlugin } from 'cypress-cloud/plugin';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      return cloudPlugin(on, config);
    },
  },
});
