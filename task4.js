let sevenTimesTable = [7, 14, 21, 28, 35, 42, 49, 56, 63, 70];

let seventySevenTimesTable = [77, 154, 231, 308, 385, 461, 538, 616, 693, 770];

const result = sevenTimesTable.every(function (num) {
    return num % 7 === 0;
})

const result2 = seventySevenTimesTable.find(function (num) {
    return num % 77 !== 0;
})

/* const result3 = seventySevenTimesTable.findIndex(function (num){
    return num.findIndex(461);
}) */