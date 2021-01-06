// Write your tests here!
const expect = require("chai").expect
const caesar = require("../src/caesar")


describe('caesar', ()=>{
    it ("Should return a random letter according to the sentence when passed in a string" , () => {
        const actual = caesar("thinkful", 3)
        const expected = 'wklqnixo'
        expect(actual).to.eql(expected)
    });
    it("should handle letter shifted that goes off the alphabet", () =>{
        const actual = caesar("z", 3)
        const expected = 'c'
        expect(actual).to.eql(expected)
    });
    it ("should handle case sensitive", () => {
        const actual = caesar("ZtBaC", 3)
        const expected = 'cwedf'
        expect(actual).to.eql(expected)
    });
    it ("should maintain spaces ", () => {
        const actual = caesar("This is a secret message!", 8)
        const expected = "bpqa qa i amkzmb umaaiom!"
        expect(actual).to.eql(expected)
    });
    it ("Should return false if shift value is equal to 0, less than -25,greater than 25", () => {
        const actual = caesar("Thinkful is amazing", 33)
        expect(actual).to.be.false
    })
    it('Should return the input back to english if encode is false', () => {
        const actual = caesar("wklqnixo", 3, false)
        const expected = 'thinkful'
        expect(actual).to.eql(expected)
    })
    it('Should handle shifts that is negative', () => {
        const actual = caesar("thinkful", -3)
        const expected = 'qefkhcri'
        expect(actual).to.eql(expected)
    })
    it('should return false if the shift value is equal to 0, less than -25 or greater than 25', () => {
        expect(caesar('false', -26)).to.be.false;
        expect(caesar('false', 26)).to.be.false;
        expect(caesar('false', 0)).to.be.false;
        expect(caesar('false')).to.be.false;
    })
});