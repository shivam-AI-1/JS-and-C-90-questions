

#include <stdio.h>
int main(){
    int arr[]={2,7,11,15};
    int target=9;
    int length=sizeof(arr)/sizeof(arr[0]);
    for(int i=0;i<length;i++){
        for(int j=i+1;j<length;j++){
            if(arr[i]+arr[j]==target){
                printf("%d\n",i);
                printf("%d",j);
            }
 }
}
}