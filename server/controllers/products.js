import ProductModel from "../models/products.js"

export const getProducts = (req, res, next) => {
    ProductModel.find({}, (err, product) => {
        if (err) {
            res.status(401).json({
                success: false,
                message: err.message
            })
        }else{
            res.status(200).json({
                status : 'success',
                results : product.length,
                data: {
                    product:product
                }
            })
        }
    })
}

export const addProducts = async (req, res) => {
    const product_objBody = req.body.product;
    // const newId = product_objBody[product_objBody.length -1].id + 1;
    // const Product = Object.assign({id: newId}, product_objBody);
    const newProduct = new ProductModel(product_objBody)    
    await newProduct.save();
    res.status(201).json({
        newProduct,
    })
}