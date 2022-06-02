import {useState, useEffect } from "react";
import Axios from 'axios';


const Products = () =>{
    const [listOfProducts, setlistOfProducts] = useState([])

    useEffect(() => {
        Axios.get("http://localhost:5000/posts/products").then((response) =>{
            setlistOfProducts(response.data);
        })
    }, [])

    return(
        <div>
            <div className="products">
                {listOfProducts.map((products) => {
                    return (
                        <div>
                            <h2>Title: {products.name}</h2>
                            <h3>Amount: {products.Amount}</h3>
                            <h4>Description: {products.Description}</h4>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default Products;