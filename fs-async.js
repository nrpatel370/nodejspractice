const {readFile, writeFile} = require('fs')

readFile('./content/first.txt','utf8', (err,result)=>{
    if(err){
        console.log(error)
        return;
    }

    const first = result;
    readFile('./content/second.txt', 'utf8', (err,result)=>{
        if(err){
            console.log(error)
            return;
        }
        console.log(result)
    })
    
    const second = result
    writeFile('./content/result-sync.txt', 'here is result',(err,result)=>{
        if(err){
            console.log(error)
            return;
        }
        console.log(result)
    })
})