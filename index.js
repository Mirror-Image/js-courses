// console.log(typeof typeof (1 / 0))

Array.prototype.duplicate = function() {
  return [...this, ...this];
}

// console.log([1, 2, 3, 4, 5].duplicate()); // [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]

let arr = [1, 2, 3, 3, 4, 5, 5, 6, 7, 7, 7];

function unique(array) {
  return [...new Set(arr)];
}

// console.log(unique(arr)); // 

let arr1 = [0, 2, 4, 6, 8, 8, 7, 7];
let arr2 = [1, 2, 3, 4, 5, 6, 8, 8];

let duplicateValues = [...new Set(arr1)].filter(item => arr2.includes(item))
// console.log(duplicateValues);

function when(delay) {
  return new Promise((res, rej) => {
    setTimeout(res, delay)
  })
}

// when(2000).then(() => console.log('finish'));

const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius,
}

// console.log(shape.diameter()); // 20
// console.log(shape.perimeter()); // NaN

const newDiameter = shape.diameter;

// console.log(newDiameter()); // NaN

// TDZ
var a = 5;

function foo(a) {
  a += a;
}

foo(10);
// console.log(a); // 5


// Promise chaining
// Promise.reject('a')
//  .catch(p => p + 'b')
//  .catch(p => p + 'c')
//  .then(p => p + 'd')
//  .finally(p => p + 'e')
//  .then(p => console.log(p)); // abd


 Promise.resolve(11)
  .then(
    val => console.log('then', val), // then, 11
    err => console.log('catch', err)
  )
  .then(
    null,
    err => console.log('catch', err)
  )
  .catch(
    err => console.log('catch', err)
  )
  .then(
    () => Promise.reject(22)
  )
  .catch(
    null
  )
  .then(
    val => console.log('then', val),
    null
  )
  .finally(
    val => console.log('finally', val), // finally, undefined
  )
  .catch(
    val => console.log('catch', val) // catch, 22
  )
  .finally(
    () => Promise.reject(33)
  )
  .then(
    val => console.log('then', val),
    err => console.log('catch', err) // catch 33
  )
  .catch(
    val => console.log('then', val),
    err => console.log('catch', err)
  );
