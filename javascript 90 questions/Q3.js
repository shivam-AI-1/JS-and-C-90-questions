

function check_triangle(side1,side2,side3){
    if(side1==side2 && side2==side3){
        console.log("equilateral triangle")
    }else if(side1==side2 || side1==side3 || side2==side3){
        console.log("isoceles triangle")
    }else{
        console.log("scalene triangle")
    }

}

check_triangle(2,2,3);