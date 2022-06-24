import ProductModel from "../models/products.js"
import UserModel from "../models/Users.js"

export const getProducts = async (req, res) => {
    try{
        await ProductModel.find({}).then((products)=>{
            res.send(products)
        })
    }catch(err){
        console.log(err)
        res.status(404).json({
            'message': err.message
        })
    }
}

export const getSingleProduct = async (req, res) => {
   await ProductModel.findById(req.params.id).then((product)=>{
    console.log(product)
    if(!product){
        res.status(404).json({success:false, 'message': 'Product not found'})
    }
        res.status(200).json({success: true, data:{product}})
   }).catch((err)=>{ console.log(err.message) })
}


export const addProducts = async (req, res) => {
    // const product_objBody = req.body.product;
    // const newId = product_objBody[product_objBody.length -1].id + 1;
    // const Product = Object.assign({id: newId}, product_objBody);
    const newProduct = ProductModel({ 
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
     });    
    await newProduct.save();
    res.status(201).json({
        newProduct,
    })
}

export const updateProduct = async (req, res)=>{
    try{
    await ProductModel.findByIdAndUpdate(req.params.id).then( async (product)=>{
        console.log(product)
        product.name = req.body.name,
        product.price = req.body.price,
        product.description = req.body.description

        await product.save()
            .then(()=>{ res.json({ success: true, product })})
        })
    }catch(err){
        res.status(400).json({success: false, 'message': err.message})
    }
}

export const deleteProduct = async (req, res) => {
    await ProductModel.findByIdAndDelete(req.params.id)  
        .then(()=>{ res.status(200).send() })
        .catch((e)=>{ res.send(e) })
}

