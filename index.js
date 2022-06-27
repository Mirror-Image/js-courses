const infiniteCurry = fn => {
    const next = (...args) => {
      return x => {
        if (!x) {
          return args.reduce((acc, a) => {
            return fn.call(fn, acc, a)
          }, { result: 0, isStop: false });
        }
        return next(...args, x);
      };
    };
    return next();
  };
  
const getSum = infiniteCurry((x, y) => {
    if (x.isStop) {
        return x.result;
    } else if (!x.isStop) {
        if (typeof y === 'string') {
            x.isStop = true;
            return x;
        }
        x.result = x.result + y;
    }

    return x;
});
console.log(getSum(1)('wow')(3)(4)(2)('wow')());
console.log(getSum(1)(3)('wow')(4)(2)('wow')());
console.log(getSum(1)(3)(4)('wow')(2)('wow')());
