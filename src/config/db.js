const mongoose= require('mongoose');
console.log(process.env.MONGO_URI)
mongoose.connect(process.env.MONGO_URI,{
}).then(()=>{
    console.log("connection successful");
}).catch((error)=>{
    console.log(" No connection ",error);

})



