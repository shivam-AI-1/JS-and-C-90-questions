


#include <stdio.h>
int main(){
int age=16;
if(age<13){
    printf("child");
}
else if(age>=13 && age<=19){
    printf("Teenager");
}
else if(age>=20 && age<=59){
    printf("Adult");
}
else if(age>=60){
    printf("Senior");
}
}
