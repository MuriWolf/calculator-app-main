const isInputEmpty = function (input) {
    if (input.value <= 0) {
        input.parentElement.classList.add("error-input");
        return true;
    } 
    else if (input.parentElement.className.includes("error-input")) {
        input.parentElement.classList.remove("error-input");
        return false;
    } 
}  

const currency = function (number) {
    return new Intl.NumberFormat('en-IN', {style: 'currency',currency: 'USD', minimumFractionDigits: 2}).format(number);
}

export default function calculateTips(percentage, billInput, peopleInput) {
    isInputEmpty(peopleInput);
    isInputEmpty(billInput);

    if (isInputEmpty(peopleInput) == true || isInputEmpty(billInput) == true) {
        console.log("erro");
    } else {
        let bill = Number(billInput.value);
        let people = Number(peopleInput.value);
        let tipAmountPerPeople = currency((bill * percentage / 100) / people);
        let totalPerPeople = currency(((bill * percentage / 100) + bill) / people);
        return [tipAmountPerPeople, totalPerPeople];
    }
} 