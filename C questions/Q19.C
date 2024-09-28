

#include <stdio.h>

int main() {
    int arr[5] = {1, 2, 3, 4, 5};
    int len= sizeof(arr)/sizeof(arr[0]);
    int count=1;
    for (int i = 0; i < len - 1; i++) {
        if (arr[i] > arr[i + 1]) {
           count=count+1;
        }
    }
     if (count>1){
        printf("false");
     } else  {
        printf("true");
     }
}