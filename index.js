const counter = function(sumValue) {
    let count = 0;
    return function() {
        console.log(count += sumValue);
    };
};

const addFive = counter(5);
const addFive2 = counter(5);
const addSeven = counter(7);

addFive();
addFive();
addFive();
addFive();

addSeven();

addFive2();