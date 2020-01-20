function fizzBuzz(number) {
    if (number % 15 === 0) {
        return 'FizzBuzz';
    }

    if (number % 3 === 0) {
        return 'Fizz';
    }

    if (number % 5 === 0) {
        return 'Buzz';
    }

    // minimum code needed to pass our test
    return number;
}

function greeter(name) {
    return "Hello! " + name;
}

module.exports = {
    fizzBuzz,
    greeter
};
