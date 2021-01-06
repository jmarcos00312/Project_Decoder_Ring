function caesar(input, shift = 0, encode = true) {
    if(!input) return false
    let alphabet  = 'abcdefghijklmnopqrstuvwxyz'.split('');
    input = input.toLowerCase();
    if (shift < -25 || shift > 25 || shift === 0) return false;
    if(!encode){
        shift *= -1;
    }
    
    return input.toLowerCase().split('').map(letter => {
        if(alphabet.includes(letter)){ 
          if(alphabet.indexOf(letter) + shift < 0){
            return alphabet[alphabet.indexOf(letter) + shift + 26];
          }
          if(alphabet.indexOf(letter) + shift > 25){
            return alphabet[alphabet.indexOf(letter) + shift - 26];
          }
          return alphabet[alphabet.indexOf(letter) + shift];
        }else{
          return letter;
        }
      }).join('');
}
caesar("Thinkful $@#", 3)
// caesar("thinkful", 3); //> 'wklqnixo'
// caesar("thinkful", -3); //> 'qefkhcri'
// caesar("wklqnixo", 3, false); //> 'thinkful'

caesar("This is a secret message!", 8); //> 'bpqa qa i amkzmb umaaiom!'
// caesar("BPQA qa I amkzmb umaaiom!", 8, false); //> 'this is a secret message!'

// caesar("thinkful"); //> false
// caesar("thinkful", 99); //> false
// caesar("thinkful", -26); //> false
module.exports = caesar;
