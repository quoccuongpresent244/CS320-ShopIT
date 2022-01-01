import Comment from '../models/Comment.js';
import Product from '../models/Product.js';

export const getComment=async(req,res)=>{
    try {
        const comment=await Comment.findById({_id:req.params.id});
        if(comment){
            return res.status(200).json({success:true,message:'Finding comment successfully',comment});
        }
        else{
            return res.status(404).json({success:false,message:'Comment not found'});
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({success:false,message:'Internal server error'});

    }
}

export const createComment=async(req,res)=>{
    try {
        const {idProduct,content}=req.body;
        const idUser=req.user._id;
        console.log(req.user)
        const newComment=new Comment({idProduct,idUser,content});
        
        try {
            await newComment.save()
            console.log(newComment)
            const products=await Product.find({})
            // console.log(products)
            for(let product of products){
                // console.log(product._id)
                // console.log(newComment.idProduct)
                if(product._id.toString()==newComment.idProduct.toString()){
                    console.log(product)
                    product.commentList.push(newComment._id)
                    await product.save();
                    break;
                }
            }
        } catch (error) {
            console.log(error);
            return res.status(404).json({success:false,message:'Insert comment fail'});
        }
        return res.status(200).json({success:true,message:'Adding comment successfully',comment:newComment});

    } catch (error) {
        console.log(error);
        res.status(500).send({success:false,message:'Internal server error'});
    }
}

export const updateComment=async(req,res)=>{
    try {
        const comment=await Comment.findById(req.params.id);
        
        if(comment){
            const {idProduct,idUser,content}=req.body;
            comment.idProduct=idProduct||comment.idProduct;
            comment.idUser=idUser||comment.idUser;
            comment.content=content||comment.content;

            const updatedComment=await comment.save();
           
            return res.status(200).json({success:true,message:'Update comment successfully',comment:updatedComment});
        }
        else{
            return res.status(404).json({success:false,message:'Comment not found'});
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({success:false,message:'Internal server error'});
    }
}

export const deleteComment=async(req,res)=>{
    try {
        const comment=await Comment.findById(req.params.id);
        if(!comment){
            return res.status(404).json({success:false,message:'Comment not found'});
        }
        const deletedComment=await comment.remove();
        return res.status(200).json({success:true,message:'Delete comment successfully',comment:deletedComment});
    } catch (error) {
        console.log(error);
        res.status(500).send({success:false,message:'Internal server error'});
    }
}