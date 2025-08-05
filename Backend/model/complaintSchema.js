import mongoose from 'mongoose';

const complaintSchema = new mongoose.Schema({
    title : {
        type : String ,
        required : true
    },
    description : {
        type : String , 
        required : true
    } , 
    category : {
        type : String ,
        enum : ["Garbage" , "Water" , "Electricity" ," Road", "Noise", "Other"],
        default : "Other"
    },
    submittedBy : {
        type : mongoose.Schema.Types.ObjectId ,
        ref : "User",
    },
    createdAt : {
        type : Date , 
        default : Date.now
    }
}, {timeStamps : true})

const complaintModel = mongoose.model("Complaint", complaintSchema);
export default complaintModel;