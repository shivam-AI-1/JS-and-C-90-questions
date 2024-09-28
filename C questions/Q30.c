

#include <stdio.h>

int main() {
    int n;       
    int evenSum = 0;   
    int oddSum = 0;     
    printf("Enter an integer: ");
    scanf("%d", &n);
    while (n != 0) {
        int digit = n % 10;

        if (digit % 2 == 0) {
            evenSum += digit;
        } else {
            oddSum += digit; 
        }
        n /= 10;
    }
    printf("Sum of even digits: %d\n", evenSum);
    printf("Sum of odd digits: %d\n", oddSum);

    return 0;
}
