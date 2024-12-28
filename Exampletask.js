
//var a="attendance"
function process(name,callback)
{
    setTimeout(()=>{
    console.log(`File ${name} is being processed.`)
    console.log(`File ${name} is getting downloaded.`)
    callback();
    },2000);
}

function complete()
{
    setTimeout(()=>{
        console.log('Download complete.')
        
    },4000);
    
    
}



process("attendance",complete )