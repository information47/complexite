const fs = require('fs');
let input = fs.readFileSync("input.txt", 'utf-8');
console.log(typeof input);
let table = input.split('\n'); 
console.log(table);

function findMax(list){
    let actual = 0;
    let max = 0;
    for (let i = 0; i< list.length; i++) {
        if (list[i] == '') {
            if (actual > max) {
                max = actual;
            }
            actual = 0;
        } else {
            actual += parseInt(list[i]);
        }
    }
    return max;
}

result = findMax(table);
console.log(result);