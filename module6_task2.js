function getNum(a) {
    if (a > 1000 || a < 2) {
        console.log("Данные неверны")
    } else {
        for (let i = 2; i < a; i++) {
            if (a % i === 0) {
                return console.log(`Число ${a} является составным`)
            } else {
                return console.log(`Число ${a} является простым`)
            }
        }
    }
};

getNum(5);