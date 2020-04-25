const robot = require('robotjs');

function main() {
    console.log('Initializing...');
    sleep(4000);
    goHome();
    centerScreen();
    speedToggle();
    goFishAlKharid();
    console.log('Finished');
    
}

function sleep(ms) {
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}

main();

function goHome() {
    robot.moveMouseSmooth(1706, 1020);
    robot.mouseClick();
    sleep(1000);
    robot.moveMouseSmooth(1740, 747);
    robot.mouseClick();
    sleep(20000);
}

function speedToggle() {
    robot.moveMouseSmooth(1758, 152);
    robot.mouseClick();
}

function centerScreen() {
    robot.moveMouseSmooth(1761, 45);
    robot.mouseClick();
}

function goFishAlKharid() {
    robot.moveMouseSmooth(1897, 73);
    robot.mouseClick();
    sleep(7000);
    robot.moveMouseSmooth(1913, 107);
    robot.mouseClick();
    sleep(7000);
    robot.moveMouseSmooth(1889, 101);
    robot.mouseClick();
    sleep(7000);
    robot.moveMouseSmooth(971, 540);
    robot.mouseClick();
    sleep(1000);
    robot.moveMouseSmooth(198, 988);
    robot.mouseClick();
    sleep(1000);
    robot.moveMouseSmooth(304, 990);
    robot.mouseClick();
    sleep(1000);
    robot.moveMouseSmooth(258, 981);
    robot.mouseClick();
    sleep(1000);
    robot.moveMouseSmooth(198, 988);
    robot.mouseClick();
    sleep(7000);
    robot.moveMouseSmooth(1893, 143);
    robot.mouseClick();
}

