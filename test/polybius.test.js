// Write your tests here!
const expect = require("chai").expect
const polybius = require("../src/polybius")

describe ('polybius', () => {
    it ('should ignore if the sting is capitalize or lowercase', () => {
        const actual = polybius("THINKFUL")
        const expected = '4432423352125413'
        expect(actual).to.eql(expected)
    });
    it ('The output should still be a string', () => {
        let actual = polybius('random');
        expect(actual).to.be.a('string')
    });
    it('Should return in english if encode is equal to false', () => {
        const actual = polybius("3251131343 2543241341", false);
        const expected = 'hello world'
        expect(actual).to.eql(expected);
    });
    it('Should work even with spaces on the input', () => {
        const actual = polybius("Hello world");
        const expected = '3251131343 2543241341';
        expect(actual).to.eql(expected)
    });
    it('The letter i/j should share the same number if the encode is equal to true and it should also works if the encode is equal to false', () => {
        const actual = polybius("4432423352125413", false);
        const expected = 'thijnkful';
        expect(actual).to.eql(expected)
    })
    it('When decoding the length of the input should be even otherwise false', () => {
        const actual = polybius("44324233521254134", false);
        expect(actual).to.be.false
    });
    it('When decoding space the number of characters in the string excluding spaces should be even. Otherwise, return false ', () => {
        const actual = polybius("3251131343 2543241341", false);
        const expected = 'hello world'
        expect(actual).to.eql(expected);
    });

});