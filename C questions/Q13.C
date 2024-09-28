

#include <stdio.h>

int main() {
    int arr[] = {1, 2, 3, 4, 5};  
    int len = sizeof(arr)/sizeof(arr[0]);  
    int number_to_find = 3;  
    int found = 0;  

    for (int i = 0; i < len; i++) {
        if (arr[i] == number_to_find) {
            found = 1;  
            break;  
        }
    }
    if (found) {
        printf("true\n");
    } else {
        printf("false\n");
    }

    return 0;
}

