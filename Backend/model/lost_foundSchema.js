import mongoose from "mongoose";


const lostOrfoundSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ["lost", "found"],
        
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    dateReported: {
        type: Date,
        default: Date.now
    },
    dateLostOrFound: {
        type: Date,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    reportedBy: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    }
}, { timestamps: true });

const lostOrFoundModel = mongoose.model("Lost_Found", lostOrfoundSchema);
export default lostOrFoundModel;