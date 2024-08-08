const express = require("express");
const bodyParser = require("body-parser");
const productRoutes = require("./routes/productRoutes");
const cors = require('cors')

const app = express();
const port = 3001;
app.use(cors())
app.use(bodyParser.json());

app.use("/products",productRoutes);

app.listen(port,() => {
    console.log("Server is running on " + port)
})