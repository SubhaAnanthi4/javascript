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
            let going = false;
            if(going)
                resolve("went")
            else 
                reject("hostel")
        })
}
async function finalDay() {
    try{
        let att=await attendance();
        console.log(att);
        const lun= await lunch();
        console.log(lun);
        const home = await go();
        console.log(home);
    }
    catch (error) {
        console.error(error)
    }
}
finalDay()