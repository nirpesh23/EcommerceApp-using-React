import mongoose from "mongoose";

const productsSchema = new mongoose.Schema({
    name : {type:String, required: true},
    Amount : {type: Number, required:false},
    Description : {type: String, required:false},
    image : {type: String, required:false},
});

const ProductModel = mongoose.model("Products", productsSchema);
export default ProductModel;