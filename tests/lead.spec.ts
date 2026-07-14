import { test } from '../MyFixtures/testbase'; // Import your custom test runner base instead!

test('Validate Search Functionality', async ({ loggedInPage }) => {
  // Use loggedInPage exactly like you would use standard 'page'
  console.log("Navigating to specific system components...");
  
  const leadtab = loggedInPage.locator('span').filter({ hasText: 'Leads' }).first();
  await leadtab.click();

  console.log("✔ Leads tab clicked successfully inside test 1.");
});