const fizzBuzz = require('./FizzBuzz');

describe('Fizz should', ()=> {
    it.each`input | result
        ${0}   | ${0}
        ${3}   | ${"Fizz"}
        ${6}   | ${"Fizz"}
        ${5}   | ${"Buzz"}
        ${15}  | ${"FizzBuzz"}
        `('return $result for $input', ({input, result}) => {
        expect(fizzBuzz(input)).toEqual(result);
    });
});
