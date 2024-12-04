// "use client";
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useRouter } from "next/navigation";
// import {
//   User,
//   Mail,
//   MapPin,
//   Phone,
//   Briefcase,
//   Calendar,
//   Edit2,
//   Shield,
//   Award,
//   ChevronRight,
//   Settings,
// } from "lucide-react";

// const ProfileSection = ({ title, children }) => (
//   <div className="bg-white rounded-xl shadow-sm p-6 space-y-4">
//     <h2 className="text-xl font-semibold text-gray-800 flex items-center">
//       {title}
//     </h2>
//     {children}
//   </div>
// );

// const InfoItem = ({ icon: Icon, label, value, isEditable = false }) => (
//   <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors group">
//     <div className="p-2 bg-blue-50 rounded-lg">
//       <Icon className="w-5 h-5 text-blue-600" />
//     </div>
//     <div className="flex-grow">
//       <p className="text-sm text-gray-500">{label}</p>
//       <p className="text-gray-800 font-medium">{value || "Not provided"}</p>
//     </div>
//     {isEditable && (
//       <button className="hidden group-hover:flex items-center text-blue-600 text-sm font-medium">
//         Edit
//         <ChevronRight className="w-4 h-4 ml-1" />
//       </button>
//     )}
//   </div>
// );

// const SkillBadge = ({ skill }) => (
//   <div className="bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium">
//     {skill}
//   </div>
// );

// // const CompletionMeter = ({ percentage }) => (
// //   <div className="space-y-2">
// //     <div className="flex justify-between items-center">
// //       <span className="text-sm text-gray-500">Profile Completion</span>
// //       <span className="text-sm font-medium text-blue-600">{percentage}%</span>
// //     </div>
// //     <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
// //       <div
// //         className="h-full bg-blue-600 rounded-full transition-all duration-500"
// //         style={{ width: `${percentage}%` }}
// //       />
// //     </div>
// //   </div>
// // );

// const ProfilePage = () => {
//   const [profile, setProfile] = useState({});
//   const [isLoading, setIsLoading] = useState(true);
//   const router = useRouter();

//   // Mock skills data - replace with actual data from your API
//   const skills = ["JavaScript", "React", "Node.js", "Python", "SQL", "AWS"];

//   useEffect(() => {
//     fetchProfileData();
//   }, []);

