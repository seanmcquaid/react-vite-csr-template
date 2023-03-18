// cypress.config.ts
import { defineConfig } from 'cypress';
// https://github.com/bahmutov/cypress-split
import cypressSplit from 'cypress-split';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      cypressSplit(on, config);
      // IMPORTANT: return the config object
      return config;
    },
  },
});
