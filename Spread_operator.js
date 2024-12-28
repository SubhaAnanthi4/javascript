//spread operator (...) when i say b=a the value of a is passed to b...but if i say b=a in case of arrays
// the address of first element of a is stored in b.. If i try to change the value in b it changes the value in b also...
//Spread operator helps by not changing the value in array a.
//spread in array    ===>   spread the values in array or object 
 let a=[1, 2, 3, 4, 5];
 let x=[5, 6, 7, 8, 9];
 let b=[...a,...x];
 //console.log(b);
 
 //spread in object
 let bd={
    name:"subha",
    age:"20",
    class:"csd",
    college:"kec",
}
ads={...bd}
ads.name="sudha";
console.log(bd)
console.log(ads)

//rest operator ==> combine the  values inr to array or object 

function restoperator(...values)
{
      console.log(values)    //(x, ...values) --> (1,   (2,3,4,5,6))   (x,y,...values)  ==> (1, 2, (3,4,5,6))    (...values, x) ==> error            //
}
restoperator(1, 2, 3, 4, 5, 6);


function obs(...value)
{
    console.log(value);     //console.log(value[2]);
}

let ab={
    name:"subha",
    age:"20",
    class:"csd",
    college:"kec",
}
obs("subha","20","csd","kec");
obs(ab);



//Deconstructing operator
let m=[1, 2, 3, 4, 5];
let [d, c, z, ...y]=m;
console.log(d)
console.log(z)
console.log(y)


 let cd={
   name:"subha",
    age:"20",
     class:"csd",
     college:"kec",
 }
 let {name, age, ...s}=cd;
 console.log(name)
 console.log(age)
 console.log(s)