#include <stdio.h>

int main() {
 int arr[]={1,2,3,4,5};
 int even=0;
 int odd=0;
 int len = sizeof(arr)/sizeof(arr[0]);
 for(int i=0;i<len;i++){
     if(arr[i]%2==0){
         even=even+1;
     }else{
         odd=odd+1;
     }
 }
printf("even:%d\n ",even);
printf("odd:%d",odd);
}


