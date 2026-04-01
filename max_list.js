function max_in_list(numbers){
    let max = numbers[0]
    for(let i = 0; i < numbers.length; i++){
        if(max < numbers[i]){
            max = numbers[i]
        }
    }
    return max
}

console.log(max_in_list([1,11,9]))