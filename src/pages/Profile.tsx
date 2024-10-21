import React, { useState } from 'react';
import { Camera, Edit2, Instagram, Twitter, Youtube } from 'lucide-react';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'Alex Johnson',
    username: '@alexcreates',
    bio: 'Lifestyle and tech content creator | 500K+ followers across platforms',
    location: 'Los Angeles, CA',
    website: 'www.alexcreates.com',
    instagram: '@alexcreates',
    twitter: '@alexcreates',
    youtube: 'AlexCreatesChannel',
  });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically send the updated profile to your backend
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProfile(prevProfile => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="relative h-48 bg-indigo-600">
          <img
            className="absolute h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1579547621113-e4bb2a19bdd6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
            alt="Profile background"
          />
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-black opacity-50"></div>
          <div className="absolute top-0 right-0 mt-4 mr-4">
            <button className="bg-white text-gray-800 px-4 py-2 rounded-md flex items-center">
              <Camera className="h-5 w-5 mr-2" />
              Change Cover
            </button>
          </div>
        </div>
        
        <div className="relative px-6 py-8">
          <div className="absolute -top-16 left-6">
            <img
              className="h-32 w-32 rounded-full border-4 border-white"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
              alt="Profile picture"
            />
          </div>
          
          <div className="mt-16">
            {isEditing ? (
              <form onSubmit={handleSave}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={profile.name}
                      onChange={handleChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Username</label>
                    <input
                      type="text"
                      name="username"
                      value={profile.username}
                      onChange={handleChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700">Bio</label>
                    <textarea
                      name="bio"
                      value={profile.bio}
                      onChange={handleChange}
                      rows={3}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    ></textarea>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Location</label>
                    <input
                      type="text"
                      name="location"
                      value={profile.location}
                      onChange={handleChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Website</label>
                    <input
                      type="text"
                      name="website"
                      value={profile.website}
                      onChange={handleChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-end">
                  <button
                    type="button"
                    onClick={() => setIsEditing(false)}
                    className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            ) : (
              <>
                <div className="flex justify-between items-center">
                  <h1 className="text-2xl font-bold text-gray-900">{profile.name}</h1>
                  <button
                    onClick={handleEdit}
                    className="bg-white text-gray-800 px-4 py-2 rounded-md flex items-center border border-gray-300 hover:bg-gray-50"
                  >
                    <Edit2 className="h-5 w-5 mr-2" />
                    Edit Profile
                  </button>
                </div>
                <p className="text-gray-500">{profile.username}</p>
                <p className="mt-4 text-gray-600">{profile.bio}</p>
                <div className="mt-4 flex items-center text-gray-600">
                  <span className="mr-4">{profile.location}</span>
                  <a href={`https://${profile.website}`} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">
                    {profile.website}
                  </a>
                </div>
                <div className="mt-6 flex space-x-6">
                  <a href={`https://instagram.com/${profile.instagram}`} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600">
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a href={`https://twitter.com/${profile.twitter}`} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600">
                    <Twitter className="h-6 w-6" />
                  </a>
                  <a href={`https://youtube.com/${profile.youtube}`} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600">
                    <Youtube className="h-6 w-6" />
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;