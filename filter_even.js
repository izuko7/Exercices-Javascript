function filter_even(numbers){
    for( let i = 0; i < numbers.length; i++){
        if(numbers[i]%2 === 0){
            console.log(numbers[i])
        }
    }
}

filter_even([1,2,6,9,0,12,20,200,99,1000])