
function palindrome(word){
    let inverse = "";
    for (let i = word.length - 1; i >= 0; i--){
        inverse += word[i]
    }

    if(inverse === word){
        console.log(`le mot ${word} est un palindrome`)
    }else{
        console.log(`le mot ${word} n'est pas un palindrome`)
    }
    return inverse
    
}

console.log(palindrome('kayak'))