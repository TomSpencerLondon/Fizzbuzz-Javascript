function fizzBuzz(number){
    if(number === 0){
        return 0
    }

    if(number % 5 === 0){
        return "Buzz";
    }

    if(number % 3 === 0){
        return "Fizz";
    }

    return number;
}

module.exports = fizzBuzz;