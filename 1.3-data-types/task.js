"use strict";
function calculateTotalMortgage(percent, contribution, amount, date) {
    if (isNaN(percent) || percent < 0 || percent == "") {
        console.log("Неверный percent");
        return percent;
    } else if (isNaN(contribution) || contribution < 0 || contribution == "") {
        console.log("Неверный contribution");
        return contribution;
    } else if (isNaN(amount) || amount < 0 || amount == "") {
        console.log("Неверный amount");
        return amount;
    } else if (isNaN(date) || date.getFullYear < new Date().getFullYear || date == "" || date < 0) {
        console.log("Неверная data");
        return date
    }
    
    else {
        let s = amount - contribution; //сумма кредита - первонач взнос
        let p = percent / 100 / 12;

        let n = date.getMonth() - new Date().getMonth() + (12 * (date.getFullYear() - new Date().getFullYear()));
    

        let monthlyPayment = s * (p + (p / (Math.pow(1 + p, n) - 1)));
    
        let totalAmount = monthlyPayment * n;
        console.log(totalAmount.toFixed(2));
        return totalAmount.toFixed(2); 
    }

}


function getGreeting(name) {
    let greeting = 'Привет, мир! Меня зовут ';
    if (name === undefined || name === null || name.trim() === "") {
        greeting += 'Аноним.';
    } else {
        greeting += `${name}.`;
    }
    console.log(greeting);
    return greeting;
}