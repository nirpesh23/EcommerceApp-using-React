import React, { useState } from 'react';
import Axios from 'axios';


const AddProducts = () => {

    const [name, setname] = useState("")
    const [description, setdescription] = useState("")
    const [price, setprice] = useState(0)

    const createProduct = () => {
        Axios
            .post("http://localhost:5000/ecommerce/addproducts", {name, description, price})
            .then(()=>{ alert("product added") });
            setname("") //two way binding for forms. This will make the input field empty 
            setdescription("")
            setprice(0)
    }

    return <div>
        <form>
            <input type="text" value={name} placeholder='name...' onChange={(event)=>{setname(event.target.value)}}/>
            <input type="text" value={description} placeholder='description...' onChange={(event)=>{ setdescription(event.target.value) }}/>
            <input type="number" value={price} placeholder='price...' onChange={(event)=>{ (event)=> {setprice(event.target.value)} }}/>
            <button type='submit' onClick={createProduct}>Add Product</button>
        </form>
    </div>
}

export default AddProducts;

