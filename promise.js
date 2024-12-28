//Promise :    instead of call back it is used
function attendance()
{
    return new Promise((resolve,reject)=>
    {
        let att = true;
        if(att)
            resolve("present")
        else 
            reject("absent")
    })
}
function lunch()
{
    return new Promise((resolve,reject)=>
        {
            let lun = true;
            if(lun)
                resolve("had lunch")
            else 
                reject("did not have lunch")
        })
}
function go()
{
    return new Promise((resolve,reject)=>
        {
            let going = true;
            if(going)
                resolve("went")
            else 
                reject("hostel")
        })
}
attendance().then((value)=>{console.log(value);return lunch()})
             .then((value)=>{console.log(value);return go()})
             .then((value)=>{console.log(value);})
             .catch((err)=> console.error(err))
