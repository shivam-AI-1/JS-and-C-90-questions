

#include <stdio.h>

int main() {
    int nums[] = {1, 2, 3, 4, 5};  
    int length = sizeof(nums) / sizeof(nums[0]); 
    
    printf("array: ");
    for (int i = 0; i < length - 1; i++) {
        printf("%d ", nums[i]);
    }
    
}


