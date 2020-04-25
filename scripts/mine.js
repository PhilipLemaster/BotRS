const robot = require('robotjs');
const stand = require('./standards');

function main() {
    console.log('Initializing...');
    stand.sleep(4000);
    mine();
    console.log('Finished');
    
}

function mine() {
    robot.moveMouseSmooth(857, 575);
    robot.mouseClick();
    repeatMine();

}

function repeatMine() {
    for (var i = 0; i < 12; i++) {
        pixColor = robot.getPixelColor(848, 557);

        if (pixColor === '645b5b') {
            stand.sleep(500);
            repeatMine();
        }

        else if (pixColor === '35302f') {
            stand.sleep(3000);
            robot.mouseClick();
            repeatMine();
        }
    }
    
    
}

main();