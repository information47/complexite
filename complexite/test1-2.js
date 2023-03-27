const fs = require('fs');
let input = fs.readFileSync("input.txt", 'utf-8');
let table = input.split('\n'); 

function findMax(list){
    let actual = 0;
    let elves = [];
    let first = 0;
    let second = 0;
    let third = 0;
    for (let i = 0; i< list.length; i++) {
        if (list[i] == '') {
            elves.push(actual);
            actual = 0;
        } else {
            actual += parseInt(list[i]);
        }
    }
    console.log(elves);
    return first + second + third;
}

result = findMax(table);
console.log(result);