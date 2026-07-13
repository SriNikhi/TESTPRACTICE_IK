import { test as base, Page } from '@playwright/test';
 import dotenv from 'dotenv';
    import path from 'path';
import { LoginPage } from '../pages/logiPage';
    dotenv.config({ path: path.resolve(__dirname, '../.env') });
    

type MyFixtures = {
  loggedInPage: Page;
};

export const test = base.extend<MyFixtures>({
  loggedInPage: async ({ page }, use) => {
    console.log('⚡ Fixture active: Utilizing the pre-authenticated session state...');

    // Navigate to salesforce base URL
    await page.goto(process.env.BASE_URL || 'https://test.salesforce.com/'); 
   
     // Pull credentials from .env
      const username = process.env.QA_USERNAME!;
      const password = process.env.QA_PASSWORD!;
    
      if (!username || !password) {
        throw new Error('Setup Error: QAADMIN credentials missing from your .env file.');
      }
    
      console.log('🚀 Global Setup: Executing initial login bypass...');
      const loginPage = new LoginPage(page);
      
      await loginPage.navigate();
      await loginPage.login(username, password);
    
      // PAUSE: Type your OTP code into the browser manually here ONCE
      console.log('\n⏸️ SETUP PAUSED: Please enter your Salesforce verification OTP and click verify.');
      //await page.pause();
    
       //await page.waitForLoadState('networkidle');
      // Await landing dashboard resolution
      await page.waitForURL(/.*lightning.force.com.*/, { timeout: 0 });

    
      // Save the authenticated context state globally
      await page.context().storageState({ path: 'state.json' });
      console.log('✔ Global session storage successfully exported to state.json');
    
    // Instead of waiting for a strict URL string, wait until the network/DOM loads completely
    // Instead of waiting for a strict URL string, wait until network connections quiet down
   

    // Pass the authenticated page directly to your test blocks
    await use(page);
  },
});

export { expect } from '@playwright/test';