
let str1="Hello";
let str2=str1;
let count =-1;
for(i=0;i<str1.length;i++){
    if(str1[i]==str2[i+1]){
       count=i;
}
}
console.log(count);