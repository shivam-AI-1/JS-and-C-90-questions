






#include <stdio.h>
int main(){
    char str[]="codinggita";
    int count=0;
    int length=sizeof(str)/sizeof(str[0])-1;
    for(int i=0;i<length;i++){
        if(str[i]=='a'){
            count=count+1;
        }
    }
    if(count>=1){
        printf("true");
    }
    else{
        printf("false");
    }
}
