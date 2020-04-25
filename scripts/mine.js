const robot = require('robotjs');
const stand = require('./standards');

function main() {
    console.log('Initializing...');
    sleep(4000);
    goMineLumbridge();
    mine();
    console.log('Finished');
    
}

function goMineLumbridge() {
    robot.moveMouseSmooth(884, 563);
    robot.mouseClick();
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