import React from 'react';

interface StudentCardProps {
  name: string;
  age: number;
  image: string;
  rollNumber: string;
  className: string;
}

const StudentCard: React.FC<StudentCardProps> = ({ name, age, image, rollNumber, className }) => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-md rounded-lg overflow-hidden border-2 border-gray-300 transform transition duration-500 hover:scale-105">
      <div className="relative h-48">
        <img  style={{ width: '190px', height: '220px' }} 
          className="object-cover mt-1 ml-2 border-2 border-gray-400" src={image} alt={name} />
      </div><br/>
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{name}</h2>
        <p className="text-gray-600 mb-1">Age: {age}</p>
        <p className="text-gray-600 mb-1">Roll Number: {rollNumber}</p>
        <p className="text-gray-600">Class: {className}</p>
      </div>
    </div>
  );
};

export default StudentCard;
