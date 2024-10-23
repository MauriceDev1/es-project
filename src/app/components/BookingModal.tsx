"use client"
// components/BookingModal.tsx
import { useModal } from '../context/ModalContext';
import { useState } from 'react';

const BookingModal = () => {
  const { isOpen, closeModal } = useModal();
  const [bookingDetails, setBookingDetails] = useState({
    date: '',
    time: '',
    price: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setBookingDetails({
      ...bookingDetails,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div
      className={`fixed top-0 left-0 h-full w-1/2 bg-white shadow-lg transition-transform transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="p-8">
        <h2 className="text-2xl mb-4">Book an Appointment</h2>
        <button onClick={closeModal} className="absolute top-4 right-4 text-gray-500">
          X
        </button>

        <form>
          <div className="mb-4">
            <label htmlFor="date" className="block text-sm font-medium text-gray-700">
              Select Date:
            </label>
            <input
              type="date"
              name="date"
              id="date"
              value={bookingDetails.date}
              onChange={handleInputChange}
              className="mt-1 block w-full border-gray-300 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="time" className="block text-sm font-medium text-gray-700">
              Select Time:
            </label>
            <select
              name="time"
              id="time"
              value={bookingDetails.time}
              onChange={handleInputChange}
              className="mt-1 block w-full border-gray-300 rounded-md"
            >
              <option value="">Select a time</option>
              <option value="10:00">10:00 AM</option>
              <option value="12:00">12:00 PM</option>
              <option value="14:00">2:00 PM</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="price" className="block text-sm font-medium text-gray-700">
              Select Price:
            </label>
            <select
              name="price"
              id="price"
              value={bookingDetails.price}
              onChange={handleInputChange}
              className="mt-1 block w-full border-gray-300 rounded-md"
            >
              <option value="">Select a price</option>
              <option value="50">50 USD</option>
              <option value="100">100 USD</option>
              <option value="150">150 USD</option>
            </select>
          </div>

          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingModal;
