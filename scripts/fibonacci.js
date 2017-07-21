function fib() {   
    var num = 0; 
    var fibo = [1,2];
    for (var i=1; num < 4000000; i++) {
        num = fibo[i] + fibo[i-1];
        fibo.push(num);
    }
    return fibo;
}

function fibEvens() {
    var allFib = fib();
    var evens = allFib.filter( function(num) {
        return (num % 2 == 0);
    });
    return evens;
}

function sumEvens() {
    var evensArray = fibEvens();
    return evensArray.reduce( function (runningTotal, current) {
        return runningTotal + current;
    });
}

sumEvens();