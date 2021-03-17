'use strict';
// 1 задание

class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }

  fix() {
    this.state = this.state * 1.5;
    // return this.state;
  }

  set state(newNumber) {
    if (newNumber < 0) {
      this._state = 0;
    } else if (newNumber > 100) {
      this._state = 100;
    } else {
      this._state = newNumber;
    }
  }

  get state() {
    return this._state;
  }

}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
  }
  
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.author = author;
    this.name = name;
    // this.releaseDate = releaseDate;
    // this.pagesCount = pagesCount;
    this.type = "book";
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "detective";
  }
}



// 2 задание

class Library extends Book{
  constructor (name) {
    super(name);
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if(this.state > 30) {
      this.books.push(book)
    }
  }

  findBookBy(type, value) {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i][type] === value) {
        return this.books[i]
      }
        return null;
    }
  }

  giveBookByName(bookName) {
    for (let i = 0; i < this.books.length; i++) {
      if(this.books[i].name === bookName) {
        this.books.splice([i], 1);
        return this.books[i].name;
      } 
      return null;
    }
  }

}

// 3 задание

class StudentLog {
  constructor(name, obj) {
    this.name = name;
    this.obj = {};
  }

  getName() {
    return this.name;
  }

  addGrade(grade, subject) {

    if (subject in this.obj) {
      this.obj[subject].push(grade)
    } else {
      this.obj[subject] = []
      this.obj[subject].push(grade)
    }
  }

  getAverageBySubject(subject) {
    let averageSum = 0;
    let averageRating = 0;
    if (subject in this.obj) {

      for (let i = 0; i < this.obj[subject].length; i++) {
        averageSum += this.obj[subject][i];
      }
        averageRating = averageSum / this.obj[subject].length;
        return averageRating;
    } else {
      return averageRating;
    }
  }

  getTotalAverage() {
    let average = {}
    let total = 0;
    let sum = 0;
    if (this.obj.length === 0) {
      return 0;
    }
    for (let key in this.obj) {
      average[key] = this.obj[key]
      total += 1;
      sum += this.getAverageBySubject(key)
    }
      return sum/total
  }
}