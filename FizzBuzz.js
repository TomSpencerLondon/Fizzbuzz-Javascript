function fizzBuzz(number){
    if(number === 0){
        return 0
    }

    if(divisibleBy(number, 15)){
        return "FizzBuzz";
    }

    if(divisibleBy(number, 5)){
        return "Buzz";
    }

    if(divisibleBy(number, 3)){
        return "Fizz";
    }

    return number;
}

function divisibleBy(number, divisor) {
    return number % divisor === 0;
}

module.exports = fizzBuzz;
