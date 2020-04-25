const robot = require('robotjs');
const stand = require('./standards');

check();

function check() {
    sleep(2000);
    pixColor = robot.getPixelColor(1760, 156);
    console.log(pixColor);
}

// active -- ecda67
// inactive -- 8fd6239