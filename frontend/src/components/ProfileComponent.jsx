import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProfileComponent = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    age: 30,
    weight: '70kg',
    height: '180cm',
    activityLevel: 'Moderate',
    diet: 'Vegetarian',
  });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    // Save the updated user information (e.g., send to API)
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <div className="container mx-auto p-6">
      <div className="bg-n-8 text-n-1 rounded-lg shadow-lg p-6 relative">
        <Link to="/home" className="absolute top-4 left-4">
          <button className="px-4 py-2 bg-color-1 text-n-8 rounded hover:bg-color-2 transition duration-300 ease-in-out">
            Back to Home
          </button>
        </Link>
        <div className="flex flex-col items-center mt-16 space-y-4">
          <img
            src="https://via.placeholder.com/150"
            alt={`${user.name}'s profile`}
            className="w-24 h-24 rounded-full object-cover"
          />
          <div>
            <h1 className="text-3xl font-bold">{user.name}</h1>
            <p className="text-lg text-gray-500">{user.email}</p>
          </div>
        </div>
        <div className="mt-6">
          <h2 className="text-2xl font-semibold">Profile Information</h2>
          <div className="mt-2 p-4 border-2 border-color-1 rounded space-y-2">
            <div>
              <label className="block text-gray-700">Name</label>
              {isEditing ? (
                <input
                  type="text"
                  name="name"
                  value={user.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-n-7 text-n-1 rounded"
                />
              ) : (
                <p>{user.name}</p>
              )}
            </div>
            <div>
              <label className="block text-gray-700">Email</label>
              {isEditing ? (
                <input
                  type="email"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-n-7 text-n-1 rounded"
                />
              ) : (
                <p>{user.email}</p>
              )}
            </div>
            <div>
              <label className="block text-gray-700">Age</label>
              {isEditing ? (
                <input
                  type="number"
                  name="age"
                  value={user.age}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-n-7 text-n-1 rounded"
                />
              ) : (
                <p>{user.age}</p>
              )}
            </div>
            <div>
              <label className="block text-gray-700">Weight</label>
              {isEditing ? (
                <input
                  type="text"
                  name="weight"
                  value={user.weight}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-n-7 text-n-1 rounded"
                />
              ) : (
                <p>{user.weight}</p>
              )}
            </div>
            <div>
              <label className="block text-gray-700">Height</label>
              {isEditing ? (
                <input
                  type="text"
                  name="height"
                  value={user.height}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-n-7 text-n-1 rounded"
                />
              ) : (
                <p>{user.height}</p>
              )}
            </div>
            <div>
              <label className="block text-gray-700">Activity Level</label>
              {isEditing ? (
                <input
                  type="text"
                  name="activityLevel"
                  value={user.activityLevel}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-n-7 text-n-1 rounded"
                />
              ) : (
                <p>{user.activityLevel}</p>
              )}
            </div>
            <div>
              <label className="block text-gray-700">Diet</label>
              {isEditing ? (
                <input
                  type="text"
                  name="diet"
                  value={user.diet}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-n-7 text-n-1 rounded"
                />
              ) : (
                <p>{user.diet}</p>
              )}
            </div>
          </div>
          {isEditing ? (
            <button
              onClick={handleSave}
              className="mt-4 px-4 py-2 bg-color-1 text-n-8 rounded hover:bg-color-2 transition duration-300 ease-in-out"
            >
              Save
            </button>
          ) : (
            <button
              onClick={handleEdit}
              className="mt-4 px-4 py-2 bg-color-1 text-n-8 rounded hover:bg-color-2 transition duration-300 ease-in-out"
            >
              Edit Profile
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileComponent;
