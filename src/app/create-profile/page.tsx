"use client"

import { useState } from 'react';
import { db, storage } from '../config/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useDropzone } from 'react-dropzone';
import { v4 as uuidv4 } from 'uuid';
import Image from 'next/image';
import 'tailwindcss/tailwind.css';

const CreateProfile = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    stageName: '',
    email: '',
    cellphone: '',
    age: '',
    height: '',
    race: '',
    address: '',
    ratePerHour: '',
    ratePerHalfDay: '',
    ratePerFullDay: '',
    ratePerOvernight: '',
    accountNumber: '',
    bank: '',
  });
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [uploading, setUploading] = useState(false);

  const onDrop = (acceptedFiles: File[]) => {
    setImageFiles(prevFiles => [...prevFiles, ...acceptedFiles]);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.gif'],
    },
    multiple: true,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const uploadImagesToStorage = async () => {

  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setUploading(true);

  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Create Profile</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Form Fields */}
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
        </div>
        <div>
          <label className="block text-sm font-medium">Surname</label>
          <input type="text" name="surname" value={formData.surname} onChange={handleInputChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
        </div>
        <div>
          <label className="block text-sm font-medium">Stage Name</label>
          <input type="text" name="stageName" value={formData.stageName} onChange={handleInputChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
        </div>
        <div>
          <label className="block text-sm font-medium">Cellphone</label>
          <input type="text" name="cellphone" value={formData.cellphone} onChange={handleInputChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
        </div>
        <div>
          <label className="block text-sm font-medium">Age</label>
          <input type="number" name="age" value={formData.age} onChange={handleInputChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
        </div>
        <div>
          <label className="block text-sm font-medium">Height</label>
          <input type="text" name="height" value={formData.height} onChange={handleInputChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
        </div>
        <div>
          <label className="block text-sm font-medium">Race</label>
          <input type="text" name="race" value={formData.race} onChange={handleInputChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
        </div>
        <div>
          <label className="block text-sm font-medium">Address</label>
          <input type="text" name="address" value={formData.address} onChange={handleInputChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
        </div>
        <div>
          <label className="block text-sm font-medium">Rate per Hour</label>
          <input type="text" name="ratePerHour" value={formData.ratePerHour} onChange={handleInputChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
        </div>
        <div>
          <label className="block text-sm font-medium">Rate per Half Day</label>
          <input type="text" name="ratePerHalfDay" value={formData.ratePerHalfDay} onChange={handleInputChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
        </div>
        <div>
          <label className="block text-sm font-medium">Rate per Full Day</label>
          <input type="text" name="ratePerFullDay" value={formData.ratePerFullDay} onChange={handleInputChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
        </div>
        <div>
          <label className="block text-sm font-medium">Rate per Overnight</label>
          <input type="text" name="ratePerOvernight" value={formData.ratePerOvernight} onChange={handleInputChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
        </div>
        <div>
          <label className="block text-sm font-medium">Account Number</label>
          <input type="text" name="accountNumber" value={formData.accountNumber} onChange={handleInputChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
        </div>
        <div>
          <label className="block text-sm font-medium">Bank</label>
          <input type="text" name="bank" value={formData.bank} onChange={handleInputChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
        </div>

        {/* Drag and drop image uploader */}
        <div {...getRootProps()} className="border-2 border-dashed p-4 rounded-md text-center">
          <input {...getInputProps()} />
          <p>Drag and drop images here, or click to select them</p>
          {imageFiles.length > 0 && (
            <div className="mt-2 flex space-x-2">
              {imageFiles.map((file, index) => (
                <Image key={index} src={URL.createObjectURL(file)} alt={`Preview ${index + 1}`} width={100} height={100} />
              ))}
            </div>
          )}
        </div>

        <button
          type="submit"
          className={`w-full bg-blue-600 text-white p-2 rounded-md ${uploading ? 'opacity-50' : ''}`}
          disabled={uploading}
        >
          {uploading ? 'Uploading...' : 'Create Profile'}
        </button>
      </form>
    </div>
  );
};

export default CreateProfile;
