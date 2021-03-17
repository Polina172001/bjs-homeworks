'use strict'

// 1задача

function parseCount(value) {
  const parse = Number.parseInt(value);
  if (isNaN(parse)) {
    throw new Error('Невалидное значение');
  }
  return parse
}

function validateCount(value) {
  try {
    return parseCount(value)
  } catch {
    return new Error (parseCount)
  } 
}

// 2задача

class Triangle {
  constructor (a, b, c) {
    if (a + b < c || a + c < b || b + c < a) {
      throw new Error('Треугольник с такими сторонами не существует');
    }
    this.a = a;
    this.b = b;
    this.c = c;
  }
  getPerimeter() {
    let perimeter = this.a + this.b + this.c;
    return perimeter;
  }
  getArea() {
    let pp = this.getPerimeter() / 2;
    let area = Math.sqrt(pp * (pp - this.a) * (pp - this.b) * (pp - this.c))
    return area.toFixed(3)
  }
}


function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c)
  } catch {
    let obj = {
      getArea() {return "Ошибка! Треугольник не существует"},
      getPerimeter() {return "Ошибка! Треугольник не существует"}
    }
    return obj
  } 
}