// Getting min and max values and generating a random number
function randomDraw(min,max) {
    return Math.round(Math.random() * (max-min) + min);
}

// After page fully loads
document.addEventListener("DOMContentLoaded", function() {
    let minNumberInput = document.getElementById("min-number")
    let maxNumberInput = document.getElementById("max-number")

    // Reset value from the input fields uppon reloading
    minNumberInput.value = "";
    maxNumberInput.value = "";

    document.getElementById("generate").addEventListener("click", function(event) {
        event.preventDefault();
    
        const minNumber = parseInt(minNumberInput.value) || 0; 
        const maxNumber = parseInt(maxNumberInput.value) || 500; 
        const resultNumberDiv = document.querySelector(".result-number");
        const hiddenText = document.querySelector(".hidden-text");

        resultNumberDiv.innerHTML = "";
        const randomValue = randomDraw(minNumber, maxNumber);
        const resultParagraph = document.createElement("p");

        resultParagraph.textContent = randomValue;
        resultNumberDiv.style.display = "block"; 
        hiddenText.style.display = "block"; 
        resultNumberDiv.appendChild(resultParagraph);
    });
})