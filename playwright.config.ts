import { defineConfig } from '@playwright/test';
import 'dotenv/config';

export default defineConfig({
  projects: [
    // 1. Define the setup phase
    {
      name: 'setup',
      testMatch: /.*\.setup\.ts/,
    },
    // 2. Main testing phase that depends on your setup project
    {
      name: 'chromium',
      use: {
        browserName: 'chromium',
        // Hardcode the file path here—Playwright safely reads it right when this specific project kicks off!
        storageState: 'state.json', 
      },
      dependencies: ['setup'], 
    },
  ],
});