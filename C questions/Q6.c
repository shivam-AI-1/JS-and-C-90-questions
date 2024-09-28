#include <stdio.h>
#include <string.h> 

int main() {
    char admin[] = "admin";  
    int correct_password = 1234; 
    char username[20];  
    int password;  

    printf("Enter username: ");
    scanf("%s", username);
    printf("Enter password: ");
    scanf("%d", &password);
    if (strcmp(admin, username) == 0 && password == correct_password) {
        printf("Login successful\n");
    } else {
        printf("Login failed\n");
    }
    return 0;
}

