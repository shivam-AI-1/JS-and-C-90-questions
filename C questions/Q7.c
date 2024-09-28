#include <stdio.h>

int main() {
    char light='R';
    if(light == 'R'){
    printf("stop");
}else if(light == 'Y'){
    printf("slow down");
}else if(light == 'G'){
    printf("go");
}else{
    printf("give proper color");
}

}