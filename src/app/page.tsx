import type { NextPage } from 'next'
import StudentCard from './component/studentCard';

const Home: NextPage = () => {
  const students = [
    { 
      name: 'Zafar Sohail', 
      age: 28, 
      image: '/student.jpg', 
      rollNumber: '0091344', 
      className: 'Diploma' 
    },
    { 
      name: 'Zubair', 
      age: 20, 
      image: 'https://via.placeholder.com/150', 
      rollNumber: '1234567', 
      className: '11th Grade' 
    },
    { 
      name: 'Ali', 
      age: 18, 
      image: 'https://via.placeholder.com/150', 
      rollNumber: '0099123', 
      className: '12th Grade' 
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {students.map((student, index) => (
          <StudentCard
            key={index}
            name={student.name}
            age={student.age}
            image={student.image}
            rollNumber={student.rollNumber}
            className={student.className}
          />
        ))}
      </div>
    </div>
  )
}

export default Home;
