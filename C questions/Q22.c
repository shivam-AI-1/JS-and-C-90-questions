




#include <stdio.h>

int main() {
    char str[] = "hello";
    int length = sizeof(str) / sizeof(str[0]) - 1; 

    printf("%d\n", length); 

    return 0;
}
