function min_in_list(numbers){
    let min = numbers[0]
    for(let i = 0; i < numbers.length; i++){
        if(min > numbers[i]){
            min = numbers[i]
        }
    }
    return min
}

console.log(min_in_list([1,0,-20,10,999,356]))