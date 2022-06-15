import mongoose from "mongoose";

const productsSchema = new mongoose.Schema({
    name   : {
            type:String, 
            required: [true, 'Please enter product name'],
            trim:true,
            maxlength: [100, 'Product name cannot exceed 100 characters']
             },

    Amount : {
            type: Number, 
            required:[true, "Please enter product's price"],
            default: 0.0,
            maxlength: [7, "Price cannot exceed 7 characters"]
             },

    Description : {
        type: String, 
        required:false, 
        trim:true
    },

    Ratings : { 
        type:Number, 
        required:false, 
        default:0, 
        maxlength:1},
    
    category: {
        type:String,
        required:[true, 'Please specify category for this product'],
        enum:{
            values:[
                'Electronics',
                'Clothing',
                'Smartphones',
                'Laptop',
                'Books',
                'Beauty/Health',
                'Sports',
                'Home',
                'Accessories'
            ],
            message: "Please select correct category"
        }
    },

    image : [
        {
            public_id : {
                type: String,
                required: true,
            },
            url: {
                type:String,
                required:true
            }
        }
    ],

    stock : {
        type:Number, 
        default:0,
        required: [true, 'Please specify stock for this product'],
        maxlength:[5, 'Length cannot exceed 5 characters']
    },

    numOfReviews : {
        type:Number,
        default:0,
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
});

const ProductModel = mongoose.model("Products", productsSchema);
export default ProductModel;