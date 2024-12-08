const AsyncHandler=(refreshHeader)=>{
    return (req,res,next)=>{
        Promise.resolve(refreshHeader(req,res,next)).catch((err)=>{next(err)})
    }
}

export {AsyncHandler};