//   const fetchProfileData = async () => {
//     try {
//       setIsLoading(true);
//       const response = await axios.get(
//         "http://localhost:1337/api/users/me?populate=*",
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("jwt_token")}`,
//           },
//         }
//       );
//       setProfile(response.data);
//     } catch (error) {
//       console.error("Error fetching profile:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   if (isLoading) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-600 border-t-transparent" />
//       </div>
//     );
//   }

//   const calculateProfileCompletion = () => {
//     const fields = [
//       profile.username,
//       profile.email,
//       profile.phone,
//       profile.address,
//       profile.profile_img,
//       profile.bio,
//     ];
//     const filledFields = fields.filter((field) => field).length;
//     return Math.round((filledFields / fields.length) * 100);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 py-8">
//       <div className="container mt-14 mx-auto px-4 max-w-5xl">
//         {/* Top Section */}
//         <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
//           <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
//             <div className="relative group">
//               {profile.profile_img ? (
//                 <img
//                   src={profile.profile_img}
//                   alt={profile.username}
//                   className="w-24 h-24 rounded-full object-cover"
//                 />
//               ) : (
//                 <div className="w-24 h-24 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-2xl font-semibold">
//                   {profile.username?.charAt(0)?.toUpperCase()}
//                 </div>
//               )}
//               <button className="absolute bottom-0 right-0 p-2 bg-blue-600 rounded-full text-white shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
//                 <Edit2 className="w-4 h-4" />
//               </button>
//             </div>
//             <div className="flex-grow text-center md:text-left">
//               <h1 className="text-2xl font-bold text-gray-800 mb-2">
//                 {profile.username || "User"}
//               </h1>
//               <p className="text-gray-500 mb-4 max-w-2xl">
//                 {profile.bio || "No bio provided yet. Tell us about yourself!"}
//               </p>
//               <div className="flex flex-wrap gap-2">
//                 <button
//                   onClick={() => router.push("/change_password")}
//                   className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
//                 >
//                   <Shield className="w-4 h-4 mr-2" />
//                   Change Password
//                 </button>
//                 <button className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
//                   <Settings className="w-4 h-4 mr-2" />
//                   Edit Profile
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="grid md:grid-cols-3 gap-8">
//           {/* Left Column */}
//           <div className="md:col-span-2 space-y-8">
//             <ProfileSection title="Personal Information">
//               <div className="grid grid-cols-1 gap-4">
//                 <InfoItem
//                   icon={User}
//                   label="Full Name"
//                   value={profile.username}
//                   isEditable
//                 />
//                 <InfoItem
//                   icon={Mail}
//                   label="Email"
//                   value={profile.email}
//                   isEditable
//                 />
//                 {/* <InfoItem
//                   icon={Phone}
//                   label="Phone"
//                   value={profile.phone || "Add phone number"}
//                   isEditable
//                 /> */}
//                 <InfoItem
//                   icon={MapPin}
//                   label="Address"
//                   value={profile.address || "Add address"}
//                   isEditable
//                 />
//                 {/* <InfoItem
//                   icon={Briefcase}
//                   label="Current Position"
//                   value={profile.position || "Add current position"}
//                   isEditable
//                 /> */}
//                 {/* <InfoItem icon={Calendar} label="Joined" value="April 2024" /> */}
//               </div>
//             </ProfileSection>

//             {/* <ProfileSection title="Skills & Expertise">
//               <div className="flex flex-wrap gap-2">
//                 {skills.map((skill, index) => (
//                   <SkillBadge key={index} skill={skill} />
//                 ))}
//               </div>
//               <button className="mt-4 text-blue-600 text-sm font-medium hover:text-blue-700 transition-colors">
//                 + Add more skills
//               </button>
//             </ProfileSection>
//           </div> */}

//           {/* Right Column */}
//           <div className="space-y-8">
//             <ProfileSection title="Profile Completion">
//               {/* <CompletionMeter percentage={calculateProfileCompletion()} /> */}
//               <div className="mt-4 space-y-3">
//                 <p className="text-sm text-gray-500">
//                   Complete your profile to:
//                 </p>
//                 <div className="flex items-center text-sm text-gray-600">
//                   <Award className="w-4 h-4 mr-2 text-blue-600" />
//                   Stand out to employers
//                 </div>
//                 <div className="flex items-center text-sm text-gray-600">
//                   <Award className="w-4 h-4 mr-2 text-blue-600" />
//                   Get more job matches
//                 </div>
//                 <div className="flex items-center text-sm text-gray-600">
//                   <Award className="w-4 h-4 mr-2 text-blue-600" />
//                   Show your expertise
//                 </div>
//               </div>
//             </ProfileSection>

//             {/* Additional sections can be added here */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfilePage;
"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import {
  User,
  Mail,
  MapPin,
  Shield,
  Award,
  ChevronRight,
  Settings,
  Edit2,
} from "lucide-react";

const ProfileSection = ({ title, children }) => (
  <div className="bg-white rounded-xl shadow-sm p-6 space-y-4">
    <h2 className="text-xl font-semibold text-gray-800 flex items-center">
      {title}
    </h2>
    {children}
  </div>
);

const InfoItem = ({ icon: Icon, label, value, isEditable = false }) => (
  <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors group">
    <div className="p-2 bg-blue-50 rounded-lg">
      <Icon className="w-5 h-5 text-blue-600" />
    </div>
    <div className="flex-grow">
      <p className="text-sm text-gray-500">{label}</p>
      <p className="text-gray-800 font-medium">{value || "Not provided"}</p>
    </div>
    {isEditable && (
      <button className="hidden group-hover:flex items-center text-blue-600 text-sm font-medium">
        Edit
        <ChevronRight className="w-4 h-4 ml-1" />
      </button>
    )}
  </div>
);

const ProfilePage = () => {
  const [profile, setProfile] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetchProfileData();
  }, []);

  const fetchProfileData = async () => {
    try {
      setIsLoading(true);
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
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-600 border-t-transparent" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mt-14 mx-auto px-4 max-w-5xl">
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
            <div className="relative group">
              {profile.profile_img ? (
                <img
                  src={profile.profile_img}
                  alt={profile.username}
                  className="w-24 h-24 rounded-full object-cover"
                />
              ) : (
                <div className="w-24 h-24 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-2xl font-semibold">
                  {profile.username?.charAt(0)?.toUpperCase()}
                </div>
              )}
              <button className="absolute bottom-0 right-0 p-2 bg-blue-600 rounded-full text-white shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                <Edit2 className="w-4 h-4" />
              </button>
            </div>
            <div className="flex-grow text-center md:text-left">
              <h1 className="text-2xl font-bold text-gray-800 mb-2">
                {profile.username || "User"}
              </h1>
              <p className="text-gray-500 mb-4 max-w-2xl">
                {profile.bio || "No bio provided yet. Tell us about yourself!"}
              </p>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => router.push("/change_password")}
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Shield className="w-4 h-4 mr-2" />
                  Change Password
                </button>
                <button className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                  <Settings className="w-4 h-4 mr-2" />
                  Edit Profile
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-8">
            <ProfileSection title="Personal Information">
              <div className="grid grid-cols-1 gap-4">
                <InfoItem
                  icon={User}
                  label="Full Name"
                  value={profile.username}
                  isEditable
                />
                <InfoItem
                  icon={Mail}
                  label="Email"
                  value={profile.email}
                  isEditable
                />
                <InfoItem
                  icon={MapPin}
                  label="Address"
                  value={profile.address || "Add address"}
                  isEditable
                />
              </div>
            </ProfileSection>
          </div>

          <div className="space-y-8">
            <ProfileSection title="Profile Completion">
              <div className="mt-4 space-y-3">
                <p className="text-sm text-gray-500">
                  Complete your profile to:
                </p>
                <div className="flex items-center text-sm text-gray-600">
                  <Award className="w-4 h-4 mr-2 text-blue-600" />
                  Stand out to employers
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Award className="w-4 h-4 mr-2 text-blue-600" />
                  Get more job matches
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Award className="w-4 h-4 mr-2 text-blue-600" />
                  Show your expertise
                </div>
              </div>
            </ProfileSection>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
