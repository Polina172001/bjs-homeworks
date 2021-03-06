// 1 задание 
// console.clear()
'use strict';

const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];

function getNames() {
  return weapons.map(item => item.name);
}


function getCountReliableWeapons(initDurability) {
  return weapons.filter(item => item.durability > initDurability).length;
}


function hasReliableWeapons(initDurability) {
  return weapons.some(item => item.durability > initDurability);
}


function getReliableWeaponsNames(initDurability) {

  return weapons.filter(item => item.durability > initDurability).map(item => item.name);
}



function getTotalDamage () {
  return weapons.reduce((a, b) => a + b.attack, 0);

}


// 2 задание

function sleep(milliseconds) 
{
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
}

function sum(...args) {
  // Замедление на половину секунды.
  sleep(100); // Можно использовать другое значение замедления.
  return args.reduce((sum, arg) => {
    return sum += +arg;
  }, 0);
}

function  compareArrays( arr1, arr2 ) {
  return arr1.length === arr2.length && arr1.every((v,i) => v === arr2[i])
}


function memorize(fn, limit) {
  debugger;
  const memory = [];

  return  function (...argument) {

    const findObj =  memory.find(item => compareArrays(item.args, argument));

    if (findObj) {
      return findObj.result;
    } 

    let res = fn(...argument)
    memory.push({
      args: argument,
      result: res
    });

    if (memory.length > limit) {
      memory = memory.shift();
    }
    
    return res;
    
  }
}



