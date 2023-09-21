/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/

function calculateTime(n) {
    var startTime=new Date().getTime();
    var sum=(n*(n+1))/2;
    var endTime=new Date().getTime();
    return endTime-startTime;
}

console.log(calculateTime(10));
console.log(calculateTime(100000));
console.log(calculateTime(1000000000));