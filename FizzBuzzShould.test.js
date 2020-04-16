const fizzBuzz = require('./FizzBuzz');


test('return 0 for 0', () => {
    expect(fizzBuzz(0)).toEqual(0);
})

test('return Fizz for 3', () =>{
    expect(fizzBuzz(3)).toEqual("Fizz");
})

test('return Fizz for 6', () =>{
    expect(fizzBuzz(6)).toEqual("Fizz");
})

