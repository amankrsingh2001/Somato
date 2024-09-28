import mongoose from "mongoose";

export const connectdb = async () =>{
    await mongoose.connect(process.env.DB_URL)
    .then(()=>console.log("DB connected"))
    .catch((e)=>(console.log("Error in db connection",e)))
   
}