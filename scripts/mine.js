const robot = require('robotjs');
const stand = require('./standards');

function main() {
    console.log('Initializing...');
    stand.sleep(4000);
    mineTin();
    console.log('Finished');
}

function mineTin() {
    robot.moveMouseSmooth(863, 576);
    robot.mouseClick();
    repeatMineTin();

}

let tinCount = 0;
let copperCount = 0;

function repeatMineTin() {
    pixColor = robot.getPixelColor(847, 549);
        if (pixColor === '645b5b' || pixColor === '605757'  || pixColor === '625959' || pixColor === '665d5d' || pixColor === '665d5d') {
            stand.sleep(500);
            repeatMineTin();
        }

        else if (tinCount === 12) {
            mineCopper();
        } 

        else if (pixColor === '35302f' || pixColor === '3e3838' || pixColor === '322e2e' || pixColor === '2a2626') {
            tinCount++;
            console.log(tinCount);
            stand.sleep(2500);
            robot.mouseClick();
            repeatMineTin();
        }
    
}

function mineCopper() {
    robot.moveMouseSmooth(1304, 735);
    robot.mouseClick();
    repeatMineCopper();

}

function repeatMineCopper() {
    stand.sleep(2000);
    pixColor = robot.getPixelColor(1108, 608);
        if (pixColor === '6b4626' || pixColor === '7e522c') {
            stand.sleep(500);
            repeatMineCopper();
        }

        else if (copperCount === 12) {
            goSmith();
        }

        else if (pixColor === '35302f' || pixColor === '3e3838' || pixColor === '322e2e' || pixColor === '2a2626') {
            stand.sleep(2500);
            robot.moveMouseSmooth(1106, 583);
            robot.mouseClick();
            repeatMineCopper();
        } 
}

main();