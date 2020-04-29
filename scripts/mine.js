const robot = require('robotjs');
const stand = require('./standards');

let tinCount = 0;
let copperCount = 0;

module.exports = {

    main: function() {
        console.log('Initializing...');
        stand.sleep(6000);
        this.mineTin();
        console.log('Finished');
    },
    
    mineTin: function() {
        robot.moveMouseSmooth(863, 576);
        robot.mouseClick();
        this.repeatMineTin();
    
    },
    
    repeatMineTin: function() {
        pixColor = robot.getPixelColor(847, 549);
            if (pixColor === '645b5b' || pixColor === '605757'  || pixColor === '625959' || pixColor === '665d5d' || pixColor === '665d5d') {
                stand.sleep(500);
                this.repeatMineTin();
            }
    
            else if (tinCount === 12) {
                this.mineCopper();
            } 
    
            else if (pixColor === '35302f' || pixColor === '3e3838' || pixColor === '322e2e' || pixColor === '2a2626') {
                tinCount++;
                console.log(tinCount);
                stand.sleep(2500);
                robot.mouseClick();
                this.repeatMineTin();
            }
        
    },
    
    mineCopper: function() {
        robot.moveMouseSmooth(1304, 735);
        robot.mouseClick();
        this.repeatMineCopper();
    
    },
    
    repeatMineCopper: function() {
        stand.sleep(2000);
        pixColor = robot.getPixelColor(1108, 608);
            if (pixColor === '6b4626' || pixColor === '7e522c') {
                stand.sleep(500);
                this.repeatMineCopper();
            }
    
            else if (copperCount === 12) {
                this.goDeposit();
            }
    
            else if (pixColor === '35302f' || pixColor === '3e3838' || pixColor === '322e2e' || pixColor === '2a2626') {
                stand.sleep(2500);
                robot.moveMouseSmooth(1106, 583);
                robot.mouseClick();
                this.repeatMineCopper();
            } 
    }
    
}