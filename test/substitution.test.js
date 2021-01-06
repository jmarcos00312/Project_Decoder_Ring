// Write your tests here!
const expect = require("chai").expect
const substitution = require("../src/substitution")

describe ('substitution', () => {
    it ('Spaces should be no problem', () =>{
        const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev")
        const expected = 'elp xhm xf mbymwwmfj dne'
        expect(actual).to.eql(expected)
    });
    it ('Capital and lowercases should not matter', () => {
        const actual =substitution('tHiNKfuL', 'xoyqmcgrukswaflnthdjpzibev')
        const expected = 'jrufscpw'
        expect(actual).to.eql(expected)
    })
    it ('the length of the alphabet parameter should be exactly 26, otherwise return false', () => {
        const actual = substitution("thinkful", "short");
        expect(actual).to.be.false
    });
    it ('All of the characters in the alphabet parameter must be unique otherwise return false', () => {
        const actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz");
        expect(actual).to.be.false
    });
    it ('The output should still be a string', () => {
        let actual = substitution('tHiNKfuL', 'xoyqmcgrukswaflnthdjpzibev');
        expect(actual).to.be.a('string')
    });
})