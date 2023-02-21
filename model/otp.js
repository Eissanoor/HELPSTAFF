const mongoose = require("mongoose");


const empoleeSchema = new mongoose.Schema({
  //
 
  email: {
    type: String,
  },
    code: String,
 expireIn:Number
});
/////colletion
const otp = new mongoose.model("changePasswordOtp", empoleeSchema);

module.exports = otp;
