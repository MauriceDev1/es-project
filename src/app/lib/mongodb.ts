// lib/mongodb.ts
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI; // Your MongoDB connection string

// Ensure that the MONGODB_URI is defined
if (!uri) {
    throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

const options = {
    useNewUrlParser: true, // Use the new URL parser
    useUnifiedTopology: true, // Use the unified topology layer
};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

// Use a global variable to preserve the MongoClient across hot reloads in development mode
if (process.env.NODE_ENV === 'development') {
    if (!global._mongoClientPromise) {
        client = new MongoClient(uri, options);
        global._mongoClientPromise = client.connect();
    }
    clientPromise = global._mongoClientPromise;
} else {
    // In production mode, create a new client for each connection
    client = new MongoClient(uri, options);
    clientPromise = client.connect();
}

// Export the client promise to be used in other parts of your application
export default clientPromise;
