const mongoose = require("mongoose");

async function connectToMongoDb(url) {
    try {
        return await mongoose.connect(url);
        console.log("MongoDb Connected");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}

module.exports = connectToMongoDb;