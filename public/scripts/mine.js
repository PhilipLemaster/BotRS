const robot = require('robotjs');
const stand = require('./standards');

let tinCount = 0;
let copperCount = 0;

module.exports = {
    main: function() {
        console.log('Initializing...');
        stand.sleep(6000);
        stand.centerScreen();
        stand.speedUp();
        this.goMine();
        this.mineTin();
        console.log('Finished');
    },

    goMine: function() {
        robot.moveMouseSmooth(1895, 144);
        robot.mouseClick();
        stand.sleep(7000);
        robot.moveMouseSmooth(1875, 168);
        robot.mouseClick();
        stand.sleep(7000);
        robot.moveMouseSmooth(1823, 178);
        robot.mouseClick();
        stand.sleep(7000);
        robot.moveMouseSmooth(1826, 180);
        robot.mouseClick();
        stand.sleep(7000);
        robot.moveMouseSmooth(1798, 152);
        robot.mouseClick();
        stand.sleep(7000);
    },

    goDeposit: function() {
        robot.moveMouseSmooth(1881, 48);
        robot.mouseClick();
        stand.sleep(7000);
    },
    
    mineTin: function() {
        robot.moveMouseSmooth(1608, 1020);
        robot.mouseClick();
        robot.moveMouseSmooth(616, 856);
        robot.mouseClick();
        stand.sleep(4000);
        this.repeatMineTin();
    
    },
    
    repeatMineTin: function() {
        pixColor = robot.getPixelColor(847, 549);
            if (pixColor === '645b5b' || pixColor === '605757'  || pixColor === '625959' || pixColor === '665d5d' || pixColor === '665d5d') {
                stand.sleep(500);
                this.repeatMineTin();
            }
    
            else if (tinCount === 11) {
                this.mineCopper();
            } 
    
            else if (pixColor === '35302f' || pixColor === '3e3838' || pixColor === '322e2e' || pixColor === '2a2626') {
                tinCount++;
                console.log(tinCount);
                stand.sleep(2500);
                robot.moveMouseSmooth(871, 573);
                robot.mouseClick();
                this.repeatMineTin();
            }
        
    },
    
    mineCopper: function() {
        robot.moveMouseSmooth(1304, 735);
        robot.mouseClick();
        stand.sleep(4000);
        this.repeatMineCopper();
    
    },
    
    repeatMineCopper: function() {
        pixColor = robot.getPixelColor(1121, 565);
            if (pixColor === '6b4626' || pixColor === '7e522c') {
                stand.sleep(500);
                this.repeatMineCopper();
            }
    
            else if (copperCount === 11) {
                stand.emptyInventory();
                robot.moveMouseSmooth(662, 467);
                robot.mouseClick();
                stand.sleep(4000);
                this.repeatMineTin();
            }
    
            else if (pixColor === '373131') {
                copperCount++;
                stand.sleep(2500);
                robot.moveMouseSmooth(1106, 583);
                robot.mouseClick();
                this.repeatMineCopper();
            } 
    },

    goSmith: function() {
        robot.moveMouseSmooth(1854, 34);
        robot.mouseClick();
        stand.sleep(7000);
        robot.moveMouseSmooth(1831, 32);
        robot.mouseClick();
        stand.sleep(7000);
        robot.moveMouseSmooth(1810, 35);
        robot.mouseClick();
        stand.sleep(7000);
        robot.moveMouseSmooth(1817, 36);
        robot.mouseClick();
        stand.sleep(7000);
        robot.moveMouseSmooth(1791, 49);
        robot.mouseClick();
        stand.sleep(7000);
        robot.moveMouseSmooth(1876, 75);
        robot.mouseClick();
        stand.sleep(5000);
        robot.moveMouseSmooth(973, 453);
        robot.mouseClick();
        stand.sleep(1000);
        robot.moveMouseSmooth(483, 905);
        robot.mouseClick();
        stand.sleep(1000);
        robot.moveMouseSmooth(39, 960);
        robot.mouseClick();
        stand.sleep(50000);
    }
    
}