import {expect, test} from '@playwright/test'

// test.use({
//   viewport: { width: 1600, height: 900 }
// });

test('Sauce Demo automation', async ({ page }) => {
  // 2. Go to the Sauce Demo site
  await page.goto('https://www.saucedemo.com');
  
  // 3. Display the title and URL in the console
  console.log('Title: ' + await page.title());
  console.log('URL: ' + page.url());
  
  // 4. Fill the username field with 'standard_user' (using CSS locator)
  await page.fill('#user-name', 'standard_user');

  // 5. Fill the password field with 'secret_sauce' (using CSS locator)
  await page.fill('#password', 'secret_sauce');

  // 6. Click the login button (using CSS locator)
  await page.click('#login-button');
  
  // 7. Sort the page by increasing price (XPath for finding sorting dropdown)
  await page.selectOption('//select[@class="product_sort_container"]', 'lohi');

  // 8. Select the last product from the list of products (XPath to get last product)
  const lastProduct = await page.locator('//div[@class="inventory_item"]').last();

  // Click the "Add to cart" button inside the last product element
  await lastProduct.locator('button').click();  // Finds and clicks the "Add to cart" button

  console.log('Added Last Product to Cart: ' + await lastProduct.textContent());


  // 9. Add products with 'T-shirt' in the name (XPath for finding text)
  const productsWithTshirt = await page.locator('//div[@class="inventory_item" and .//div[contains(text(), \'T-Shirt\')]]');
  const tshirtCount = await productsWithTshirt.count();
  console.log(tshirtCount)
  for (let i = 0; i < tshirtCount; i++) {
    await productsWithTshirt.nth(i).locator('button').click();
  }

  // 10. Display the number of items in the cart (from cart counter element)
  const cartItemCount = await page.locator('.shopping_cart_badge').textContent();
  console.log('Number of items in cart: ' + cartItemCount);

  // 11. Click the cart icon to go to the checkout page
  await page.click('.shopping_cart_link');
  
  // 12. Click Checkout
  await page.click('#checkout');
  
  // 13. Fill the first name field
  await page.fill('#first-name', 'John');
  
  // 14. Fill the last name field
  await page.fill('#last-name', 'Doe');
  
  // 15. Enter zip code
  await page.fill('#postal-code', '123');

  // additional step:
  await page.click('#continue')
  
  // 16. Click Finish to display successful order text
  await page.click('#finish');
  
  // Check for the order success message
  const successMessage = await page.locator('.complete-header').textContent();
  console.log('Order Success Message: ' + successMessage);
});
