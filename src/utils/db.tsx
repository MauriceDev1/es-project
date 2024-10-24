import mongoose from "mongoose";

const connect = async (): Promise<void> => {
    // Check if there's already a connection
    if (mongoose.connections[0].readyState) return;

    try {
        // Connect to MongoDB with the specified options
        await mongoose.connect(process.env.MONGODB_URI!);
        console.log("MongoDB connected");
    } catch (error) {
        // Log the error message and rethrow a custom error
        console.error("Error connecting to MongoDB:", error);
        throw new Error("Error connecting to Mongoose");
    }
}

export default connect;
