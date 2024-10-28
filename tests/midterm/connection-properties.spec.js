//connection properties


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

