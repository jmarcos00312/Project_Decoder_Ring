function substitution(input, alphabet, encode = true) {
    if(!alphabet) return false
    const regAlphabet = 'abcdefghijklmnopqrstuvwxyz';
    sortedAlp = alphabet.split('').sort().join('')
    input = input.toLowerCase()
    if (alphabet.length !== 26 || regAlphabet!== sortedAlp) return false
    else{
    let result = ''
    const obj = {}
    if(encode){
    for (let i = 0; i<alphabet.length;i++){
        obj[regAlphabet.charAt(i)] = alphabet.charAt(i)
    }
}else{
    for (let i = 0; i<alphabet.length;i++){
        obj[alphabet.charAt(i)] = regAlphabet.charAt(i)
    }
}
    for (let i = 0; i<input.length;i++){
        if (input[i] === ' '){
            result += ' '
        }else{
        result += obj[input.charAt(i)]
            }
        }
        console.log(result)
        return result
    }

}





substitution("You are an excellent spy", )
substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false)
module.exports = substitution;
