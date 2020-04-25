const robot = require('robotjs');

function main() {
    console.log('Initializing...');
    sleep(4000);
    
    console.log('Finished');
    
}

function sleep(ms) {
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}

main();