import {expect, test} from '@playwright/test'


test.describe('Quiz 2', () => {

    test('Fill out form and submit', async ({ page }) => {
        await page.goto('file:///C:/Users/User.MSDBC-324WZ0/Downloads/quiz2index.html');

        await page.locator('//input[@id="email"]').fill('n_tukhashv4@cu.edu.ge');

        await page.locator('#password').fill('password123');

        await page.locator('//*[@id="gender"]').click();
        // const genderOptions = await page.locator('#gender option');
        // await genderOptions.last().click();

        await page.locator('#gender').selectOption('Male');

        await page.locator('//*[@id="customForm"]/div[1]/a[2]').click();


        const lastOption = await page.locator('div[for="question"] .list-group-item').last();
        await lastOption.click();



        const allItems = await page.locator('div[for="question3"] .list-group-item');

        const itemCount = await allItems.count();
        for (let i = 0; i < itemCount; i++) {
            await allItems.nth(i).click();
        }

        await page.locator('div[for="question2"] .list-group-item', { hasText: 'ხო სხვა ვერ მოვიფიქრე' }).click();

        
        const dragBox = await page.locator('#dragBox');
        const dropBox = await page.locator('#dropBox');
        await dragBox.dragTo(dropBox);
        // await page.dragAndDrop('#dragBox', '#dropBox');


        // await page.waitForTimeout(5000)


        await page.locator('#terms').check();

        await page.locator('button[type="submit"]').click();
    });

});


