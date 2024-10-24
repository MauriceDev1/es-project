import mongoose, { Document, Schema } from "mongoose";

interface IUser extends Document {
    email: string;
    password: string;
    username: string; // Include username
    role: string;     // Include role
    createdAt: Date;
    updatedAt: Date;
}

const UserSchema: Schema = new Schema(
    {
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        username: { type: String, required: true }, // Ensure this is required
        role: { type: String, required: true },     // Ensure this is required
    },
    { timestamps: true }
);

const User = mongoose.models.User || mongoose.model<IUser>("User", UserSchema);

export default User;
