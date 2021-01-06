function polybius(input, encode = true) {
    const alphabet = [
        { char: 'a', pos: 11 }, { char: 'b', pos: 21 }, { char: 'c', pos: 31 }, { char: 'd', pos: 41 }, { char: 'e', pos: 51 },
        { char: 'f', pos: 12 }, { char: 'g', pos: 22 }, { char: 'h', pos: 32 }, { char: 'i', pos: 42}, { char: 'j', pos: 42}, { char: 'k', pos: 52 },
        { char: 'l', pos: 13 }, { char: 'm', pos: 23 }, { char: 'n', pos: 33 }, { char: 'o', pos: 43 }, { char: 'p', pos: 53 },
        { char: 'q', pos: 14 }, { char: 'r', pos: 24 }, { char: 's', pos: 34 }, { char: 't', pos: 44 }, { char: 'u', pos: 54 },
        { char: 'v', pos: 15 }, { char: 'w', pos: 25 }, { char: 'x', pos: 35 }, { char: 'y', pos: 45 }, { char: 'z', pos: 55 }
      ];
      input = input.toLowerCase().split('')
      let result = ''
      if(encode){
        for (let i in input){
            if(input[i] === ' '){
                result += ' '
            }else {
             for(let j in alphabet){
                 if(input[i] === alphabet[j].char){
                     result += alphabet[j].pos
                    }   
                }
            }
        }
        console.log(result)
          return result
      }else{
          let counter = 0
          for(let numbers in input){
              if (input[numbers] !== ' '){
                  counter++
              }
          }
          if(counter % 2 !== 0) return false
          else{
          for (let i = 0;i < input.length; i+=2){
              if(input[i] === ' '){
                  result += ' '
                  i-=1
              }else{
                  let falseEncode = `${input[i]}${input[i+1]}`
                  for(let j = 0; j<alphabet.length;j++){
                    if(falseEncode == alphabet[j].pos){
                        result += alphabet[j].char
                    }
                }
              }
          }
        }
      }
          console.log(result)
          return result
}
// polybius("thinkful")
// polybius("j"); //> "4432423352125413"
// polybius("Hello world"); //> '3251131343 2543241341'
polybius("44324233521254134", false)
// polybius("3251131343 2543241341", false); //> "hello world"
// polybius("4432423352125413", false); //> "th(i/j)nkful
// polybius("44324233521254134", false); //> false

module.exports = polybius;
