// Solution 1

function sum_list(numbers){
    let resultat = 0;
    for(let i = 0; i < numbers.length; i++){
        resultat += numbers[i]
    }
    return resultat
}

console.log(sum_list([1,4,10]))

// Solution 2

const lsit1 = [1,2,3,4,5]

function sumlist(...number){
    let rz = 0;
    number.forEach(number => {
        rz += number
    });
    return rz;
}
console.log(sumlist(...lsit1))
