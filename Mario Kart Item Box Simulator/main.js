// Mario Kart Item Box Simulator
'use strict';

// Global Variables
let numBanana = 0;
let numGreenShell = 0;
let numStar = 0;
let numGoldenMushroom = 0;
let numBulletBill = 0;

let resultsEl = document.getElementById('results');

// Event Listeners
document.getElementById('mainImg').addEventListener('click', collectItem);

// Event Function
function collectItem() {
    // Simulate results

    // Collect position
    let position = Number(document.getElementById('position').value);

    // If statement for positions 1 to 6
    if (position >= 1 && position <= 6) {

        // Generate a random number
        let randNum = Math.random(); // Random decimal from 0 up to 1
        
        if (randNum < 0.45) {
            // Collect Banana
            console.log("Banana");
            numBanana++;
            document.getElementById('banana').innerHTML = numBanana;
            resultsEl.innerHTML += '<img src="images/banana.jpg">';
        } else if (randNum < 0.8) {
            // Collect Green Shell
            console.log("Green Shell");
            numGreenShell++;
            document.getElementById('green-shell').innerHTML = numGreenShell;
            resultsEl.innerHTML += '<img src="images/green-shell.jpg">';
        } else if (randNum < 0.95) {
            // Collect Star
            console.log("Star");
            numStar++;
            document.getElementById('star').innerHTML = numStar;
            resultsEl.innerHTML += '<img src="images/star.jpg">';
        } else if (randNum < 0.99) {
            // Collect Golden Mushroom
            console.log("Golden Mushroom");
            numGoldenMushroom++;
            document.getElementById('golden-mushroom').innerHTML = numGoldenMushroom;
            resultsEl.innerHTML += '<img src="images/golden-mushroom.jpg">';
        } else {
            // Collect Bullet Bill
            console.log("Bullet Bill");
            numBulletBill++;
            document.getElementById('bullet-bill').innerHTML = numBulletBill;
            resultsEl.innerHTML += '<img src="images/bullet-bill.jpg">';
        }
    } else if (position >= 7 && position <= 12) {

        // Generate a random number
        let randNum = Math.random(); // Random decimal from 0 up to 1
        
        if (randNum < 0.05) {
            // Collect Banana
            console.log("Banana");
            numBanana++;
            document.getElementById('banana').innerHTML = numBanana;
            resultsEl.innerHTML += '<img src="images/banana.jpg">';
        } else if (randNum < 0.1) {
            // Collect Green Shell
            console.log("Green Shell");
            numGreenShell++;
            document.getElementById('green-shell').innerHTML = numGreenShell;
            resultsEl.innerHTML += '<img src="images/green-shell.jpg">';
        } else if (randNum < 0.35) {
            // Collect Star
            console.log("Star");
            numStar++;
            document.getElementById('star').innerHTML = numStar;
            resultsEl.innerHTML += '<img src="images/star.jpg">';
        } else if (randNum < 0.7) {
            // Collect Golden Mushroom
            console.log("Golden Mushroom");
            numGoldenMushroom++;
            document.getElementById('golden-mushroom').innerHTML = numGoldenMushroom;
            resultsEl.innerHTML += '<img src="images/golden-mushroom.jpg">';
        } else {
            // Collect Bullet Bill
            console.log("Bullet Bill");
            numBulletBill++;
            document.getElementById('bullet-bill').innerHTML = numBulletBill;
            resultsEl.innerHTML += '<img src="images/bullet-bill.jpg">';
        }
    }
}