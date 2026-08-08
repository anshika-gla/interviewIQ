import mongoose from "mongoose";

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);

        console.log("DataBase Connected");
        console.log("Connected Database:", mongoose.connection.name);

        const collections = await mongoose.connection.db.listCollections().toArray();
        console.log(collections);

    } catch (error) {
        console.log(error);
    }
};

export default connectDb;