const mongoose = require('mongoose');
//const { String } = require('mongoose/lib/error/messages');


const transectionSchema = new  mongoose.Schema(
    {
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref: "User"
    },
    amount: {
        type: Number,
        required: [true, "amount is required"],
      },
      type: {
        type: String,
        required: [true, "type is required"],
      },
      category: {
        type: String,
        requires: [true, "cat is required"],
      },
      description: {
        type: String,
        required: [true, "desc is required"],
      },
      date: {
        type: Date,
        required: [true, "data is required"],
      },
    
},{
    timestamps:true,
});
const transectionModel = mongoose.model("transections", transectionSchema);
module.exports = transectionModel;