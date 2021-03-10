"use strict";
// String.prototype.isPalindrome - для задачи №1
String.prototype.isPalindrome = function isPalindrome() {

    let string = this.toLowerCase().replace(/\s+/g, '').split('').reverse().join('');
    console.log(string);

    if(this.toLowerCase().replace(/\s+/g, '').split('').join('') === string) {
        return true;
    } else {
        return false;
    }

}


function getAverageMark(marks) {
    if (marks.length == 0) {
        return 0;
    } 

    let sum = 0;

    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }
    let average = sum / marks.length;
    let roundedAverage = Math.round(average);

    return roundedAverage;
}

function checkBirthday(birthday) {
    let msYear = 365.242 * 24 * 60 * 60* 1000;
    let now = new Date().getTime();
    let birthday1 = +new Date(birthday);
    let diff = now - birthday1;
    let age = diff / msYear;
    if (age > 18) {
        return true;
    }

    // код для задачи №3 писать здесь
    // return verdict
}