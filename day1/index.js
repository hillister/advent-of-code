const fs = require('fs');
const data = fs.readFileSync('test.txt', 'utf8'); 


const rows = data.split("\n");

const column1 = []
const column2 = []

for (let row of rows) {
    const splitline = row.trim().split(" ").filter(num => num !== "");
    const [first, second] = splitline.map(num => parseInt(num, 10))
    column1.push(first)
    column2.push(second)


}

console.log(column1)

console.log(column2)