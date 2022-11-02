function intFunc(a, b) {
    let value = a;
    const timerId = setInterval(function () {
        if (value === b) {
            clearInterval(timerId);
        }
        console.log(value);
        value++;
    }, 1000);
}

intFunc(5, 15)