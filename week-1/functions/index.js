function isEven(num){
if(num%2==0){
    return true;
}
else
return false;
}
function array(arr){
    for(let i in  arr){
        if(arr[i]%1){
            console.log(arr[i]);
        }
    }
}
function test(arr,n){
    for(let i in arr){
        if(arr[i]==n){
            return true;
        }
    }
}
const calculator={
    add: function(a,b){
        returna+b;
    },
    sub: function(a,b){
        returna-b;
    }
}