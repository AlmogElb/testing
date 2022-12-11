import { test, expect } from '@playwright/test';


test('E2E test_1', async ({ page }) => {
  await page.goto('http://localhost:4200/');
  await page.pause();

  //fill the form with a new user
  await page.getByText('Email').fill('something@gmail.com');
  await page.getByText('Password').fill('654321A');

  await page.getByRole('button', {name: 'Login'}).click();

  //except to get an alert message with the text "User not found"
  page.on('dialog', async(dialog) => {
    expect(dialog.message()).toContain('User not found');
    await dialog.accept();
    });


  //go to the register page
  await page.getByText('Create an account').click();

  //fill the form with new user (sign up)
  await page.getByLabel('Email').fill('almogelb@gmail.com');
  await page.locator('#mat-mdc-form-field-label-6').getByText('Password').fill('123456A');
  await page.getByLabel('Confirm Password').fill('123456A');

  await page.locator('mat-form-field:nth-child(3) > .mat-mdc-form-field-subscript-wrapper').click();
  await page.getByRole('button', {name: 'Register'}).click();

  //go back to the login page
  await page.getByText('Email').fill('almogelb@gmail.com');
  await page.getByText('Password').fill('123456A');

  //getting in to the shop page
  await page.getByRole('button', {name: 'Login'}).click();

  //choose some products to buy by clicking on the 'Add to cart' button
  await page.locator('.card > .btn').first().click();
  await page.locator('div:nth-child(8) > .btn').click();
  await page.locator('div:nth-child(12) > .btn').click();

  //go to the cart page
  await page.getByRole('button', { name: '' }).click();

  //remove the products from the cart
  await page.getByRole('row', { name: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops Your perfect pack for everyday use and walks in the forest.' }).getByRole('button').click();
  await page.getByRole('row', { name: 'Pierced Owl Rose Gold Plated Stainless Steel Double Rose Gold Plated Double Flared Tunnel Plug Earrings.' }).getByRole('button').click();
  await page.getByRole('row', { name: 'WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive' }).getByRole('button')

  //go back to the shop page
  await page.getByRole('button', {name: 'Shop More'}).click();

  //or log out from the shop page
  await page.getByRole('button', {name: 'Log out'}).click();
});



test('E2E test_2', async ({ page }) => {
  await page.goto('http://localhost:4200/');
  await page.pause();

  //fill the form with a new user
  await page.getByText('Email').fill('something@gmail.com');
  await page.getByText('Password').fill('654321A');

  await page.getByRole('button', {name: 'Login'}).click();

  //except to get an alert message with the text "User not found"
  page.on('dialog', async(dialog) => {
    expect(dialog.message()).toContain('User not found');
    await dialog.accept();
  });


  //go to the register page
  await page.getByText('Create an account').click();

  //fill the form with new user (register)
  await page.getByLabel('Email').fill('wrongEmail');

  //except to get an alert message
  expect(page.getByText('*The Email is Not valid.')).toBeTruthy();

  //fill it again with a valid email
  await page.getByLabel('Email').fill('user@gmail.com');

  await page.locator('#mat-mdc-form-field-label-6').getByText('Password').fill('1234');

  //except to get an alert message - the password is not valid
  expect(page.getByText('*The password should have at least 6 letters.*')).toBeTruthy();
  //except to get an alert message - the password is not valid
  expect(page.getByText('*The password must contains a capital letter*')).toBeTruthy();

  //fill it again with a valid password
  await page.locator('#mat-mdc-form-field-label-6').getByText('Password').fill('123456B');
  await page.getByLabel('Confirm Password').fill('123456A');

  //except to get an alert message
  expect(page.getByText('*The passwords do not match.*')).toBeTruthy();
  //fill it again with match password
  await page.getByLabel('Confirm Password').fill('123456B');

  await page.locator('mat-form-field:nth-child(3) > .mat-mdc-form-field-subscript-wrapper').click();
  await page.getByRole('button', {name: 'Register'}).click();

  //go back to the login page and sign in
  await page.getByText('Email').fill('user@gmail.com');
  await page.getByText('Password').fill('123456B');

  //getting in to the shop page
  await page.getByRole('button', {name: 'Login'}).click();

  //choose some products to buy by clicking on the 'Add to cart' button
  await page.locator('.card > .btn').first().click();
  await page.locator('div:nth-child(8) > .btn').click();
  await page.locator('div:nth-child(12) > .btn').click();

  //go to the cart page
  await page.getByRole('button', { name: '' }).click();

  //remove the products from the cart
  await page.getByRole('row', { name: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops Your perfect pack for everyday use and walks in the forest.' }).getByRole('button').click();
  await page.getByRole('row', { name: 'Pierced Owl Rose Gold Plated Stainless Steel Double Rose Gold Plated Double Flared Tunnel Plug Earrings.' }).getByRole('button').click();
  await page.getByRole('row', { name: 'WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive' }).getByRole('button')

  //go back to the shop page
  await page.getByRole('button', {name: 'Shop More'}).click();

  //or log out from the shop page
  await page.getByRole('button', {name: 'Log out'}).click();
});



