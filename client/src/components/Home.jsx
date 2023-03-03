import React, { useEffect, useState } from "react";
import Footer from './Footer'
import Header from './Header'
import ProductContainer from './ProductContainer'

export default function Home({ setEditId }) {
    
    const [products, setProducts] = useState([]);
    const [nM, setNM] = useState([]);

    // FOR EDITING
    

    // useEffect To Fetch All the products
    useEffect(() => {
        fetch("/api/products")
            .then((r) => r.json())
            .then((data) => {
                setProducts(data)
                console.log(data)
                setNM(data)
            });
    }, []);


    function addProduct(prd) {
        setProducts([...products, prd])
        setNM([...nM, prd])
    }

    function updateAfterDelete(idd) {
        const updated = products.filter((product) => product._id !== idd);
        setProducts(updated);
        setNM(updated);
      }


    return (
        <div>
            <Header setProducts={setProducts} nM={nM} addProduct={addProduct} />
            <ProductContainer products={products} updateAfterDelete={updateAfterDelete} setEditId={setEditId} />
            <Footer />
        </div >
    )
}
