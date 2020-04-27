const robot = require('robotjs');
const stand = require('./standards');

check();

function check() {
    stand.sleep(2000);
    robot.scrollMouse(0, 10);
    pixColor = robot.getPixelColor(1760, 156);
    console.log(pixColor);
}

// active -- ecda67
// inactive -- 8fd6239