const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const catImg = new Image();
catImg.src = "./res/img/catface.png";

let x = 10;
let y = 10;
let xVelocity = 1;
let yVelocity = 1;

let catWidth = 150;
let catHeight = 80;
let catHue = 0;

window.onload = () => {
    updateCanvasSize();
    
    setInterval(() => {
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        if (x + catWidth > canvas.width || x < 0) 
        {
            catHue = getRandNum(0, 360);
            xVelocity *= -1;
        }
        x += xVelocity;

        if (y + catHeight > canvas.height || y < 0) 
        {
            catHue = getRandNum(0, 360);
            yVelocity *= -1;
        }
        y += yVelocity;

        ctx.filter = `hue-rotate(${catHue}deg)`;
        ctx.drawImage(catImg, x, y, catWidth, catHeight);
        ctx.filter = "none";
    }, .1)
}

window.addEventListener("resize", () => {
    updateCanvasSize();
});

function updateCanvasSize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

const getRandNum = (minimum, maximum) => Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;




//====================================================================
// ctx.fillStyle = "red";
// ctx.fillRect(100, 200, 80, 40);

// ctx.strokeStyle = "blue";
// ctx.strokeRect(100, 100, 80, 40);

//=============================barak a smajlik========================
// const smokeImg = new Image();
// smokeImg.src = "./res/img/smoke.png";

// ctx.beginPath();
// ctx.arc(200, 200, 75, 0, 2 * Math.PI);
// ctx.stroke();

// ctx.beginPath();
// ctx.arc(200, 200, 50, .5, Math.PI / 2);
// ctx.stroke();

// ctx.beginPath();
// ctx.arc(170, 190, 10, 0, Math.PI);
// ctx.fill();

// ctx.beginPath();
// ctx.arc(230, 190, 10, 0, Math.PI);
// ctx.fill();

// // strecha stin
// ctx.fillStyle = "rgb(70, 0, 70)";
// ctx.beginPath();

// ctx.moveTo(310, 500);
// ctx.lineTo(380, 420);
// ctx.lineTo(450, 500);

// ctx.fill();

// ctx.fillRect(360, 420, 20, 20)

// // barak a komejn stin
// ctx.fillStyle = "rgb(70, 0, 170)";
// ctx.fillRect(310, 500, 130, 100);
// ctx.fillRect(392, 430, 20, 36);

// // barak a komejn
// ctx.fillStyle = "rgb(100, 0, 200)";
// ctx.fillRect(300, 500, 120, 100);
// ctx.fillRect(385, 500, 20, -70);

// // strecha stin 2
// ctx.fillStyle = "rgb(70, 0, 70)";
// ctx.beginPath();

// ctx.moveTo(295, 500);
// ctx.lineTo(365, 420);
// ctx.lineTo(435, 500);

// ctx.fill();

// // dvere
// ctx.fillStyle = "rgb(100, 80, 200)";
// ctx.fillRect(370, 540, 35, 60);
// ctx.fillStyle = "black";
// ctx.fillRect(375, 572, 5, 2);

// // futra
// ctx.strokeStyle = "black";
// ctx.strokeRect(370, 540, 35, 60);

// // vokno
// ctx.fillStyle = "rgb(150, 150, 250)";
// ctx.fillRect(310, 540, 45, 35);

// // vokno ram
// ctx.strokeStyle = "black";
// ctx.strokeRect(310, 540, 45 / 2, 35 / 2);
// ctx.strokeRect(310, 540 + 35 / 2, 45 / 2, 35 / 2);
// ctx.strokeRect(45 / 2 + 310, 540, 45 / 2, 35 / 2);
// ctx.strokeRect(45 / 2 + 310, 540 + 35 / 2, 45 / 2, 35 / 2);

// // strecha
// ctx.fillStyle = "rgb(100, 0, 100)";
// ctx.beginPath();

// ctx.moveTo(290, 500);
// ctx.lineTo(360, 420);
// ctx.lineTo(430, 500);

// ctx.fill();

// ctx.drawImage(smokeImg, 340, 60);
//=============================barak a smajlik konec========================