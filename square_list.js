function sqaure_list(numbers){
    let Square = []
    for(let i = 0; i < numbers.length; i++){
        Square.push(numbers[i]**2)
    }
    return Square
}

console.log(sqaure_list([1,2,4,89,20]))

