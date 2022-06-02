import React, { useState } from 'react';
import Axios from 'axios';


const AddProducts = () => {

    const [name, setname] = useState("")
    const [description, setdescription] = useState("")
    const [price, setprice] = useState(0)

    Axios.post("http://localhost:5000/ecommerce/addproducts", {name, description, price}).then({
        
    })

    return <div>
        <input type="text" placeholder='name...' onChange={(event)=>{setname(event.target.value)}}/>
        <input type="text" placeholder='description...' onChange={(event)=>{ setdescription(event.target.value) }}/>
        <input type="number" placeholder='price...' onChange={(event)=>{ (event)=> {setprice(event.target.value)} }}/>
    </div>
}

export default AddProducts;

