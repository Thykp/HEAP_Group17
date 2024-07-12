import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

// Sections data
const sections = [
  { id: 1, title: 'Workout', path: '/workout' },
  { id: 2, title: 'Nutrition', path: '/nutrition' },
  { id: 3, title: 'Section 3', path: '/section3' },
  { id: 4, title: 'Section 4', path: '/section4' },
  { id: 5, title: 'Section 5', path: '/section5' },
  { id: 6, title: 'Section 6', path: '/section6' },
];

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  const { answers } = location.state || { answers: [] };  // Receive the state from Questions.jsx

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen bg-n-8 text-n-1">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 bg-n-7 text-white p-4 transition-transform duration-700 ease-in-out transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-color-1">WorkoutWise</h2>
          <button
            className="text-white focus:outline-none"
            onClick={toggleSidebar}
          >
            &times;
          </button>
        </div>
        <ul>
          {sections.map((section) => (
            <li key={section.id} className="cursor-pointer p-2 hover:bg-n-6">
              <Link to={section.path}>{section.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Hamburger Button */}
      <button
        className="fixed top-4 left-4 z-20 text-white bg-n-7 p-2 rounded focus:outline-none"
        onClick={toggleSidebar}
      >
        &#9776;
      </button>

      {/* Main Content */}
      <div className="flex-1 p-6 ml-16 transition-all duration-700 ease-in-out">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sections.map((section) => (
            <Link
              key={section.id}
              to={section.path}
              className="bg-n-7 p-4 rounded-lg shadow-lg hover:bg-n-6 transition-all duration-300 ease-in-out"
            >
              <h3 className="text-xl font-bold text-color-1 mb-2">
                {section.title}
              </h3>
            </Link>
          ))}
        </div>
        {/* Display answers */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Your Answers</h2>
          <ul className="list-disc pl-5">
            {answers.map((answer, index) => (
              <li key={index} className="mb-2">{answer}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
