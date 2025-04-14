const mongoose= require("mongoose");
 const connectDb=()=>{
    mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log("db connected");
        
    } ).catch((err)=>{
        console.log("Error in databse connection: ",err);
        
    })
}

module.exports= connectDb