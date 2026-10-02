import { test, expect } from '@playwright/test';

test('Verify Admin can add job title', async ({ page }) => {
  console.log('Step 1: Navigate to the OrangeHRM login page');
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  console.log('Step 2: Click the Username field');
  await page.getByRole('textbox', { name: 'Username' }).click();
  console.log('Step 3: Enter the username');
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');

  console.log('Step 4: Click the Password field');
  await page.getByRole('textbox', { name: 'Password' }).click();
  console.log('Step 5: Enter the password');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');

  console.log('Step 6: Click Login');
  await page.getByRole('button', { name: 'Login' }).click();

  console.log('Step 7: Verify the dashboard is visible');
  await expect(page.getByText('Time at Work')).toBeVisible();
  console.log('Step 8: Open the Admin section');
  await page.getByRole('link', { name: 'Admin' }).click();
  console.log('Step 9: Open the Job menu');
  await page.getByText('Job').click();
  console.log('Step 10: Open Job Titles');
  await page.getByRole('menuitem', { name: 'Job Titles' }).click();
  console.log('Step 11: Click Add');
  await page.getByRole('button', { name: ' Add' }).click();
  console.log('Step 12: Click the job title field');
  await page.getByRole('textbox').nth(1).click();
  console.log('Step 13: Enter the job title');
  await page.getByRole('textbox').nth(1).fill('SDET12345');
  console.log('Step 14: Click the description field');
  await page.getByRole('textbox', { name: 'Type description here' }).click();
  console.log('Step 15: Enter the job description');
  await page.getByRole('textbox', { name: 'Type description here' }).fill('Automation testing');
  console.log('Step 16: Click the notes field');
  await page.getByRole('textbox', { name: 'Add note' }).click();
  console.log('Step 17: Enter the notes');
  await page.getByRole('textbox', { name: 'Add note' }).fill('Automation notes');
  console.log('Step 18: Save the new job title');
  await page.getByRole('button', { name: 'Save' }).click();
  console.log('Step 19: Verify the Job Titles page is visible');
  await expect(page.getByRole('heading', { name: 'Job Titles' })).toBeVisible();
});