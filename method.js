// let arr = [45,67,3,4,6,12,46,64];



// arr.shift();
// console.log(arr);

function run(){
    let arr = [45,67,3,4,6,12,46,64]
    // arr.shift();
    // arr.unshift(56)
    //delete arr [3]
    arr.splice(0,3,3,3)
    let arr1 = ['arpan','semon','lareb','abhay','shivansh']
    arr1.sort();
    arr.sort(function(a,b){return b-a})
    let answer = arr.reduce(function(a,b){return a + b})
    console.log(answer);
    console.log(arr1);
    console.log(arr);

    document.querySelector('#box').innerHTML = arr;

}