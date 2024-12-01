const fs = require('fs');
const data = fs.readFileSync('file.txt', 'utf8'); 


const rows = data.split("\n");

const column1 = []
const column2 = []

for (let row of rows) {
    const splitline = row.trim().split(" ").filter(num => num !== "");
    const [first, second] = splitline.map(num => parseInt(num, 10))
    column1.push(first)
    column2.push(second)


}

column1.sort((a, b) => a - b);
column2.sort((a, b) => a - b);



const arrayDifference = []

for (let i = 0; i < column1.length; i++){
    let difference = column1[i] - column2[i]

    arrayDifference.push(Math.abs(difference))
}
console.log(arrayDifference)

let sum = 0

for (let j = 0; j <arrayDifference.length; j++){
    sum += arrayDifference[j]
}

console.log(sum)