import PostMessage from "../models/postMessage.js";
import UserModel from "../models/Users.js";
import ProductModel from "../models/products.js";

export const postfunc = async (req, res) => {
    try{
        res.send('working');
        // const postMessage = await PostMessage.find();
        // res.status(200).json(postMessage);
    } catch(error){
        // res.status(404).json({ message: error.message});
    }
}

export const createPost = (req, res) => {
    res.send('Post Creation');
}

export const getUsers = (req, res) => {
    try{
        users.find({}, (result)=>{
            res.status(200).json(result);
        })
    }catch(error){
        res.status(404).json({ message: error.message});
    }
}

export const createProducts = async (req, res) =>{
    const product_objBody = req.body;
    const newProduct = new ProductModel(product_objBody);
    await newProduct.save();

    res.json(product_objBody);
};

export const createUser = (req, res) => {
    console.log('users created');
    res.send('users created');
}

export const getProducts = (req, res) => {
    ProductModel.find({}, (err, result) =>{
        if(err){
            res.json(err);
        }else{
            res.json(result);
        }
    })
};





export const addToCart = (req,res) => {
    res.send('Item added to cart');
}



