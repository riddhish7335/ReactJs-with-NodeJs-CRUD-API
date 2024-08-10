import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateProduct = () => {
    const { id } = useParams(); 
    const navigate = useNavigate();
    const [formData,setFormData] = useState({
        product_name:'',
        product_description:'',
        product_price:''
      });

    useEffect(() => {
        getProductData(id)
    },[])

    const handleFormData = (e) => {
        const { name , value } = e.target;
    
        setFormData({
          ...formData,
          [name] : value
        })
    
      }

    const handleSubmit = async (e) => {

        e.preventDefault();
       const response = await axios.put(`http://localhost:3001/products/update/${id}`,formData).
       then( response => {
        alert("Prodcut has been updated");
        navigate("/");
       }).
       catch( error => {
        alert(error)
       })
    }

    const getProductData = async (id) => {
       await axios.get(`http://localhost:3001/products/edit/${id}`).
       then( response => {
        setFormData(response.data) 
       }).catch ( error => {
        alert(error)
       })
    }

    return (
        <>
        <div className='section' style={{ "marginTop": "50px" }}>
        <div className='container mt-20'>
          <div className='row'>
            <div className='col-md-12'>
              <h4 className='head'>Update Product</h4>
            </div>
          </div>
          <div className='row' style={{"marginTop" : "35px"}}>
            <div className='col-md-6 offset-sm-3'>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label for="product_name">Product Name</label>
                  <input type="text" className="form-control" id="product_name"  placeholder="Enter product name" name="product_name" value={formData.product_name} onChange={handleFormData} />
                  
                </div>
                <div className="form-group">
                  <label for="product_description">Product Description</label>
                  <input type="text" className="form-control" id="product_description" placeholder="Product description" name="product_description" value={formData.product_description} onChange={handleFormData}/>
                </div>
                <div className="form-group">
                  <label for="product_description">Product Price</label>
                  <input type="number" className="form-control" id="product_price" placeholder="Product price" name="product_price" value={formData.product_price} onChange={handleFormData}/>
                </div>
                <button type="submit" className="btn btn-primary">Save</button>
              </form>
            </div>

          </div>
        </div>
      </div>
        </>

    )
}

export default UpdateProduct