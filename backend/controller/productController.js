const Product = require("../model/products");


exports.getAllProducts = (req,res) => {

    Product.getAll( (err,products) => {
        if(err){
            res.status(500).send(err)
        }else{
            resData = {
                status:1,
                message:"Product data",
                data:products
            }
            res.json(resData);
        }
    })

}

exports.createProduct = (req,res) => {
    const { product_name , product_description , product_price} = req.body;

    
    if(product_name == ""){
        return res.status(400).json({ error: 'Enter product name.' });
    }

    if(product_description == ""){
        return res.status(400).json({ error: 'Enter product description.' });
    }

    if(product_price == ""){
        return res.status(400).json({ error: 'Enter product price.' });
    }

    const inserData = {
        "product_name" : req.body.product_name,
        "product_description" : req.body.product_description,
        "product_price" : req.body.product_price
    }

    Product.create(inserData, (err , results) => {
        if(err){
            res.status(500).json({ error: 'Oops, Something went wrong!' });
        }else{
            res.status(200).json({ success: 'Product has been added success' });            
        }
    })

}

exports.getProductsById = ( req, res) => {
    let id = req.params.id;
    Product.getProductsById(id, (err,results) => {
        if(err){
            return res.status(400).json({ error: 'Invalid id' });
        }else{
            return res.status(200).json(results);
        }
    })

}

exports.updateProduct = (req,res) => {

    let id = req.params.id;
   
    let updateData = {
        "product_name" : req.body.product_name,
        "product_description" : req.body.product_description,
        "product_price" : req.body.product_price
    }
    
    Product.update(updateData,id, async(err,results) => {
        
        if(err){
            res.status(500).send(err);     
        }else{
            let resData = {
                status:1,
                message:"Product has been updated successfully!",
                data:null
            }
            res.json(resData);
        }
    }); 
}     

exports.deleteProduct = (req,res) => {
    let id = req.params.id;

    Product.delete(id, (err,results) => {
        if(err){
            res.status(500).send(err)
        }else{
            let resData = {
                status:1,
                message:"Product has been deleted successfully!",
                data:null
            }
            res.json(resData);
        }
    })
}