function countElements() {
    let arr = [1, 3, 2, 4, 6, 0, '1', 'h', null, 0.5, 1.2, 0, NaN];
    countEven = 0;
    countOdd = 0;
    countZero = 0;

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
            if (arr[i] === 0) {
                countZero += 1;
            } else if (arr[i] % 2 === 0) {
                countEven += 1;
            } else {
                countOdd += 1;
            }
        }
    }

    console.log('Колчество чётных элементов: ' + countEven);
    console.log('Колчество нечётных элементов: ' + countOdd);
    console.log('Колчество нулевых элементов: ' + countZero);
}

countElements()