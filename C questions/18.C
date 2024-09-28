
#include <stdio.h>

int main() {
    int arr[] = {10, 20, 30, 40, 50};
    int len = sizeof(arr)/sizeof(arr[0]);
    for (int i = 0; i < len; i++) {
    if (i % 2 == 0) {  
        printf("even places are %d\n",arr[i]); 
    }
    }
}