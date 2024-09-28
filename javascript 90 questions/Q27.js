let str="document.js";
let arr=str.split('');
let length=arr.length;
for(i=0;i<length;i++){
    if(arr[i]=='.'){
            for(j=i+1;j<length;j++){
                console.log(arr[j]);
            }
        }
    }