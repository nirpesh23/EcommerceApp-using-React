import React, { useState } from 'react';
import Axios from 'axios';


const AddProducts = () => {

    const [name, setname] = useState("")
    const [description, setdescription] = useState("")
    const [price, setprice] = useState(0)

    const createProduct = () => {
        Axios
            .post("http://localhost:5000/api/v1/products", {name, description, price})
            .then(()=>{ alert("product added") });
            setname("") //two way binding for forms. This will make the input field empty 
            setdescription("")
            setprice(0)
    }

    return(
    <div>
        <h3>Add Products</h3>
        <form onSubmit={createProduct} className="container margin-auto">
            <div className='form-group margin-auto'>
                <label>Name:</label>
                <input className='form-control' type="text" value={name} placeholder='name...' onChange={(event)=>{setname(event.target.value)}}/>
            </div>
            <div className='form-group'>
                <label>Description:</label>
                <input className='form-control' type="text" value={description} placeholder='description...' onChange={(event)=>{ setdescription(event.target.value) }}/>
            </div>
            <div className='form-group'>
                <label>Price:</label>
                <input className='form-control' type='text' value={price} placeholder='price...' onChange={(event)=> {setprice(event.target.value)}}/>
            </div>
            <div className='form-group'>
                <input className='btn btn-primary' type="submit" value="Add" />
            </div>
        </form>
    </div>
    )
}

export default AddProducts;

