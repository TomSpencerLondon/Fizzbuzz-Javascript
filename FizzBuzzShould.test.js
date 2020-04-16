const fizzBuzz = require('./FizzBuzz');

it.each`input | result
    ${0}   | ${0}
    ${3}   | ${"Fizz"}
    ${6}   | ${"Fizz"}
    `('return $result for $input', ({input, result}) => {
    expect(fizzBuzz(input)).toEqual(result);
});
