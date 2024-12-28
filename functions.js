// non parameterized  + without return function
// function apple()
// {
//     console.log("apple");
// }
// apple();

//arrow function
let apple=() => { 
    console.log("apple");
}
apple();

let grapes =() => "grapes";
console.log(grapes())


let banana = () =>  3+3;
    //{console.log("banana");
    //return 3+3;}

console.log(banana())
// non parameterized  + with return function
function orange()
{
    let a="orange";
    return a;    //or  return "orange";     array, object, numbers , boolean and anything can be returned....-> any datatype can be returned
}

let b=orange();
console.log(b);

//paramerized with return 
// function add(a, b)
// {
//     return a+b;
// }
 
// let c=10;
// let d= 11;
// let e= add(c, d);
// console.log(e);

//paramerized without return 
var f=0;
function add(a, b)
{
     f= a+b;
}
 
let c=10;
let d= 11;
 add(c, d);
console.log(f);



//parametirized arrow functions
let lotus= (a,b) => a+b
console.log(lotus(2,3));

let lily=(a,b)=>
{
    console.log(a+ " is a flower "+b+" is a fruit");
    //return 5;
}
let m="lily";
let n="apple";
lily(m,n);