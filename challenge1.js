function grade(marks){
    //uses switch to check the grade gotten systematically.
    switch (true){
        case marks<40:
            return console.log("E");
        case marks<50:
            return console.log("D");
        case marks<60:
            return console.log("C");
        case marks<80:
            return console.log("B");
        case marks<101:
            return console.log("A");        
    }
}
console.log(grade(77));