import { useState } from 'react';
// import { DashboardIcon, WorkoutIcon, NutritionIcon, LibraryIcon, ProfileIcon } from '../assets/icons';
import { Link } from 'react-router-dom';

// const tabs = [
//   { name: 'Dashboard', icon: <DashboardIcon /> },
//   { name: 'Workout', icon: <WorkoutIcon /> },
//   { name: 'Nutrition', icon: <NutritionIcon /> },
//   { name: 'Library', icon: <LibraryIcon /> },
//   { name: 'Profile', icon: <ProfileIcon /> },
// ];

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('Dashboard');

  return (
    <div className="flex h-screen bg-n-8 text-n-1">
      {/* Sidebar */}
      <div className="w-64 bg-n-7 p-4">
        <h2 className="text-2xl font-bold mb-6 text-color-1">WorkoutWise</h2>
        {/* Removed mapping operation */}
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="space-y-6">
          <h1 className="h1">Dashboard</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-n-7 p-4 rounded-lg shadow-lg">Section 1</div>
            <div className="bg-n-7 p-4 rounded-lg shadow-lg">Section 2</div>
            <div className="bg-n-7 p-4 rounded-lg shadow-lg">Section 3</div>
            <div className="bg-n-7 p-4 rounded-lg shadow-lg">Section 4</div>
            <div className="bg-n-7 p-4 rounded-lg shadow-lg">Section 5</div>
            <div className="bg-n-7 p-4 rounded-lg shadow-lg">Section 6</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
