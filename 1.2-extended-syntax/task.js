"use strict";
function getResult(a,b,c){
    let discriminant;
    discriminant = (Math.pow(b, 2)) - 4 * a * c;
    if (discriminant < 0) {
        return [ ];
    } 
    if (discriminant == 0) {
        let x = - (b / (2 * a));
        return [x];
    } else {
        let x_1 = (- b + Math.sqrt(discriminant)) / (2 * a);
        let x_2 = (- b - Math.sqrt(discriminant)) / (2 * a);
        return [x_1, x_2];
    }
}

function getAverageMark(marks){
    let sum = 0;

    if (marks.length == 0) {
        return 0;
    } else if (marks.length > 5) {
        console.log("Массив превышает 5 оценок");
        marks.splice(5);
    }

    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }
    let averageMark = sum / marks.length;
    return averageMark; 
    
}

function askDrink(name,dateOfBirthday){
    let result;
    const year = new Date() .getFullYear() - dateOfBirthday.getFullYear();
    if (year > 18) {
        result = `Не желаете ли олд-фэшн, ${name}?`;
    } else {
        result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!`;
    }
    return result;

}