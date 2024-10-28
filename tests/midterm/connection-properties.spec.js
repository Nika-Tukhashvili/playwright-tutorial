//connection properties


write this again:
// Move the slider to the right until the value is 100

given code doesn't pass the test:
        const sliderHandle = page.locator('#slider div').nth(2);
        await sliderHandle.evaluate(handle => {
            handle.style.left = '100%';
        });
        await page.waitForSelector('.slider-value:text("100")'); // Wait for the slider to show value 100





const { chromium } = require('playwright');

(async () => {
  // Step 1: Open browser and navigate to the e-commerce page
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('file://path-to-your/e-commerce-midterm.html'); // Update with the actual file path

  // Step 2: Increase the quantity of Product A to 5
  const increaseButton = await page.locator('.product[data-name="Product A"] .increase-quantity');
  for (let i = 0; i < 4; i++) {  // Initial quantity is 1, so click 4 times to reach 5
    await increaseButton.click();
  }

  // Step 3: Add Product A to the cart
  await page.locator('.product[data-name="Product A"] .addToCart').click();

  // Step 4 & 5: Repeat steps to ensure quantity is 5 and add Product A to the cart again
  for (let i = 0; i < 4; i++) {  
    await increaseButton.click();
  }
  await page.locator('.product[data-name="Product A"] .addToCart').click();

  // Step 6: Press the Purchase button
  await page.locator('#purchaseButton').click();

  // Step 7: Verify the Total Price
  const totalPriceText = await page.locator('#totalPrice').textContent();
  const totalPrice = parseInt(totalPriceText);
  if (totalPrice === 50) {
    console.log("Correct Price");
  } else {
    console.log("Incorrect Price");
  }

  // Step 8 & 9: Handle the alert
  page.on('dialog', async dialog => {
    console.log(dialog.message());  // Print the success message to the console
    await dialog.accept();
  });

  // Step 10: Close the browser window
  await browser.close();
})();


///////////////////////
Task-2
1. go to the e-commerce-midterm page
2. increase the quantity of product A to 5
3. add product A to the cart by clicking the add to cart button 
4. increase the quantity of product A to 5
5. add product A to the cart by clicking the add to cart button 
6. then press the purchase button
7. check that the Total Price is equal to 50 and print the corresponding message "Correct Price" or "Incorrect Price" in the console
8. after the alert appears, accept the prompts of the alert
9. display the success message of the alert in console
10. close the browser window


here is e-commerce-midterm.html file:

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Midterm E-Commerce</title>
    <!-- Bootstrap CSS -->
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>

<div class="container mt-5">
    <h2>Mid Term E-Commerce</h2>
    <div class="mb-3">
        
    <div class="row" id="products">
        <!-- Sample products -->
        <div class="col-md-3 product" data-price="10" data-name="Product A">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Product A</h5>
                    <p class="card-text">$10</p>
                    <div class="quantity-control">
                        <button class="btn btn-light decrease-quantity" id="add">-</button>
                        <span class="quantity-indicator">1</span>
                        <button class="btn btn-light increase-quantity" id="Subtract">+</button>
                    </div>
                    <button class="btn btn-primary addToCart mt-2">Add to Cart</button>
                </div>
            </div>
        </div>
        
        <div class="col-md-3 product" data-price="100" data-name="Product B">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Product B</h5>
                    <p class="card-text">$100</p>
                    <div class="quantity-control">
                        <button class="btn btn-light decrease-quantity" id="add">-</button>
                        <span class="quantity-indicator">1</span>
                        <button class="btn btn-light increase-quantity" id="Subtract">+</button>
                    </div>
                    <button class="btn btn-primary addToCart mt-2">Add to Cart</button>
                </div>
            </div>
        </div>

        <div class="col-md-3 product" data-price="99" data-name="Product Z">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Product Z</h5>
                    <p class="card-text">$99</p>
                    <div class="quantity-control">
                        <button class="btn btn-light decrease-quantity" id="add">-</button>
                        <span class="quantity-indicator">1</span>
                        <button class="btn btn-light increase-quantity" id="Subtract">+</button>
                    </div>
                    <button class="btn btn-primary addToCart mt-2">Add to Cart</button>
                </div>
            </div>
        </div>

        <div class="col-md-3 product" data-price="100" data-name="Product J">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Product J</h5>
                    <p class="card-text">$99</p>
                    <div class="quantity-control">
                        <button class="btn btn-light decrease-quantity" id="add">-</button>
                        <span class="quantity-indicator">1</span>
                        <button class="btn btn-light increase-quantity" id="Subtract">+</button>
                    </div>
                    <button class="btn btn-primary addToCart mt-2">Add to Cart</button>
                </div>
            </div>
        </div>

        
       
        <!-- ... Add more products similarly ... -->
    </div>
    <div class="mt-5">
        <h4>Cart</h4>
        <ul id="cartItems"></ul>
        <p>Total: $<span id="totalPrice">0</span></p>
    </div>

    <div class="mt-3">
        <button class="btn btn-success" id="purchaseButton">Purchase</button>
    </div>
