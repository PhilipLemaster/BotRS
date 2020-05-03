const robot = require('robotjs');

module.exports = {
    sleep: function(ms) {
        Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
    },
    
    goHome: function() {
        robot.keyTap('left');
        robot.keyTap('left');
        robot.keyTap('down');
        robot.keyTap('down');
        robot.moveMouseSmooth(1608, 1020);
        robot.mouseClick();
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
        robot.keyTap('left');
        robot.keyTap('left');
        robot.keyTap('down');
        robot.keyTap('down');
        robot.moveMouseSmooth(1761, 45);
        robot.mouseClick();
    },

    setZoom: function() {
        this.sleep(2000);
        robot.moveMouseSmooth(1608, 1020);
        robot.mouseClick();
        robot.moveMouseSmooth(1838, 1022);
        robot.mouseClick();
        robot.moveMouseSmooth(1785, 805);
        robot.mouseToggle("down");
        robot.dragMouse(1833, 804);
        robot.mouseToggle("up");

    },

    emptyInventory: function() {
        // 1st Row
        this.sleep(2000);
        robot.moveMouseSmooth(1755, 760);
        robot.mouseClick("right");
        robot.moveMouseSmooth(1755, 799);
        robot.mouseClick();
        this.sleep(1000);
        robot.moveMouseSmooth(1796, 760);
        robot.mouseClick("right");
        robot.moveMouseSmooth(1796, 799);
        robot.mouseClick();
        this.sleep(1000);
        robot.moveMouseSmooth(1839, 760);
        robot.mouseClick("right");
        robot.moveMouseSmooth(1839, 799);
        robot.mouseClick();
        this.sleep(1000);
        robot.moveMouseSmooth(1880, 760);
        robot.mouseClick("right");
        robot.moveMouseSmooth(1880, 799);
        robot.mouseClick();
        this.sleep(1000);
        // 2nd Row
        robot.moveMouseSmooth(1755, 795);
        robot.mouseClick("right");
        robot.moveMouseSmooth(1755, 834);
        robot.mouseClick();
        this.sleep(1000);
        robot.moveMouseSmooth(1796, 795);
        robot.mouseClick("right");
        robot.moveMouseSmooth(1796, 834);
        robot.mouseClick();
        this.sleep(1000);
        robot.moveMouseSmooth(1839, 795);
        robot.mouseClick("right");
        robot.moveMouseSmooth(1839, 834);
        robot.mouseClick();
        this.sleep(1000);
        robot.moveMouseSmooth(1880, 795);
        robot.mouseClick("right");
        robot.moveMouseSmooth(1880, 834);
        robot.mouseClick();
        this.sleep(1000);
        // 3rd Row
        robot.moveMouseSmooth(1755, 831);
        robot.mouseClick("right");
        robot.moveMouseSmooth(1755, 870);
        robot.mouseClick();
        this.sleep(1000);
        robot.moveMouseSmooth(1796, 831);
        robot.mouseClick("right");
        robot.moveMouseSmooth(1796, 870);
        robot.mouseClick();
        this.sleep(1000);
        robot.moveMouseSmooth(1839, 831);
        robot.mouseClick("right");
        robot.moveMouseSmooth(1839, 870);
        robot.mouseClick();
        this.sleep(1000);
        robot.moveMouseSmooth(1880, 831);
        robot.mouseClick("right");
        robot.moveMouseSmooth(1880, 870);
        robot.mouseClick();
        this.sleep(1000);
        // 4th Row
        robot.moveMouseSmooth(1755, 868);
        robot.mouseClick("right");
        robot.moveMouseSmooth(1755, 907);
        robot.mouseClick();
        this.sleep(1000);
        robot.moveMouseSmooth(1796, 868);
        robot.mouseClick("right");
        robot.moveMouseSmooth(1796, 907);
        robot.mouseClick();
        this.sleep(1000);
        robot.moveMouseSmooth(1839, 868);
        robot.mouseClick("right");
        robot.moveMouseSmooth(1839, 907);
        robot.mouseClick();
        this.sleep(1000);
        robot.moveMouseSmooth(1880, 868);
        robot.mouseClick("right");
        robot.moveMouseSmooth(1880, 907);
        robot.mouseClick();
        this.sleep(1000);
        // 5th Row
        robot.moveMouseSmooth(1755, 904);
        robot.mouseClick("right");
        robot.moveMouseSmooth(1755, 943);
        robot.mouseClick();
        this.sleep(1000);
        robot.moveMouseSmooth(1796, 904);
        robot.mouseClick("right");
        robot.moveMouseSmooth(1796, 943);
        robot.mouseClick();
        this.sleep(1000);
        robot.moveMouseSmooth(1839, 904);
        robot.mouseClick("right");
        robot.moveMouseSmooth(1839, 943);
        robot.mouseClick();
        this.sleep(1000);
        robot.moveMouseSmooth(1880, 904);
        robot.mouseClick("right");
        robot.moveMouseSmooth(1880, 943);
        robot.mouseClick();
        this.sleep(1000);
        // 6th Row
        robot.moveMouseSmooth(1755, 940);
        robot.mouseClick("right");
        robot.moveMouseSmooth(1755, 979);
        robot.mouseClick();
        this.sleep(1000);
        robot.moveMouseSmooth(1796, 940);
        robot.mouseClick("right");
        robot.moveMouseSmooth(1796, 979);
        robot.mouseClick();
        this.sleep(1000);
        robot.moveMouseSmooth(1839, 940);
        robot.mouseClick("right");
        robot.moveMouseSmooth(1839, 979);
        robot.mouseClick();
        this.sleep(1000);
        robot.moveMouseSmooth(1880, 940);
        robot.mouseClick("right");
        robot.moveMouseSmooth(1880, 979);
        robot.mouseClick();
        this.sleep(1000);
        // 7th (last) Row
        robot.moveMouseSmooth(1755, 976);
        robot.mouseClick("right");
        robot.moveMouseSmooth(1755, 1015);
        robot.mouseClick();
        this.sleep(1000);
        robot.moveMouseSmooth(1796, 976);
        robot.mouseClick("right");
        robot.moveMouseSmooth(1796, 1015);
        robot.mouseClick();
        this.sleep(1000);
        robot.moveMouseSmooth(1839, 976);
        robot.mouseClick("right");
        robot.moveMouseSmooth(1839, 1015);
        robot.mouseClick();
        this.sleep(1000);
        robot.moveMouseSmooth(1880, 976);
        robot.mouseClick("right");
        robot.moveMouseSmooth(1880, 1015);
        robot.mouseClick();
        this.sleep(1000);        
    }
    

    
};