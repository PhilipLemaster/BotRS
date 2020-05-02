const robot = require('robotjs');
const stand = require('./standards');
const mine = require ('./mine');

stand.sleep(3000);
mine.main();
// stand.emptyInventory();


// stand.setZoom();


// tap();
// function tap() {
//     stand.sleep(4000);
//     robot.keyTap('left');
// }

// check();
// function check() {
//     stand.sleep(4000);
//     pixColor = robot.getPixelColor(910, 303);
//     console.log(pixColor);
// }



// active -- ecda67
// inactive -- 8fd6239