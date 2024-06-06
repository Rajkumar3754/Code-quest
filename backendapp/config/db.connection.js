const mongoose = require('mongoose');

const connectdb = async () => {
    try {
        const connection = await mongoose.connect(process.env.CONNECTIONSTRING, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Database connected:", connection.connection.host, connection.connection.name);
    } catch (err) {
        console.error("Database connection error:", err);
        process.exit(1);
    }
};

module.exports = connectdb;
