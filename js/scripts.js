// Constants for query selector
const imageSelect = document.getElementById("imageSelect");
const images = document.getElementById("images");
const customNumber = document.getElementById("customNumber");
const custColorBtn = document.querySelector(".custColor");
const randColorBtn = document.querySelector(".randColor");

// Array of image paths
const imageArray = ['img/img1.jpg', 'img/img2.jpg', 'img/img3.jpg', 'img/img4.jpg', 'img/img5.jpg'];

// Function to change the background color based on user input
function changeCustomColor() {
    let value = parseInt(customNumber.value);

    if (value < 0 || value > 100) {
        document.body.style.backgroundColor = 'red';
    } else if (value <= 20) {
        document.body.style.backgroundColor = 'green';
    } else if (value <= 40) {
        document.body.style.backgroundColor = 'blue';
    } else if (value <= 60) {
        document.body.style.backgroundColor = 'orange';
    } else if (value <= 80) {
        document.body.style.backgroundColor = 'purple';
    } else {
        document.body.style.backgroundColor = 'yellow';
    }
}

// Function to generate a random number and change the background color
function changeRandomColor() {
    let randomValue = Math.floor(Math.random() * 100) + 1;
    customNumber.value = randomValue;
    changeCustomColor();
}

// Function to generate options for the select list from the imageArray
function addList() {
    for (let i = 0; i < imageArray.length; i++) {
        let option = document.createElement('option');
        option.value = imageArray[i];
        option.text = 'Image ' + (i + 1);
        imageSelect.appendChild(option);
    }
}

// Function to change the image based on selected option
function changeImage() {
    images.src = imageSelect.value;
}

// Immediately populate dropdown on page load
addList();

// Set default image
images.src = imageArray[0];

// Event listeners
custColorBtn.addEventListener("click", changeCustomColor);
randColorBtn.addEventListener("click", changeRandomColor);
imageSelect.addEventListener("change", changeImage);
