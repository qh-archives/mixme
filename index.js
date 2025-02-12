document.addEventListener("DOMContentLoaded", function () {
    let canvas = document.getElementById("myCanvas");
    canvas.width = 375;
    canvas.height = 812;

    let ctx = canvas.getContext("2d");

    ctx.fillStyle = "#FF66B2";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.font = "bold 22px monospace";
    ctx.fillStyle = "White";
    ctx.fillText("Style Queenie for School", 24, 50);

    // Load Base Image (nbody.png)
    let img = new Image();
    img.src = "Assets/nbody.PNG";

    //Load Jewelry Images
    let jewelryImages = [new Image(), new Image(), new Image()];
    jewelryImages[0].src = "Assets/jewelry1.PNG"; // Index 1
    jewelryImages[1].src = "Assets/jewelry2.PNG"; // Index 2
    jewelryImages[2].src = "Assets/jewelry3.PNG"; // Index 3

    // Tops Images
    let topsImages = [new Image(), new Image(), new Image()];
    topsImages[0].src = "Assets/top1.PNG"; // Index 1
    topsImages[1].src = "Assets/top2.PNG"; // Index 2
    topsImages[2].src = "Assets/top3.PNG"; // Index 3

    // Load Bottoms Images
    let bottomsImages = [new Image(), new Image(), new Image()];
    bottomsImages[0].src = "Assets/bot1.PNG"; // Index 1
    bottomsImages[1].src = "Assets/bot2.PNG"; // Index 2
    bottomsImages[2].src = "Assets/bot3.PNG"; // Index 3

    // Load Shoes Images
    let shoesImages = [new Image(), new Image(), new Image()];
    shoesImages[0].src = "Assets/shoes1.PNG"; // Index 1
    shoesImages[1].src = "Assets/shoes2.PNG"; // Index 2
    shoesImages[2].src = "Assets/shoes3.PNG"; // Index 3

    let jewelryValue = 0; 
    let topsValue = 0;
    let bottomsValue = 0;
    let shoesValue = 0;

    function drawScene() {
        let imgWidth = img.width;
        let imgHeight = img.height;
        let centerX = (canvas.width - imgWidth) / 2;
        let centerY = (canvas.height - imgHeight) / 2;

        // Clear and redraw background
        ctx.fillStyle = "#FF66B2";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.font = "bold 22px monospace";
        ctx.fillStyle = "White";
        ctx.fillText("Style Queenie for School", 24, 50);

        // Bbase image
        ctx.drawImage(img, centerX, centerY, imgWidth, imgHeight);

        // Shoes
        if (shoesValue >= 1 && shoesValue <= 3) {
            ctx.drawImage(shoesImages[shoesValue - 1], centerX, centerY, imgWidth, imgHeight);
        }

        // Bottoms
        if (bottomsValue >= 1 && bottomsValue <= 3) {
            ctx.drawImage(bottomsImages[bottomsValue - 1], centerX, centerY, imgWidth, imgHeight);
        }

        // Tops
        if (topsValue >= 1 && topsValue <= 3) {
            ctx.drawImage(topsImages[topsValue - 1], centerX, centerY, imgWidth, imgHeight);
        }

        //Jewelry
        if (jewelryValue >= 1 && jewelryValue <= 3) {
            ctx.drawImage(jewelryImages[jewelryValue - 1], centerX, centerY, imgWidth, imgHeight);
        }
    }

    //Images are fully loaded before drawing
    img.onload = drawScene;
    jewelryImages.forEach(jewelry => (jewelry.onload = drawScene));
    topsImages.forEach(top => (top.onload = drawScene));
    bottomsImages.forEach(bot => (bot.onload = drawScene));
    shoesImages.forEach(shoe => (shoe.onload = drawScene));

    let buttons = document.querySelectorAll(".btn");
    let numbers = document.querySelectorAll(".num");

    let spacing = canvas.width / (buttons.length + 0.2);

    buttons.forEach((btn, index) => {
        let container = btn.parentElement;
        container.style.left = `${spacing * (index + 1) - 70}px`;
    });

    buttons.forEach((btn, index) => {
        btn.addEventListener("click", function () {
            let currentNum = parseInt(numbers[index].textContent);
            let newNum = (currentNum + 1) % 4; // Cycles from 0 to 3 and repeats
            numbers[index].textContent = newNum;

            //Jewelry Button is btn1//
            if (index === 0) { 
                jewelryValue = newNum; 
                drawScene();
            }

            //Tops Button is btn2//
            if (index === 1) {
                topsValue = newNum; 
                drawScene();
            }

            //Bottoms Button is btn3//
            if (index === 2) {
                bottomsValue = newNum;
                drawScene();
            }

            //Shoes Button is btn4//
            if (index === 3) {
                shoesValue = newNum; 
                drawScene();
            }
        });
    });
});
