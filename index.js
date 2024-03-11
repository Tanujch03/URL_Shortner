const express = require("express");
const mongoose = require('mongoose');
const URL = require("./models/url")
const urlRoute = require("./routes/url")
const PORT = 8001;



mongoose.connect('mongodb://localhost:27017/short-url')
.then(()=>{console.log("MongoDb Connected")})

const app = express();

app.use(express.json())
app.use("/url",urlRoute)


app.get('/:shortid',async (req,res)=>{
    const shortid = req.params.shortId;
    const entry = await URL.findOneAndUpdate(
        {
            shortId,
        },
        {
            $push:{
            visitHistory: {
                timestamp:Date.now(),
            },
        }}
    );
    res.redirect(entry.redirectURL);
    
})
app.listen(PORT,()=>console.log("Server started"))