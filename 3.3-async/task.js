
'use strict';
class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.timerId = null;
  }

  addClock(time, callback, id ) {
    if (!id) {
      throw new Error('Параметр id не передан');
    } 
    try {
      if (this.alarmCollection.some(item => item.id === id)) console.error('Такой id существует')
      else(this.alarmCollection.push( {
        time, callback, id
      }))
    } catch(error) {
      return error
    }
  }
  
  removeClock(id) {
    if(this.alarmCollection = this.alarmCollection.filter(item => item.id != id)) 
    return true;

    return false;

  }
  getCurrentFormattedTime() {
    return new Date().toTimeString().slice(0,5)
  };


  start () {
    let checkClock = calling => { if (calling.time === this.getCurrentFormattedTime()) calling.callback()}
    if (!this.timerId) {
      this.timerId = setInterval(() => this.alarmCollection.forEach(calling => checkClock(calling)), 1000)
    }
  }

  stop() {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  printAlarms() {
    this.alarmCollection.forEach(item => console.log(`Id будильника:${item.id}, Время на будильнике ${item.time}`));
  }

  clearAlarms() {
    clearInterval(this.timerId);
    this.alarmCollection = [];
  }

}

function testCase() {
  const pp = new AlarmClock();
  pp.addClock("09:00", () => console.log("Вставай"), 1);
  pp.addClock("09:01", () => {console.log("Вставай уже"); pp.removeClock(2)}, 2);
  pp.addClock("09:01", () => console.log("Вставай уже"));
  pp.addClock("09:05", () => console.log("Вставай уже!!!"), 1);
  pp.printAlarms();
  pp.start();
}

