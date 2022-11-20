const mongoose = require('mongoose');
const {Schema} = mongoose;
const FormSchema = new Schema({
    fullName:{
        type:String,
        required:true
    },
    regNumber:{
        type: Number,
        required:true,
        unique:true
    },
    mobileNumber:{
        type: Number,
        required:true
    },
    email:{
        type:String,
        required:true,
    },
    date:{
        type: Date,
        default:Date.now
    }
  });

  const User=mongoose.model('user',FormSchema);
//   User.createIndexes();
  module.exports=User;