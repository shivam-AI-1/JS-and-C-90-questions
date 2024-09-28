

#include <stdio.h>
int main(){
    int arr[6]={1,2,3,4,5};
   int length=sizeof(arr)/sizeof(arr[0]);
    arr[5]=6;
    for(int i=0;i<length;i++){
        printf("%d",arr[i]);
}
}