</div>

<!-- jQuery library -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<!-- Bootstrap JS -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

<script>

    $(document).ready(function() {
        let cart = [];
        let total = 0;

        // Add to Cart functionality
        $(".addToCart").click(function() {
            let product = $(this).closest(".product");
            let price = parseInt(product.data("price"));
            let name = product.data("name");
            let quantity = parseInt(product.find(".quantity-indicator").text());

            

            // Multiply the price by the quantity
            let totalPriceForProduct = price * quantity;

            cart.push({ name, price: totalPriceForProduct, quantity });
            total += totalPriceForProduct;

            updateCart();
        });

        // Update cart display
        function updateCart() {
            

            $("#cartItems").empty();

            $("#totalPrice").text(total);

            cart.forEach(item => {
                $("#cartItems").append(`
                    <li class="cart-item">
                        ${item.name} x${item.quantity} - $${item.price}
                        <button class="btn btn-sm btn-danger removeItem" data-name="${item.name}">Remove</button>
                    </li>
                `);
            });
        }


        $(".increase-quantity").click(function() {
            let quantityIndicator = $(this).siblings(".quantity-indicator");
            let currentQuantity = parseInt(quantityIndicator.text());
            quantityIndicator.text(currentQuantity + 1);
        });

        $(".decrease-quantity").click(function() {
            let quantityIndicator = $(this).siblings(".quantity-indicator");
            let currentQuantity = parseInt(quantityIndicator.text());
            if (currentQuantity > 1) {
                quantityIndicator.text(currentQuantity - 1);
            }
        });

        // Purchase Confirmation
        $("#purchaseButton").click(function() {
            let confirmation = confirm("Are you sure you want to make this purchase?");
            if (confirmation) {
                alert("Purchase successful!");
                // Here, you can add any additional logic to handle the successful purchase.
            } else {
                alert("Purchase canceled.");
            }
        });


        $(document).on("click", ".removeItem", function() {
        let itemName = $(this).data("name");
        let itemIndex = cart.findIndex(item => item.name === itemName);

        if (itemIndex !== -1) {
            total -= cart[itemIndex].price; // Subtract the item's price from the total
            cart.splice(itemIndex, 1); // Remove the item from the cart array
            updateCart(); // Update the cart display
        }
    });


    });
</script>
<style>
    .quantity-control {
    display: flex;
    align-items: center;
}

.cart-item {
    margin: 10px;
}

.quantity-indicator {
    margin: 0 10px;
    font-weight: bold;
}
</style>

</body>
</html>



end of e-commerce-midterm.html file

































const { chromium } = require('playwright');

(async () => {
    // Launch the browser
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();

    // Open midtermV1.html file in the browser
    await page.goto('file:///path/to/midtermV1.html'); // Replace with the actual path to midtermV1.html

    // Print title in the console
    const title = await page.title();
    console.log("Page Title:", title);

    // Print URL in the console
    const url = page.url();
    console.log("Page URL:", url);

    // Fill in the name field using XPath locator
    await page.locator('xpath=//input[@id="name"]').fill('John');

    // Fill in the last name field using CSS locator
    await page.locator('#surname').fill('Doe');

    // Fill in the current address field using any locator (CSS selector)
    await page.locator('[data-tag="address"]').fill('1234 Elm Street');

    // Fill in the actual address field using text-based locator
    await page.getByPlaceholder('Actual Address').fill('5678 Oak Street');

    // Choose the second radio button using XPath locator by index
    await page.locator('(//input[@name="option"])[2]').check();

    // Select the dog breed element using a selector that always picks the last item in the list
    await page.locator('#dog-breeds-selector .list-group-item:last-child').click();

    // Click on all elements in the dog breed list using CSS locator
    const dogBreeds = await page.locator('#dog-breeds-selector .list-group-item');
    for (let i = 0; i < await dogBreeds.count(); i++) {
        await dogBreeds.nth(i).click();
    }

    // Move the slider to the right until the value is 100
    const sliderHandle = page.locator('.slider-handle');
    await sliderHandle.evaluate(handle => {
        handle.style.left = '100%';
    });
    await page.waitForSelector('.slider-value:text("100")'); // Wait for the slider to show value 100

    // Click the submit button
    await page.locator('#submitButton').click();

    // Close the browser
    await browser.close();
})();

////////////////
1. open midtermV1.html file in browser 
2. print title in the console
3. print url in the console

