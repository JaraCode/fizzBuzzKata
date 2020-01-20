const {fizzBuzz, greeter} = require('./index');

// fizzBuzz is the SUT (Subject Under Test)
describe('Fizzbuzz should', () => {

    test('return itself number', () => {
        expect(fizzBuzz(1)).toBe(1);
        expect(fizzBuzz(2)).toBe(2);
    });

    test('return Fizz if divisible by 3', () => {
        expect(fizzBuzz(3)).toBe('Fizz');
    });

    test('return Buzz if divisible by 5', () => {
        expect(fizzBuzz(5)).toBe('Buzz');
    });

    test('return FizzBuzz if divisible by 3 and 5', () => {
        expect(fizzBuzz(15)).toBe('FizzBuzz');
    });

});


describe('Greeter should', () => {

    test('return greeted hello ', () => {
        expect(greeter('Carlos')).toBe('Hello! Carlos');
    });
    
});
