import ProductModel from "../models/products.js"

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

export const updateProduct = (req, res)=>{
    ProductModel.findByIdAndUpdate(req.params.id).then( async (product)=>{
        product.name = req.body.name,
        product.price = req.body.price,
        product.description = req.body.description

        await product.save()
            .then(()=>{ res.json({ success: true, product })})
    })
}

export const deleteProduct = async (req, res) => {
    await ProductModel.findByIdAndDelete(req.params.id)  
        .then(()=>{ res.status(200).send() })
        .catch((e)=>{ res.send(e) })
}

