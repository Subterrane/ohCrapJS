function ohCrap(string){
    try{
        console.error(string);
    }catch(err){
        console.error("[Error]" + err);
    }
}

function ohDear(string){
    try{
        console.warn(string);
    }catch(err){
        console.warn("[Warn]" + err);
    }
}

function meh(string){
    try{
        console.log(string);
    }catch(err){
        console.log("[Log]" + err);
    }
}
