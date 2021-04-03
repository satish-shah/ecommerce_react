import React, { useState, useEffect } from 'react'
import { commerce } from "./lib/commerce"

import { Products, Navbar } from "./components";


const app = () => {
    const [products, setProducts] = useState([]);

    //async is similar to .then and .catch 
    const fetchProducts = async () => {
        const { data } = await commerce.products.list();
        setProducts(data);

    }

    //useEffect is empty because it is only going to run at  the 
    //start of 
    useEffect(() => {

    }, [])

    return (
        <div>
            <Navbar />
            <Products />
        </div>
    )
}

export default app
