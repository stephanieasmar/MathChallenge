function getMultiples() {
    var multiples = [];
    for (var i=0; i < 1000; i++) {
        if ((i % 3 == 0) || (i % 5 == 0)) {
            multiples.push(i);
        }
    }
    return multiples;
}

function getSum(multiples) {
    // console.log(multiples);
    return multipleArray.reduce(function (runningTotal, current) {
        return runningTotal + current;
    });
}

var multipleArray = getMultiples();
getSum(multipleArray);