4. fill in name field (using xpath locator)
5. fill in lastname field (using css locator)
6. fill in current address field (using any locator)
7. Actual address - use text based locator
8. choose second radio GamepadButton(use xpath locator to find element by index)
9. select dog breed element, use such selector that it will always select last element of the list 
10. in the dog breed list, click on all elements - using xpath or css locator that will search all selectable elements 
11. move the slider as far as possible to the right - until the value becomes 100 
12 click submit button 


here is midtermV1.html file:

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Midterm V1</title>
    <!-- Bootstrap CSS -->
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
    <!-- jQuery UI CSS -->
    <link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
</head>
<body>

<div class="container mt-5 mb-5">
    <h2 id="title">Midterm V1</h2>
    <form id="midterm-v1">
        <!-- Text Inputs -->
        <input type="text" class="form-control mb-2" id="name" placeholder="Enter Name" required>
        <input type="text" class="form-control mb-2" id="surname" placeholder="Enter Last Name" required>
        <input type="text" class="form-control mb-2" data-tag="address" placeholder="Current Address" required>
        <textarea type="text" class="form-control mb-2" data-tag="address" placeholder="Actual Address" required></textarea>

        <!-- Radio Buttons -->
        <div class="form-group" id="radio-gaga">
            <label>Which is the best?:</label><br>
            <div class="form-check-inline">
                <label class="form-check-label" id="Mac">
                    <input type="radio" class="form-check-input" name="option">Mac
                </label>
            </div>
            <div class="form-check-inline" id="windows">
                <label class="form-check-label">
                    <input type="radio" class="form-check-input" name="option">Windows
                </label>
            </div>

            <div class="form-check-inline" id="linux">
                <label class="form-check-label">
                    <input type="radio" class="form-check-input" name="option">Linux
                </label>
            </div>
        </div>

        <!--Selectable-->
        <label for="dog-breeds" id="sus-looking-id">Which is the best dog breed?</label>
        <div class="list-group mb-2" for="dog-breeds" id="dog-breeds-selector">
            <div data-selenium="item" class="list-group-item list-group-item-action">Labrador Retriever</div>
            <div data="item" class="list-group-item list-group-item-action">German Shepherd</div>
            <div data="item" class="list-group-item list-group-item-action">Corgi</div>
            <div data="item" class="list-group-item list-group-item-action">Dalmatian</div>
            <div data="item" class="list-group-item list-group-item-action">Daschund</div>
            <div data="item" class="list-group-item list-group-item-action">ALL OF THEM !</div>
            <!-- Add more dog breeds as needed -->
        </div>


        <!-- Custom Slider -->
        <div class="form-group" id="slider">
            <label>Custom Slider:</label><br>
            <div class="slider-container">
                <div class="slider-track"></div>
                <div class="slider-handle"></div>
            </div>
            <div class="slider-value">0</div>
        </div>

        <!-- Submit Button -->
        <button type="submit" id="submitButton" class="btn btn-primary">Submit</button>
    </form>
</div>

<!-- jQuery library -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<!-- jQuery UI library -->
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
<!-- Bootstrap JS -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

<script>
    $(document).ready(function() {
        // Custom Slider Functionality
        let isDragging = false;
        let sliderWidth = $(".slider-container").width();
        let handleWidth = $(".slider-handle").width();
        let maxValue = 100;

        $(".list-group-item").click(function(e) {
            e.preventDefault();
            $(this).toggleClass('active');
        });

        $(".slider-handle").mousedown(function(e) {
            isDragging = true;
        });

        $(document).mouseup(function() {
            isDragging = false;
        });

        $(document).mousemove(function(e) {
            if (isDragging) {
                let mouseX = e.pageX - $(".slider-container").offset().left;
                let newLeft = mouseX - (handleWidth / 2);

                if (newLeft < 0) {
                    newLeft = 0;
                } else if (newLeft > sliderWidth - handleWidth) {
                    newLeft = sliderWidth - handleWidth;
                }

                $(".slider-handle").css("left", newLeft + "px");

                // Update value
                let value = Math.round((newLeft / (sliderWidth - handleWidth)) * maxValue);
                $(".slider-value").text(value);
            }
        });
    });
</script>

<style>
    .slider-container {
        position: relative;
        width: 100%;
        height: 20px;
        background-color: #f8f8f8;
        border-radius: 10px;
    }

    .slider-track {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: #ddd;
        border-radius: 10px;
    }

    .slider-handle {
        position: absolute;
        width: 20px;
        height: 20px;
        background-color: #4CAF50;
        border-radius: 50%;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
    }

    .slider-value {
        margin-top: 10px;
        text-align: center;
        font-weight: bold;
    }

</style>

</body>
</html>

