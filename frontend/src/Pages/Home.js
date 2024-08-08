import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Home = () => {

    const [products,setProducts] = useState([]);
    const [error , setError] = useState(null);
    useEffect( () => {
        getProducts();
    },[]);

    const getProducts = async () => {

        try{
           const response = await axios.get("http://localhost:3001/products");
           console.log(response.data.data);
           setProducts(response.data.data);
        }catch(err){
            setError(err);
        }
        
    }
    
    return (
        <>
            <div className='section' style={{ "marginTop": "50px" }}>
                <div className='container mt-20'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <h4 className='head'>Product List</h4>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-12'>
                            <table className="table table-bordered ">
                                <thead class="thead-dark">
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Product Title</th>
                                        <th scope="col">Description</th>
                                        <th scope="col">Price</th>
                                        <th scope='col' className='text-center'>Action</th>
                                    </tr>
                                </thead>
                                <tbody> 
                                    {
                                        products.map(product=>(
                                            <tr key={product.id}>
                                                <td>{product.id}</td>
                                                <td>{product.product_name}</td>
                                                <td>{product.product_description}</td>
                                                <td className='text-right'>$ {product.product_price.toFixed(2)}</td>
                                                <td className='text-center'>
                                                    <button className='btn btn-success btn-sm'>Edit</button>
                                                    &nbsp;&nbsp;
                                                    <button className='btn btn-danger btn-sm'>Delete</button>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home