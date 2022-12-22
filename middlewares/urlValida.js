const {URL}= require("url");

const urlvalidar=(req,res,next)=>{
    try {
        const {origin}=req.body;
        const urlFrontend = new URL(origin);
        if(urlFrontend.origin!="null"){
            return next();
        }else{
            throw new Error("no valida 😒");
        };
        
    } catch (error) {
        console.log(error)
        return res.send("url no valida😒")
    };


};
module.exports= urlvalidar;