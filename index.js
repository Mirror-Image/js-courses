let a = 77;
let b = a;

// console.log(a, b); // 77, 77

a = 5;

// console.log(a, b); // 5, 77

// Ссылочные типы данных
let obj1 = {
    fullName: 'Nick McGillan',
};

let obj2 = obj1;

// console.log(obj1, obj2); //

obj1.fullName = 'Brian Boyenger';

// console.log(obj1, obj2); //

const mainObj = {
    a: 'test',
    b: {
        c: 777
    },
}

const shellowCopyObject = Object.assign({}, mainObj);

// console.log(shellowCopyObject);

mainObj.a = 'Hellow world';

// console.log(mainObj);
// console.log(shellowCopyObject);

mainObj.b.c = 'google';

// console.log(mainObj);
// console.log(shellowCopyObject);

// console.log(String({}));

const customerList = [
    { firstName: 'Nick', secondName: 'McGillan', age: 35, phoneNumber: '+1333777888' },
    { firstName: 'Brian', secondName: 'Boyenger', age: 35, phoneNumber: '+1555666777' },
];

const mappedCustomerList = customerList.reduce((acc, item) => {
    acc[item.firstName + item.secondName] = item;

    return acc;
}, {});

// console.log(mappedCustomerList);

const binarySearc = (array, serchedValue) => {
    let start = 0;
    let end = array.length;
    let base = Math.floor((start + end) / 2);
    let step = 0;

    for (let i = 0;  i < array.length; i++) {
        if (array[base] !== serchedValue) {
            if (serchedValue < array[base]) {
                end = base;
            } else {
                start = base;
            }
            base = Math.floor((start + end) / 2);
            step++;
        };

        if (array[base] === serchedValue) return `Found ${serchedValue} in ${step} steps`;
    }

    return 'Nothing found';
}

const sortedArray = [1, 5, 6, 7, 8, 20, 25, 26, 30, 35, 40, 50];

console.log(binarySearc(sortedArray, 20));