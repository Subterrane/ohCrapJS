function ohCrap(string){
    try{
        console.error(string);
    }catch(err){
        console.error("[Error]" + err);
    }
}