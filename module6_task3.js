function getValue(a) {
    return function(b) {
        return a + b
    }
}

const resultFunc = getValue(1);
const sum = resultFunc(2);
console.log(sum)