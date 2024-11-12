import React from 'react';
import Container from '../layer/Container';
import Button from '../layer/Button';

export default function AppointmentForm({ className = '' }) {
  return (
    <div>
      <Container>
        <div className={`flex flex-col items-center justify-center py-10 ${className}`}>
          <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl">

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
              <select className="border border-[#32a877] rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#32a877] w-full">
                <option>Appointment Cleaning</option>
              </select>
              <input
                type="text"
                placeholder="Your Address"
                className="border border-[#32a877] rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#32a877] w-full"
              />
              <select className="border border-[#32a877] rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#32a877] w-full">
                <option>State</option>
              </select>
            </div>

  
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <select className="border border-[#32a877] rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#32a877] w-full">
                <option>Appointment Cleaning</option>
              </select>
              <input
                type="text"
                placeholder="Your Address"
                className="border border-[#32a877] rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#32a877] w-full"
              />
              <Button className="bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 transition duration-300 w-full sm:w-auto">
                Book Now
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
