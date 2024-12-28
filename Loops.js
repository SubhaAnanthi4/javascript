for(let a=1;a<=10;a++)
{
    console.log(a)
}
// for(;;)
//     {
//         console.log("hi")
//     }
let a=1;
for(console.log('a'); a<=3;console.log('b'))   // initialization executes only once.. then checks condition then statement, then increment decrement then condition and goes on...
{
	console.log('c');
	a++;
}
let b=1;
for( b=1;b<=10;b++);    
     console.log(a);

let c=1;
for( c=1;c<=10;c++)    
console.log("hi");
console.log(c);


//WHILE

let d=100;
while(d<=10)
{
    console.log(d)        // no error just condition is failed...............
}                          // no ouput just blank output

let e=100;
do
{
    console.log(e);
    e++;                         // no error just condition is failed...............
} while(e<=10)                    // prints 100 increments and then checks the conditions