


#include <stdio.h>

void removeDuplicates(int arr[], int n) {
    int temp[n]; 
    int j = 0;   
    for (int i = 0; i < n; i++) {
        int isDuplicate = 0;  

        for (int k = 0; k < j; k++) {
            if (arr[i] == temp[k]) {
                isDuplicate = 1; 
                break;
            }
        }
        if (!isDuplicate) {
            temp[j] = arr[i];
            j++;
        }
    }
    printf("Updated array without duplicates: ");
    for (int i = 0; i < j; i++) {
        printf("%d ", temp[i]);
    }
    printf("\n");
}
int main() {
    int arr[] = {1, 2, 2, 3, 4, 4, 5}; 
    int n = sizeof(arr) / sizeof(arr[0]);

    removeDuplicates(arr, n);  

    return 0;
}

