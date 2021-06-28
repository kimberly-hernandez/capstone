let num = 20;

num += 15;

num -= 8;

let array = [26, 44, 72, 86, 112];

let summ = array.reduce(function (a,b){
    return a+b;
}, 0);

let average = summ / array.length;

console.log(average);

let cat = 'meow';

let theNumber = 14;
console.log(++theNumber);
console.log(typeof(cat));