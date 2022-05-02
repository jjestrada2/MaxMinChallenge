
function maxMin(k, arr) {
    // Write your code here
    arr.sort((a,b)=>a-b);
    var min= arr[k-1]-arr[0];
    for(let i=1;i<=arr.length-k ; i++){
        var temp=arr[k-1+i]-arr[i];
        console.log(temp)
        if(temp<min){
             min=temp
        };
    }
    return min;
   

}
