/*
    Ստեղծել myMap մեթոդ Array-ի համարար , որը կաշխատի ինչպես map մեթոդը.
    [].map(fn) -ը կարողանանք գրել [].myMap(fn) -ի միջոցով ։
*/
//const arr = [5, 10, 15];
function myMap (arr, fun) {
    let arr2 = [];
    let i = 0;
    while (i < arr.length) {
       let a = fun(arr[i]);
        arr2.push(a);
       i = i +1;
    }
    return arr2;
}

let newArr = myMap([5, 10, 15], function(val){
    let b = val * 2;
    //console.log(b);
    return b;
});

console.log(newArr);

//Sargisi tarberaky

Array.prototype.myMap = function (fun){
    const arr = [];
    for(let i = 0; i < this.length; i++) {
        arr.push(fun(this[i], i, this));
    }
    return arr;
}
console.log([1,2,3].myMap(function(value, index, arr){
    return value * 2;
}));