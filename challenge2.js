function speedGovernor(speed){
    //checks to see if the speed is bellow the limit and returns a message.
    if (speed<70){
        return console.log("Ok");
    
    //speeds above the limit are to be taken into account and used to measure points of deduction.
    }else if(speed>70){
        limit=(speed-70)/5
        points=limit*1
        if(points<12){
            //message of the points to deducted after calculations
            return console.log("Points:2")
        }else if(points>12){
            //when the speed is too high,the driver is deemed unfit and unsafe to drive hense thier license is revoked.
            return console.log("License suspended");
        }else{
            return;
        }
    }else{
        return;
    }
}
console.log(speedGovernor(150));