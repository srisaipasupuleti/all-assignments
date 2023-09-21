/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep (n) {
    return new Promise(resolve=>setTimeout(resolve,n*1000));
}

async function test(){
    console.log('before sleep');
    await sleep(5);
    console.log('after sleep');
}

test()