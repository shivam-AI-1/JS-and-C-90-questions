

#include <stdio.h>


int main() {
    int arr[] = {3, 5, 9, 1,7};
    int i;
    int length = sizeof(arr) / sizeof(arr[0]);

    for (i = 0; i < length; i++) {
        if (arr[i] < 0) {
            printf("false"); 
        }else{
            printf("true");
        }
        return 0;
    }

}
