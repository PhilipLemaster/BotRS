const robot = require('robotjs');
const stand = require('./standards');

function main() {
    console.log('Initializing...');
    stand.sleep(4000);
    stand.goHome();
    stand.centerScreen();
    stand.speedUp();
    goFishAlKharid();
    console.log('Finished'); 
}

function goFishAlKharid() {
    robot.moveMouseSmooth(1897, 73);
    robot.mouseClick();
    stand.sleep(7000);
    robot.moveMouseSmooth(1913, 107);
    robot.mouseClick();
    stand.sleep(7000);
    robot.moveMouseSmooth(1889, 101);
    robot.mouseClick();
    stand.sleep(7000);
    robot.moveMouseSmooth(971, 540);
    robot.mouseClick();
    stand.sleep(1000);
    robot.moveMouseSmooth(198, 988);
    robot.mouseClick();
    stand.sleep(1000);
    robot.moveMouseSmooth(304, 990);
    robot.mouseClick();
    stand.sleep(1000);
    robot.moveMouseSmooth(258, 981);
    robot.mouseClick();
    stand.sleep(1000);
    robot.moveMouseSmooth(198, 988);
    robot.mouseClick();
    stand.sleep(7000);
    robot.moveMouseSmooth(1893, 143);
    robot.mouseClick();
    stand.sleep(7000);
    robot.moveMouseSmooth(1839, 179);
    robot.mouseClick();
    stand.sleep(7000);
    robot.moveMouseSmooth(1835, 180);
    robot.mouseClick();
    stand.sleep(7000);
    robot.moveMouseSmooth(1824, 178);
    robot.mouseClick();
    stand.sleep(7000);
    robot.moveMouseSmooth(1803, 169);
    robot.mouseClick();
    stand.sleep(7000);

}