import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://automationplayground.com/crm/');
  await page.getByRole('link', { name: 'Sign In' }).click();
  await page.getByRole('textbox', { name: 'Enter email' }).click();
  await page.getByRole('textbox', { name: 'Enter email' }).fill('test@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('test123');
  await page.getByRole('checkbox', { name: 'Remember me' }).check();
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('link', { name: 'New Customer' }).click();
  await page.getByRole('textbox', { name: 'Enter email' }).click();
  await page.getByRole('textbox', { name: 'Enter email' }).fill('test11@gmail.com');
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill('kim');
  await page.getByRole('textbox', { name: 'Last Name' }).click();
  await page.getByRole('textbox', { name: 'Last Name' }).fill('joy');
  await page.getByRole('textbox', { name: 'City' }).click();
  await page.getByRole('textbox', { name: 'City' }).fill('us');
  await page.getByLabel('State').selectOption('IN');
  await page.getByText('Gender: Male Female').click();
  await page.getByRole('checkbox').check();
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('link', { name: 'Sign Out' }).click();
});