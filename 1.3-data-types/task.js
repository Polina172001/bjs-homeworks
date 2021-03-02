"use strict";
function calculateTotalMortgage(percent, contribution, amount, date) {
    let s = amount - contribution; //сумма кредита - первонач взнос
    let p = percent / 100 / 12;
    let n = date.getMonth() - new Date().getMonth() + (12 * (date.getFullYear() - new Date().getFullYear()));

    let monthly_payment = s * (p + (p / (Math.pow(1 + p, n) - 1)));
    
    let totalAmount = monthly_payment * n;
    console.log(totalAmount.toFixed(2));
    return totalAmount.toFixed(2);
}


function getGreeting(name) {
    let greeting;
    if (name === undefined || name === null || name === "") {
        greeting = 'Привет, мир! Меня зовут Аноним.';
    } else {
        greeting = `Привет, мир! Меня зовут ${name}.`;
    }
    console.log(greeting);
    return greeting;
}