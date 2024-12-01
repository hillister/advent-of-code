const fs = require('fs');
const data = fs.readFileSync('file.txt', 'utf8'); 


const rows = data.split("\n");

const column1 = []
const column2 = []
const resultArray = []
for (let row of rows) {
    const splitline = row.trim().split(" ").filter(num => num !== "");
    const [first, second] = splitline.map(num => parseInt(num, 10))
    column1.push(first)
    column2.push(second)
}

for (num1 of column1){
    let count = 0

    for (num2 of column2){
        if(num1 == num2){
            count++
        }
    }
    let result = count * num1
    resultArray.push(result);
}

let sum = 0

for (let j = 0; j <resultArray.length; j++){
    sum += resultArray[j]
}

console.log(sum)