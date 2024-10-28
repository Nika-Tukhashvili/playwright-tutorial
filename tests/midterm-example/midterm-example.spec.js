const { test, expect } = require('@playwright/test');

test.describe('Automation Practice Tasks', () => {
//cli command: npx playwright test ./tests/midterm-example/midterm-example.spec.js --debug --headed
    // Quiz Question 1
    // test('Select correct answers in Question #1', async ({ page }) => {
    //     await page.goto('C:/Users/User.MSDBC-324WZ0/Documents/testing/cu-playwright/midterm-example.html'); // Adjust this path
    //     // Select answer with specific text
    //     const correctAnswer = page.locator('label:has-text("შტანგენფარგალი")');
    //     await correctAnswer.click();

    //     // Select the second option
    //     const secondOption = page.locator('div.form-check').nth(1).locator('input');
    //     await secondOption.check();

    //     // Select option that contains only digits
    //     const question1Options = await page.locator('input[name="quizQuestion"]').elementHandles();
                
    //     for (const option of question1Options) {
    //         const label = await option.evaluate(el => el.parentElement.textContent);
    //         if (/^\d+$/.test(label.trim())) {  // Checks if label contains only digits
    //           await option.click();
    //           break;
    //         }
    //       }

    // });


    // // Quiz Question 2
    // test('Selectors in Question #2', async ({ page }) => {
    //     await page.goto('C:/Users/User.MSDBC-324WZ0/Documents/testing/cu-playwright/midterm-example.html'); // Adjust this path
    //     // Find MAY using XPath
    //     // Locate the label that contains "May" and navigate to its preceding input to check it
    //     const optionMay = page.locator(`xpath=//label[contains(text(), "May")]/preceding-sibling::input`);
    //     await optionMay.check();


    //     // Find last option using CSS
    //     const lastOption = await page.locator('#quizForm div:has-text("Be or not To Be") .form-check:last-child input');
    //     await lastOption.check();

    //     // Select all options one by one
    //     // Locate only the input elements within the second question container
    //     // Target the div with the specific question text to ensure it’s scoped to Question 2
    //     const options = page.locator('div.form-group:has(label:has-text("Be or not To Be")) .form-check-input');

    //     for (let i = 0; i < await options.count(); i++) {
    //         await options.nth(i).check(); // Check each option in Question 2 only
    //     }


    // });



    // Calendar Selection
    // test('Select 1 January 2025 in Calendar', async ({ page }) => {
    //     await page.goto('C:/Users/User.MSDBC-324WZ0/Documents/testing/cu-playwright/midterm-example.html'); // Adjust this path
    //     await page.click('#calendar'); // Open calendar
    //     await page.fill('#calendar', '01/01/2025'); // Enter date manually
    //     await page.waitForTimeout(4000)
    // });

    // // Sortable Items
    // test('Sortable Items Actions', async ({ page }) => {
    //     await page.goto('C:/Users/User.MSDBC-324WZ0/Documents/testing/cu-playwright/midterm-example.html'); // Adjust this path
    //     // Move Breaking Bad to top using CSS selector
    //     const breakingBad = page.locator('.list-group-item', { hasText: 'Breaking Bad' });
    //     await breakingBad.dragTo(page.locator('.list-group-item').first());

    //     // Move Lord of the Rings to the top using XPath
    //     const lordOfTheRings = page.locator(`xpath=//li[contains(text(), "Lord of the Rings")]`);
    //     await lordOfTheRings.dragTo(page.locator('.list-group-item').first());
        

    //     // Move Marvel to the end using Text selector
    //     const marvel = page.locator('.list-group-item', { hasText: 'Marvel' });
    //     await marvel.dragTo(page.locator('.list-group-item').last());
    // });



    // // Selectable Grid
    // test('Selectable Grid Pattern Actions', async ({ page }) => {
    //     await page.goto('C:/Users/User.MSDBC-324WZ0/Documents/testing/cu-playwright/midterm-example.html'); // Adjust this path

    //     // Click on the first 3 items in the grid
    //     for (let i = 1; i <= 3; i++) {
    //         await page.click(`[data-e2e="${i}"]`);
    //     }

    //     // Click in X pattern
    //     // Locate the grid items
    //     const gridItems = page.locator('.grid-item');

    //     // Calculate the grid size
    //     const totalItems = await gridItems.count();
    //     const gridSize = Math.sqrt(totalItems); // Assuming a square grid

    //     // Ensure grid is square
    //     if (!Number.isInteger(gridSize)) {
    //         throw new Error('Grid is not square!');
    //     }

    //     // Click cells in an "X" pattern
    //     for (let i = 0; i < gridSize; i++) {
    //         // Top-left to bottom-right diagonal
    //         await gridItems.nth(i * gridSize + i).click();

    //         // Top-right to bottom-left diagonal
    //         if(i * gridSize + i != i * gridSize + (gridSize - i - 1)){
    //             await gridItems.nth(i * gridSize + (gridSize - i - 1)).click();
    //         }
            
    //     }


    //     // Click on odd-index items
    //     for (let i = 1; i <= totalItems; i += 2) {
    //         await page.click(`[data-e2e="${i}"]`);
    //     }

    //     // Click on even-index items and verify state change
    //     for (let i = 2; i <= totalItems; i += 2) {
    //         const gridItem = page.locator(`[data-e2e="${i}"]`);
    //         await gridItem.click();
    //         if (!await gridItem.evaluate(el => el.classList.contains('bg-primary'))) {
    //             await gridItem.click(); // Ensure it turns blue if not already
    //         }
    //     }
    // });



    test('All in one test', async ({ page }) => {
        //1
        await page.goto('C:/Users/User.MSDBC-324WZ0/Documents/testing/cu-playwright/midterm-example.html'); // Adjust this path
        // Select answer with specific text
        const correctAnswer = page.locator('label:has-text("შტანგენფარგალი")');
        await correctAnswer.click();

        // Select the second option
        await page
            .locator('#quizForm > .form-group')
            .first()
            .locator('div.form-check')
            .nth(1)
            .locator('input[type="radio"]')
            .click();

        // Select option that contains only digits
        const question1Options = await page.locator('input[name="quizQuestion"]').elementHandles();
        await page.locator("[class='form-check-label']").locator('text=/.*\\d+.*/').click()
        // const question1Options1 = await page.locator('div').label(".form-check-label").textContent({ label: /^\d+$/ })
                
        // for (const option of question1Options) {
        //     const label = await option.evaluate(el => el.parentElement.textContent);
        //     if (/^\d+$/.test(label.trim())) {  // Checks if label contains only digits
        //       await option.click();
        //       break;
        //     }
        //   }



        //2
        // Find MAY using XPath
        // Locate the label that contains "May" and navigate to its preceding input to check it
        const optionMay = page.locator(`xpath=//label[contains(text(), "May")]/preceding-sibling::input`);
        await optionMay.check();


        // Find last option using CSS
        const lastOption = await page.locator('#quizForm div:has-text("Be or not To Be") .form-check:last-child input');
        await lastOption.check();

        // Select all options one by one
        // Locate only the input elements within the second question container
        // Target the div with the specific question text to ensure it’s scoped to Question 2
        const options = page.locator('div.form-group:has(label:has-text("Be or not To Be")) .form-check-input');

        for (let i = 0; i < await options.count(); i++) {
            await options.nth(i).check(); // Check each option in Question 2 only
        }



        //3
        await page.click('#calendar'); // Open calendar
        await page.fill('#calendar', '01/01/2025'); // Enter date manually

        await page.click('body');



        //4
        // Move Breaking Bad to top using CSS selector
        // const breakingBad = page.locator('.list-group-item', { hasText: 'Breaking Bad' });
        const breakingBad = page.locator('text="Breaking Bad"');
        await breakingBad.dragTo(page.locator('.list-group-item').first());

        // Move Lord of the Rings to the top using XPath
        // const lordOfTheRings = page.locator(`xpath=//li[contains(text(), "Lord of the Rings")]`);
        const lordOfTheRings = page.locator(`xpath=//li[text() = "Lord of the Rings"]`);
        await lordOfTheRings.dragTo(page.locator('.list-group-item').first());
        

        // Move Marvel to the end using Text selector
        // Find the list items
        // const listItems = await page.locator('#sortable .list-group-item');

        // // Get the "Marvel" item
        // const marvelItem = await listItems.locator('text=Marvel');

        // Drag "Marvel" to the last position
        // const marvelItem = await page.getByText('Marvel', { exact: true });
        // const lastItem = await page.locator('.list-group-item').last();
        
        // await marvelItem.dragTo(lastItem);

        // const listItems = page.locator('#sortable .list-group-item');
        // const marvelItem = listItems.filter({ hasText: 'Marvel' });
        // let targetIndex = await listItems.count() - 1;

        // while (await listItems.nth(targetIndex).textContent() !== 'Marvel') {
        //     await marvelItem.dragTo(listItems.nth(targetIndex));
        //     targetIndex--; // Move the target up each time
        //     await page.waitForTimeout(300); // Wait for animations to complete if needed
        // }

        const listItems = page.locator('#sortable .list-group-item');
        const marvelItem = await listItems.filter({ hasText: 'Marvel' });
        const lastItem = await listItems.last();//.nth(await listItems.count() - 1);
        const lastBox = await lastItem.boundingBox();
        // await marvelItem.dragTo(lastItem, { targetPosition: { x: 0, y: lastBox.height - 10 } });
        const box = await page.getByText('Selectable Grid').boundingBox()
        await marvelItem.dragTo(page.locator('body'), {targetPosition:{x:lastBox.x, y:lastBox.y+35}});





        //5
        // Click on the first 3 items in the grid
        for (let i = 1; i <= 3; i++) {
            await page.click(`[data-e2e="${i}"]`);
        }

        // Click in X pattern
        // Locate the grid items
        const gridItems = page.locator('.grid-item');

        // Calculate the grid size
        const totalItems = await gridItems.count();
        const gridSize = Math.sqrt(totalItems); // Assuming a square grid

        // Ensure grid is square
        if (!Number.isInteger(gridSize)) {
            throw new Error('Grid is not square!');
        }

        // Click cells in an "X" pattern
        for (let i = 0; i < gridSize; i++) {
            // Top-left to bottom-right diagonal
            await gridItems.nth(i * gridSize + i).click();

            // Top-right to bottom-left diagonal
            if(i * gridSize + i != i * gridSize + (gridSize - i - 1)){
                await gridItems.nth(i * gridSize + (gridSize - i - 1)).click();
            }
            
        }


        // Click on odd-index items
        for (let i = 1; i <= totalItems; i += 2) {
            await page.click(`[data-e2e="${i}"]`);
        }

        // Click on even-index items and verify state change
        for (let i = 2; i <= totalItems; i += 2) {
            const gridItem = page.locator(`[data-e2e="${i}"]`);
            await gridItem.click();
            if (!await gridItem.evaluate(el => el.classList.contains('bg-primary'))) {
                await gridItem.click(); // Ensure it turns blue if not already
            }
        }


    });


});
