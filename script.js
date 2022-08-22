const btn = document.querySelector(".convertBtn");
const displayBox = document.querySelector(".display_box");
const pOne = document.querySelector(".section1_p");
const pTwo = document.querySelector(".section2_p");
const pThree = document.querySelector(".section3_p");


function renderMeter(){
    const value = displayBox.value;
    const inches = value * 3.28;
    const displayinch = inches.toFixed(3);
    const meter = value / 3.28;
    const displayMeter = meter.toFixed(3);
    pOne.textContent = `${value} Meter = ${displayinch} feet || ${value} feet = ${displayMeter} Meter ||`;
}

function renderLiters(){
    const value = displayBox.value;
    const liters = value / 3.78;
    const displayLiter = liters.toFixed(3);
    const gallon = value * 3.78;
    const displayGallon = gallon.toFixed(3);
    pTwo.textContent = `${value} Liters = ${displayLiter} Gallons || ${value} Gallons = ${displayGallon} Liters ||`;
}

function renderKilograms(){
    const value = displayBox.value
    const kiloGrams = value * 2.204;
    const displayPounds = kiloGrams.toFixed(3);
    const pounds = value / 2.204;
    const displayKilograms = pounds.toFixed(3);
    pThree.textContent = `${value} Kilograms = ${displayPounds} Pounds || ${value} Pounds = ${displayKilograms} Kilograms ||`;
}

btn.addEventListener("click", function(){
    renderMeter();
    renderLiters();
    renderKilograms();
})

