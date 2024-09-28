
#include <stdio.h>

int main() {
    int side1 = 30;
    int side2 = 30;
    int side3 = 30;
    if(side1==side2 && side2==side3){
        printf("equilateral triangle");
    }else if(side1==side2 || side1==side3 || side2==side3){
        printf("isoceles triangle");
    }else{
        printf("scalene triangle");
    }
    return 0;
}