import mongoose from 'mongoose';


const productSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String,
        default:"",
        maxLength:10000
    },
    price:{
        type:Number,
        default:-1
    },
    stock:{
        type:Number,
        default:-1
    },
    avgRating:{
        type:Number,
        default:4,
    },
    img:{
        type:String,
        default:"https://i.vietgiaitri.com/2021/8/30/eimi-fukada-tim-nguoi-song-thu-khien-fan-nam-nao-loan-thi-nhau-ung-tuyen-127-5995202.jpg"
    },
    status:{
        type:Boolean,
        required:true,
        default:false,
    },
    feedbackList:{
        type:[mongoose.Schema.Types.ObjectId],
        ref:'Feedback',
        default:[],
    },
    commentList:{
        type:[mongoose.Schema.Types.ObjectId],
        ref:'Comment',
        default:[],
    },
});


const Product=mongoose.model('Product',productSchema);
export default Product;