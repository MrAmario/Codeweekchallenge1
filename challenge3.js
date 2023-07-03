//function salary(basic){
    function payee(basic){
        let netSalary= Number
        if(basic<= 24000){
            //getting the ampount to be taxed
            let afterTaxSalary=basic- (basic * 0.1)
            //subtracting the NHIF from the basic salary together with the taxed amount.
            if(basic<=5999){
                netSalary = afterTaxSalary- 150;

            }else if(basic<=7999){

                netSalary =afterTaxSalary - 300;

            }else if(basic<=11999){
                netSalary =afterTaxSalary - 400;

            }else if(basic<=14999){
                netSalary =afterTaxSalary - 500;

            }else if(basic<=19999){
                netSalary =afterTaxSalary - 600;
            
            }else if(basic<=24999){
                netSalary =afterTaxSalary - 750;
            }

            return console.log(`Your NET salary for a gross salary of ${basic} is ${netSalary}`)
            console.log(afterTaxSalary)
        }else if(basic> 24001 && basic<32333){
            //getting the ampount to be taxed
            let afterTaxSalary=basic -(basic * 0.25)
            //subtracting the NHIF from the basic salary together with the taxed amount.
            if(basic<=24999){
                netSalary = afterTaxSalary- 750;

            }else if(basic<=29999){

                netSalary =afterTaxSalary - 850;
            }else if(basic<=34999){
                netSalary = afterTaxSalary - 900;
            }
            return console.log(`Your NET salary for a gross salary of ${basic} is ${netSalary}`)

            console.log(afterTaxSalary)
        }else if(basic > 32333){
            //getting the ampount to be taxed
            let afterTaxSalary=basic - (basic * 0.3)
            //subtracting the NHIF from the basic salary together with the taxed amount.
            if (basic<=34999){
                netSalary = afterTaxSalary - 900;

            }else if(basic<=39999){
                netSalary = afterTaxSalary - 950;

            }else if(basic<=44999){
                netSalary = afterTaxSalary - 1000;

            }else if(basic<=49999){
                netSalary = afterTaxSalary - 1100;

            }else if(basic<=59999){
                netSalary = afterTaxSalary - 1200;

            }else if(basic<=69999){
                netSalary = afterTaxSalary - 1300;

            }else if(basic<=79999){
                netSalary = afterTaxSalary - 1400;

            }else if(basic<=89999){
                netSalary = afterTaxSalary - 1500;

            }else if(basic<=99999){
                netSalary = afterTaxSalary - 1600;

            }else if(basic>100000){
                netSalary = afterTaxSalary - 1700;

            }
            return console.log(`Your NET salary for a gross salary of ${basic} is ${netSalary}`)

            console.log(afterTaxSalary)
        }
        //a return with a response in it as well.
        return console.log(`Your NET salary for a gross salary of ${basic} is ${netSalary}`)
    }

 
payee(24000);