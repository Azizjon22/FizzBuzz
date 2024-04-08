let result = fizBazz('5')
console.log(result)
function fizBazz(input) {
    if (input % 3 === 0 && input % 5 === 0)
       return 'FizzBuzz';

     if (input % 5 === 0)
     return 'Buzz';

     if (input % 3 === 0)
     return 'Fizz';

     if(typeof input !== 'number')
     return 'son emas';

     return input;
}
