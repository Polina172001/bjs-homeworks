// 1 задание 
// console.clear()

const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];

function getNames() {
  const names = [];
  weapons.forEach((item) => {names.push(item.name)});
  return names;
}

console.log(getNames());


function getCountReliableWeapons(initDurability) {
  let count = 0;
  weapons.forEach((item) => {if (item.durability > initDurability) {count += 1}});
  return count;
}

console.log(getCountReliableWeapons(200))

function hasReliableWeapons(initDurability) {
  return weapons.some((item) => {
    if (item.durability > initDurability) {
      return true;
    } 
  });
}

console.log(hasReliableWeapons(900));

function getReliableWeaponsNames(initDurability) {
  let weapon = [];
  weapons.forEach((item) => {if (item.durability > initDurability) {weapon.push(item.name)}});
  return weapon;
}

console.log(getReliableWeaponsNames(900));

function getTotalDamage () {
  let sum = 0;
  weapons.forEach((item) => {sum += item.attack});
  return sum;
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
  
  let memory = [];
  if(fn() in memory) {
    return fn.result
  } else {
    fn();
    memory.push(fn());
    if (limit < memory) {
      memory.pop(fn())
    }
  }
  
  // const mSum = (...theArgs) => {return theArgs.reduce((first,next) => {return first + next})}; 
  return fn;
}



