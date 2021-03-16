"use strict";
function getSolutions( a, b, c ){
  let D = Math.pow(b,2) - (4 * a * c);
  let x1;
  let x2;
  if (D < 0) {
    return {
      D,
      roots: []
    };
  } else if (D === 0) {
    x1 = -b / (2 * a);
    return {
      D, 
      roots: [x1]
    };
  } else if (D > 0) {
    x1 = (-b + Math.sqrt(D)) / (2 * a);
    x2 = (-b - Math.sqrt(D)) / (2 * a);
    return {
      D,
      roots: [x1, x2]
    };
  }
}

function showSolutionsMessage( a, b, c ){
  let result = getSolutions( a, b, c );
  console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
  console.log(`Значение дискриминанта: ${result.D}`);
  if (result.D < 0) {
    console.log(`Уравнение не имеет вещественных корней`);
  } else if (result.D > 0) {
    console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
  } else {
    console.log(`Уравнение имеет один корень X₁ = ${result.roots}`);
  }

}

//2 задача

function getAverageScore(data) {
  let averageScore = {};
  let res = 0;
  let count = 0;
  for (let key in data) {
    averageScore[key] = getAverageMark(data[key]);
    count +=1;
    res += getAverageMark(data[key]);
  }

  if (count > 0) {
    averageScore.average = res / count; 
  } else {
    averageScore.average = 0;
  }

  return averageScore 
}

function getAverageMark(marks) {
  let sum = 0;

  if (marks.length === 0) {
    return 0;
  }
  for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
  }
  return sum / marks.length;
}

// 3 задача

function getPersonData(secretData) {
  return {
    firstName: getDecodedValue(secretData.aaa),
    lastName: getDecodedValue(secretData.bbb)
  }
}

function getDecodedValue(secret) {
  if (secret === 1) {
    return `Эмильо`
  } else if (secret === 0) {
    return `Родриго`
  } 
}