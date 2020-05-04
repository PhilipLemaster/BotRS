const robot = require('robotjs');
const stand = require('./standards');

module.exports = {
    
main: function() {
    console.log('Initializing...');
    stand.sleep(4000);
    stand.centerScreen();
    stand.speedUp();
    this.goFish();
    console.log('Finished'); 
},

goFish: function() {
    robot.moveMouseSmooth(1897, 73);
    robot.mouseClick();
    stand.sleep(7000);
    robot.moveMouseSmooth(1913, 107);
    robot.mouseClick();
    stand.sleep(7000);
    robot.moveMouseSmooth(1903, 101);
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
    this.checkFish0();
},

setScout1: function() {
    robot.moveMouseSmooth(1806, 72);
    robot.mouseClick();
    stand.sleep(7000);
},

setScout2: function() {
    robot.moveMouseSmooth(1871, 143);
    robot.mouseClick();
    stand.sleep(7000);
},

checkFish0: function() {
    robot.moveMouseSmooth(819, 863);
    robot.mouseClick();
    stand.sleep(100);
    checkColor = robot.getPixelColor(819, 863);
    console.log(checkColor);
    runescapeColor = robot.getPixelColor(1748, 85);
    if (runescapeColor !== 'd83003') {
        console.log('Escaped'); 
        return; 
    }
    // inactive
    else if (checkColor === 'ffff00') {
        stand.sleep(2000);
        console.log('Onto the next one..');
        robot.moveMouseSmooth(1057, 409);
        robot.mouseClick();
        stand.sleep(5000);
        this.checkFish1();
    }
    // active
    else if (checkColor === 'ff0000') {
        console.log('Looks like we got some fish!');
        stand.sleep(60000);
        stand.emptyInventory();
        robot.moveMouseSmooth(1057, 409);
        robot.mouseClick();
        stand.sleep(3000);
        this.checkFish0();
    }
},

checkFish1: function() {
    robot.moveMouseSmooth(980, 1014);
    robot.mouseClick();
    stand.sleep(100);
    checkColor = robot.getPixelColor(980,1014);
    console.log(checkColor);
    runescapeColor = robot.getPixelColor(1748, 85);
    if (runescapeColor !== 'd83003') {
        console.log('Escaped'); 
        return; 
    }
    // inactive
    else if (checkColor === 'ffff00') {
        stand.sleep(2000);
        console.log('Onto the next one..');
        robot.moveMouseSmooth(843, 314);
        robot.mouseClick();
        stand.sleep(5000);
        this.setScout2();
        this.checkFish2();
    }
    // active
    else if (checkColor === 'ff0000') {
        console.log('Looks like we got some fish!');
        stand.sleep(60000);
        stand.emptyInventory();
        robot.moveMouseSmooth(843, 314);
        robot.mouseClick();
        stand.sleep(3000);
        this.checkFish1();
    }
},

checkFish2: function() {
    robot.moveMouseSmooth(858, 717);
    robot.mouseClick();
    stand.sleep(100);
    checkColor = robot.getPixelColor(858,717);
    runescapeColor = robot.getPixelColor(1748, 85);
    if (runescapeColor !== 'd83003') {
        console.log('Escaped'); 
        return; 
    }
    // inactive
    else if (checkColor === 'ffff00') {
        stand.sleep(2000);
        console.log('Onto the next one..');
        robot.moveMouseSmooth(1050, 584);
        robot.mouseClick();
        stand.sleep(5000);
        this.checkFish3();
    }
    // active
    else if (checkColor === 'ff0000') {
        console.log('Looks like we got some fish!');
        stand.sleep(60000);
        stand.emptyInventory();
        robot.moveMouseSmooth(1050, 584);
        robot.mouseClick();
        stand.sleep(3000);
        this.checkFish2();
    }

},

checkFish3: function() {
    robot.moveMouseSmooth(981, 724);
    robot.mouseClick();
    stand.sleep(100);
    checkColor = robot.getPixelColor(981,724);
    runescapeColor = robot.getPixelColor(1748, 85);
    if (runescapeColor !== 'd83003') {
        console.log('Escaped'); 
        return; 
    }
    // inactive
    else if (checkColor === 'ffff00') {
        stand.sleep(2000);
        console.log('Onto the next one..');
        this.checkFish4();
    }
    // active
    else if (checkColor === 'ff0000') {
        console.log('Looks like we got some fish!');
        stand.sleep(60000);
        stand.emptyInventory();
        robot.moveMouseSmooth(1050, 584);
        robot.mouseClick();
        stand.sleep(3000);
        this.checkFish3();
    }

},

checkFish4: function() {
    robot.moveMouseSmooth(1266, 948);
    robot.mouseClick();
    stand.sleep(100);
    fishActive = robot.getPixelColor(1266,948);
    runescapeColor = robot.getPixelColor(1748, 85);
    if (runescapeColor !== 'd83003') {
        console.log('Escaped'); 
        return; 
    }
    // inactive
    else if (fishActive === 'ffff00') {
        stand.sleep(2000);
        console.log('Onto the next one..');
        robot.moveMouseSmooth(679, 382);
        robot.mouseClick();
        stand.sleep(5000);
        this.setScout1();
        this.checkFish0();
    }
    // active
    else if (fishActive === 'ff0000') {
        console.log('Looks like we got some fish!');
        stand.sleep(60000);
        stand.emptyInventory();
        robot.moveMouseSmooth(679, 382);
        robot.mouseClick();
        stand.sleep(3000);
        this.checkFish4();
    }

},
}
