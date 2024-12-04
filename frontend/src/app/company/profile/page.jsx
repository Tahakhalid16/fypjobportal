"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import AsideBar from "../../../../components/AsideBar";

const ProfilePage = () => {
  const [profile, setProfile] = useState({});
  const router = useRouter();

  useEffect(() => {
    fetchProfileData();
  }, []);

  const fetchProfileData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:1337/api/users/me?populate=*",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt_token")}`,
          },
        }
      );
      setProfile(response.data);
    } catch (error) {
      console.error("Error fetching profile:", error);
    }
  };

  return (
    <div className="min-h-screen flex">
      <AsideBar />
      <main className="flex-1 p-6 bg-gray-50">
        <div className="bg-white p-6 shadow rounded-md max-w-3xl mx-auto">
          <div className="text-center mb-6">
            {profile.profile_img ? (
              <img
                src={`http://localhost:1337${profile.profile_img.url}`}
                alt="Profile"
                className="w-36 h-36 rounded-full object-cover mx-auto"
              />
            ) : (
              <div className="w-36 h-36 bg-gray-300 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-gray-700">
                  {profile.username?.charAt(0)?.toUpperCase()}
                </span>
              </div>
            )}
          </div>

          <h3 className="text-xl font-semibold text-center mb-6">
            {profile.username || "Username"}
          </h3>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                value={profile.email || ""}
                readOnly
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Address
              </label>
              <input
                type="text"
                value={profile.address || ""}
                readOnly
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
          </div>

          <div className="mt-6">
            <button
              onClick={() => router.push("/change_password")}
              className="w-full py-2 px-4 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Change Password
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfilePage;
