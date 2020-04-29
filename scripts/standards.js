const robot = require('robotjs');

module.exports = {
    sleep: function(ms) {
        Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
    },
    
    goHome: function() {
        robot.moveMouseSmooth(1706, 1020);
        robot.mouseClick();
        this.sleep(1000);
        robot.moveMouseSmooth(1740, 747);
        robot.mouseClick();
        this.sleep(20000);
    },
    
    speedUp: function() {
        pixColor = String(robot.getPixelColor(1760, 156));
        console.log(pixColor);
        // active -- ecda67
        if (pixColor === 'ecda67') {
            console.log('You already running boi');
        }
        // inactive -- 8fd6239
        else if (pixColor === '8f6239') {
            console.log('Preparing to run')
            robot.moveMouseSmooth(1758, 152);
            robot.mouseClick();
            this.sleep(2000);
        }
    },

    slowDown: function() {
        pixColor = String(robot.getPixelColor(1760, 156));
        console.log(pixColor);
        // active -- ecda67
        if (pixColor === 'ecda67') {
            console.log('Preparing to walk');
            robot.moveMouseSmooth(1758, 152);
            robot.mouseClick();
            this.sleep(2000);
        }
        // inactive -- 8fd6239
        else if (pixColor === '8f6239') {
            console.log('You\'re already walking')
        }
    },
    
    centerScreen: function() {
        robot.moveMouseSmooth(1761, 45);
        robot.mouseClick();
    },

    setZoom: function() {
        this.sleep(2000)
        robot.moveMouseSmooth(1838, 1022);
        robot.mouseClick();
        robot.moveMouseSmooth(1785, 805);
        robot.mouseToggle("down");
        robot.dragMouse(1833, 804);
        robot.mouseToggle("up");

    }
};