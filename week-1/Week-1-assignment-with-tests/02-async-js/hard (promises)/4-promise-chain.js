/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

const { start } = require("repl");

function waitOneSecond() {
    return new Promise(resolve=>setTimeout(resolve,1000));
}

function waitTwoSecond() {
    return new Promise(resolve=>setTimeout(resolve,2000));
    
}

function waitThreeSecond() {
    return new Promise(resolve=>setTimeout(resolve,3000));
    
}

function getTime(startTime){
    let endTime=Date.now();
    return (endTime-startTime)/1000;
}

function calculateTime() {
    let startTime=Date.now();

    Promise.all([waitOneSecond(),waitTwoSecond(),waitThreeSecond()]).then(()=>console.log(getTime(startTime)));

    waitOneSecond().then(()=>waitTwoSecond()).then(()=>waitThreeSecond()).then(()=>console.log(getTime(startTime)));

}

calculateTime();