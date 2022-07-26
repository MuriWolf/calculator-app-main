import calculateTips from "./functions.js";

const percentageBtns = document.querySelectorAll(".js-btn--percentage");
const percentageInput = document.querySelector(".js-input--percentage");
const tipAmount = document.querySelector(".js-tip-amount");
const total = document.querySelector(".js-total");
const resetBtn = document.querySelector(".js-btn-reset");

percentageBtns.forEach(btn => {
    btn.addEventListener("click", function() {
        let percentage = this.value;        
        let billInput = (document.querySelector(".js-input-bill"));
        let peopleInput = (document.querySelector(".js-input-people"));

        let results = calculateTips(percentage, billInput, peopleInput);
        tipAmount.textContent = results[0];
        total.textContent = results[1];
    })
})

percentageInput.addEventListener("keyup", function() {
    let percentage = this.value; 
    let billInput = (document.querySelector(".js-input-bill"));
    let peopleInput = (document.querySelector(".js-input-people"));

    results = calculateTips(percentage, billInput, peopleInput);
    tipAmount.textContent = results[0];
    total.textContent = results[1];
})

resetBtn.addEventListener("click", () => location.reload())