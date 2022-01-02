import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: {
    type:String,
    required: true,
    unique: true,
  },
  password: {
    type:String,
    required: true,
  },
  name: {
    type:String,
    required: true,
    default: "anonymous user",
  },
  image: {
    type:String,
    required: true,
    default:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/640px-User_icon_2.svg.png",
  },
  age: {
    type:Number,
    min: 10,
    max: 100,
    default:18
  },
  gender: {
    type:Boolean,
    default: true,
  },
  isAdmin:{
      type:Boolean,
      default:false,
  },
  country:{
      type:String,
      required:true,
      default:"VietNam",
  },
  createdAt: {
    type:Number,
    default: new Date().getTime(),
  },
});

const User=mongoose.model('User',userSchema);
export default User;