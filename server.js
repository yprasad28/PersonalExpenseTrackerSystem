const express = require('express');
const connectDb = require("./config/connectDb");



const dotenv = require('dotenv').config();

connectDb();
const app = express();
app.use(express.json())


const port = process.env.PORT || 5000;

app.use(express.json());

app.use("/api/transections", require("./routes/transectionRoutes"));



app.listen(port,()=> {
    console.log(`Server running at http://localhost:${port}`);
});