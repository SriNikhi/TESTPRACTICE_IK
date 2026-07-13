// tests/test1.spec.ts
import { test } from '../MyFixtures/testbase'; // Import your custom test runner base instead!

test('Validate Search Functionality', async ({ loggedInPage }) => {
  // Use loggedInPage exactly like you would use standard 'page'
  console.log("Navigating to specific system components...");
  
  const leadtab = loggedInPage.locator('span').filter({ hasText: 'Leads' }).first();
  await leadtab.click();

  console.log("✔ Leads tab clicked successfully inside test 1.");
});

test('Validate dealstab Submodule', async ({ loggedInPage }) => {
  // This test will automatically spin up its own fresh login session effortlessly!
  const dealstab =  loggedInPage.getByRole('link', { name: 'Deals' });
  await dealstab.click();
  
  console.log("✔ dealstab tab clicked successfully inside test 2.");
});
test('Validate Ticketstab Submodule', async ({ loggedInPage }) => {
  // This test will automatically spin up its own fresh login session effortlessly!
  const Ticketstab =  loggedInPage.getByText('Tickets', { exact: true });
  await Ticketstab.click();
  
  console.log("✔ Ticketstab tab clicked successfully inside test 3.");
});