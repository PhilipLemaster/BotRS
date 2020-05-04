const robot = require('robotjs');
const stand = require('./standards');

let logCount = 0

module.exports = {
    main: function() {
        console.log('Initializing...');
        stand.sleep(6000);
        stand.setZoom();
        stand.centerScreen();
        stand.speedUp();
        this.goCut();
    },

    goCut: function() {
        robot.moveMouseSmooth(1842, 34);
        robot.mouseClick();
        stand.sleep(10000);
        robot.moveMouseSmooth(909, 148);
        robot.mouseClick();
        stand.sleep(10000);
        robot.moveMouseSmooth(1202, 292);
        robot.mouseClick();
        stand.sleep(12000);
        this.cutTree2();
    },

    cutTree1: function() {
        runescapeColor = robot.getPixelColor(1748, 85);
        if (runescapeColor !== 'd83003') {
            console.log('Escaped');
            return; 
        }

        else if (logCount === 20) {
            stand.emptyInventory();
        }

        robot.moveMouseSmooth(1202, 296);
        robot.mouseClick();
        stand.sleep(10000);
        logCount++;
        this.cutTree2();
    },

    cutTree2: function() {
        runescapeColor = robot.getPixelColor(1748, 85);
        if (runescapeColor !== 'd83003') {
            console.log('Escaped'); 
            return; 
        }

        else if (logCount === 20) {
            stand.emptyInventory();
        }

        robot.moveMouseSmooth(1543, 470);
        robot.mouseClick();
        stand.sleep(10000);
        logCount++;
        this.cutTree3();
    },

    cutTree3: function() {
        runescapeColor = robot.getPixelColor(1748, 85);
        if (runescapeColor !== 'd83003') {
            console.log('Escaped'); 
            return; 
        }

        else if (logCount === 20) {
            stand.emptyInventory();
        }

        robot.moveMouseSmooth(1799, 120);
        robot.mouseClick();
        stand.sleep(5000);
        robot.moveMouseSmooth(762, 506);
        robot.mouseClick();
        stand.sleep(10000);
        logCount++;
        robot.moveMouseSmooth(1392, 490);
        robot.mouseClick();
        this.cutTree1();
    }

    
}