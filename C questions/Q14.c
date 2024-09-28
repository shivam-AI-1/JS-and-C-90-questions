

#include <stdio.h>

int main() {
    int arr[6] = {1, 2, 3, 4, 5};  
    int length = sizeof(arr) / sizeof(arr[0]);  
    int new_element = 6;  
   
    for (int i = length - 1; i > 0; i--) {
        arr[i] = arr[i - 1];
    }
    arr[0] = new_element;
    for (int i = 0; i < length; i++) {
        printf("%d ", arr[i]);
    }

}






