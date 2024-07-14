import mongoose from 'mongoose';

const employeeSchema = new mongoose.Schema({
    ename:{
        type : String,
        required : true
    },
    email:{
        type : String,
        required : true
    },
    salary:{
        type : Number,
        required : true
    },
    address:{
        type : String,
        required : true
    },
    category:{
        type : String,
        required : true
    },
    img:{
        type : String,
        required : true
    },


})

export default mongoose.model("Employee",employeeSchema);