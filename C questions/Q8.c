

#include <stdio.h>

int main() {
    int arr[] = {1, 2, 3,4};  
    int sum = 0, count = 0; 
    int len = sizeof(arr) / sizeof(arr[0]); 
    for (int i = 0; i < len; i++) {
        sum += arr[i];  
        count++; 
    }
    float average = (float)sum / count;
    printf("The average is: %.2f\n", average);
    return 0;  
}

