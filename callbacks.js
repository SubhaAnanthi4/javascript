//callbacks
function dog()//(cat)                      if i  give dog  then cat with settimeout cat prints first but i want dog as first so i pass cat function as parameter to dog function so both prints after 2 seconds
{
    setTimeout(()=>{
    console.log("JACK the dog");
    //cat();
    },2000);
}
 function cat()
 {
    console.log("ROSE the cat");
 }
//  dog()      first dog prints then cat
//  cat()
dog(cat)



function lunch(home)
{
   // setTimeout(()=>{
        console.log("Going for lunch");
        home();
   // },2000);
   
}
function attendance(lunch)
{
    //setTimeout(()=>{
        console.log("Appearing for attendance");
        lunch(home);
    //},2000);
    
}
function home()
{
    console.log("Going to Home");
}


attendance(lunch);

//callback hell
attendance(()=>{
    lunch(()=>{
        home(()=>{
            console.log("day completed");
        })
    })
})