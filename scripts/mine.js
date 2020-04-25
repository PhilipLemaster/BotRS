const robot = require('robotjs');

function sleep(ms) {
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}

function main() {
    console.log('Initializing...');
    sleep(4000);
    mine();
    console.log('Finished');
    
}

function mine() {
    robot.moveMouseSmooth(884, 563);
    robot.mouseClick();
    repeatMine();

}

function repeatMine() {
    var pixColor = String(robot.getPixelColor(884,563));

    if (pixColor === '463f3f') {
        sleep(500);
        repeatMine();
    }

    else if (pixColor === '221e1e') {
        sleep(3000);
        robot.mouseClick();
        repeatMine();
    }
    
}

main();