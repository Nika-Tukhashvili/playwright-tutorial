//initial spec.js
const { test, expect } = require('@playwright/test');

test.describe('Automation Practice Tasks', () => {
    // 1
    test('Task #1', async ({ page }) => {
        // 1
        await page.goto('C:/Users/PC/Desktop/midterm-testing/playwright-tutorial/form-midterm-v1.html'); 

        // 2
        const title = await page.title()
        await console.log(title)

        // 3
        const url = await page.url()
        await console.log(url)
        

        // 4
        await page.locator('xpath=//input[@id="name"]').fill('Ilia');
    
        // 5
        await page.locator('#surname').fill('Topuria');
    
        // 6
        await page.getByPlaceholder('Current Address').fill('Tamarashvili 13a');
    
        // 7
        await page.getByPlaceholder('Actual Address').fill('saakadze 1');
    
        // 8
        await page.locator('(//input[@name="option"])[2]').check();
    
        // 9
        await page.locator('#dog-breeds-selector .list-group-item:last-child').click();
    
        // 10
        const dogBreeds = await page.locator('#dog-breeds-selector .list-group-item');
        for (let i = 0; i < await dogBreeds.count(); i++) {
            await dogBreeds.nth(i).click();
        }
    
        // 11
        const sliderHandle = page.locator('#slider div').nth(2);
        await sliderHandle.evaluate(handle => {
            handle.style.left = '100%';
        });
        // await page.waitForSelector('.slider-value:text("100")'); 
        // await sliderHandle.click()


    
        // 12
        await page.locator('#submitButton').click();
    

    });




    test('Task #2', async ({ page }) => {
        //1
        await page.goto('C:/Users/PC/Desktop/midterm-testing/playwright-tutorial/e-commerce-midterm.html'); 

        // 2
        const increaseButtonA = await page.locator('.product[data-name="Product A"] .increase-quantity');
        for (let i = 0; i < 4; i++) {  // Initial quantity is 1, so click 4 times to reach 5
            await increaseButtonA.click();
        }

        // 3
        await page.locator('.product[data-name="Product A"] .addToCart').click();

        // 4
        const increaseButtonB = await page.locator('.product[data-name="Product B"] .increase-quantity');
        for (let i = 0; i < 4; i++) {  
            await increaseButtonB.click();
        }

        // 6
        await page.locator('.product[data-name="Product B"] .addToCart').click();

        // 7
        const totalPriceText = await page.locator('#totalPrice').textContent();
        const totalPrice = parseInt(totalPriceText);
        if (totalPrice === 50) {
            console.log("Correct Price");
        } else {
            console.log("Incorrect Price");
        }

        
        // 8 & 9
        page.on('dialog', async dialog => {
            // expect(dialog.type()).toBe('confirm');
            // expect(dialog.message()).toBe('Are you sure you want to make this purchase?')
            if (dialog.message()=='Are you sure you want to make this purchase?'){
                await dialog.accept();
            } else if(dialog.message()=='Purchase successful!'){
                await console.log(dialog.message())
                await dialog.accept();
            }
          });
          
          // 6
          await page.click('#purchaseButton');

        //   page.on('dialog', async dialog => {
        //     expect(dialog.type()).toBe('alert');
        //     expect(dialog.message()).toBe('Purchase successful!');
        //     console.log(dialog.message());
        //     await dialog.accept();
        //   });
          

        //   const timerAlertPromise = page.waitForEvent('dialog');
        //     await page.click('#purchaseButton');
        //     const timerDialog = await timerAlertPromise;

        // 10
        await page.close();
        


    });



});
