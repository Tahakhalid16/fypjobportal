// "use client";
// import axios from "axios";
// import React, { useState } from "react";
// import { useRouter } from "next/navigation";

// const SignUp = () => {
//   const [userData, setUserData] = useState({
//     username: "",
//     email: "",
//     password: "",
//     repassword: "",
//     user_type: "",
//     address: "",
//     profile_img: null,
//     companyName: "",
//   });

//   const [message, setMessage] = useState({ text: "", type: "" });
//   const router = useRouter();

//   const handleFileChange = (e) => {
//     setUserData({ ...userData, profile_img: e.target.files[0] });
//   };

//   const handleChange = (e) => {
//     setUserData({ ...userData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (userData.password !== userData.repassword) {
//       setMessage({ text: "Passwords do not match", type: "danger" });
//       return;
//     }

//     const formData = new FormData();
//     formData.append("username", userData.username);
//     formData.append("email", userData.email);
//     formData.append("password", userData.password);
//     formData.append("user_type", userData.user_type);
//     formData.append("address", userData.address);

//     if (userData.profile_img) {
//       formData.append("files.profile_img", userData.profile_img);
//     }

//     try {
//       const registerResponse = await axios.post(
//         "http://localhost:1337/api/auth/local/register",
//         formData,
//         {
//           headers: { "Content-Type": "multipart/form-data" },
//         }
//       );

//       setMessage({ text: "User registered successfully!", type: "success" });
//       router.push("/signin");
//     } catch (error) {
//       console.error(
//         "Error registering user:",
//         error.response ? error.response.data : error.message
//       );
//       setMessage({
//         text: error.response?.data?.error?.message || "An error occurred",
//         type: "danger",
//       });
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50">
//       <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-3xl">
//         <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
//           Sign Up to Your Account
//         </h2>
//         {message.text && (
//           <div
//             className={`p-4 mb-4 text-sm rounded ${
//               message.type === "success"
//                 ? "bg-green-100 text-green-700"
//                 : "bg-red-100 text-red-700"
//             }`}
//           >
//             {message.text}
//           </div>
//         )}
//         <form
//           onSubmit={handleSubmit}
//           className="grid grid-cols-1 md:grid-cols-2 gap-6"
//         >
//           <div>
//             <label
//               htmlFor="username"
//               className="block text-sm font-medium text-gray-600"
//             >
//               User Name
//             </label>
//             <input
//               type="text"
//               id="username"
//               name="username"
//               onChange={handleChange}
//               required
//               className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//           </div>

//           <div>
//             <label
//               htmlFor="email"
//               className="block text-sm font-medium text-gray-600"
//             >
//               Email Address
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               onChange={handleChange}
//               required
//               className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//           </div>

//           <div>
//             <label
//               htmlFor="address"
//               className="block text-sm font-medium text-gray-600"
//             >
//               Address
//             </label>
//             <input
//               type="text"
//               id="address"
//               name="address"
//               onChange={handleChange}
//               required
//               className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//           </div>

//           <div>
//             <label
//               htmlFor="user_type"
//               className="block text-sm font-medium text-gray-600"
//             >
//               User Type
//             </label>
//             <select
//               id="user_type"
//               name="user_type"
//               onChange={handleChange}
//               required
//               className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
//               value={userData.user_type}
//             >
//               <option value="" disabled>
//                 Select User Type
//               </option>
//               <option value="jobseeker">Job Seeker</option>
//               <option value="company">Company</option>
//             </select>
//           </div>

//           <div>
//             <label
//               htmlFor="profile_img"
//               className="block text-sm font-medium text-gray-600"
//             >
//               Profile Image
//             </label>
//             <input
//               type="file"
//               id="profile_img"
//               name="profile_img"
//               onChange={handleFileChange}
//               className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
//               accept="image/*"
//             />
//           </div>

//           <div>
//             <label
//               htmlFor="password"
//               className="block text-sm font-medium text-gray-600"
//             >
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               onChange={handleChange}
//               required
//               className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//           </div>

//           <div>
//             <label
//               htmlFor="repassword"
//               className="block text-sm font-medium text-gray-600"
//             >
//               Confirm Password
//             </label>
//             <input
//               type="password"
//               id="repassword"
//               name="repassword"
//               onChange={handleChange}
//               required
//               className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//           </div>

//           <div className="col-span-1 md:col-span-2">
//             <button
//               type="submit"
//               className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
//             >
//               Sign Up
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignUp;
"use client";
import axios from "axios";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const SignUp = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    repassword: "",
    user_type: "",
    address: "",
    profile_img: null,
    companyName: "",
  });

  const [message, setMessage] = useState({ text: "", type: "" });
  const router = useRouter();

  const handleFileChange = (e) => {
    setUserData({ ...userData, profile_img: e.target.files[0] });
  };

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (userData.password !== userData.repassword) {
      setMessage({ text: "Passwords do not match", type: "danger" });
      return;
    }

    let profileImageId = null;

    try {
      // Upload profile image if provided
      if (userData.profile_img) {
        const imageForm = new FormData();
        imageForm.append("files", userData.profile_img);
        const uploadRes = await axios.post(
          "http://localhost:1337/api/upload",
          imageForm
        );
        profileImageId = uploadRes.data[0]?.id;
      }

      // Register the user
      const registerResponse = await axios.post(
        "http://localhost:1337/api/auth/local/register",
        {
          username: userData.username,
          email: userData.email,
          password: userData.password,
          address: userData.address,
          profile_img: profileImageId,
        }
      );

       const { jwt, user } = registerResponse.data;
       Cookies.set("token", jwt);

      if (userData.user_type === "company") {
        // Register company
        const companyRes = await axios.post(
          "http://localhost:1337/api/companies",
          {
            data: {
              company: userData.companyName,
              users: [user.id],
            },
          },
          {
            headers: {
              Authorization: `Bearer ${jwt}`,
            },
          }
        );

        setMessage({
          text: "Company and user registration successful!",
          type: "success",
        });
      } else {
        setMessage({ text: "User registration successful!", type: "success" });
      }

      router.push("/signin");
    } catch (error) {
      console.error(
        "Error registering user:",
        error.response ? error.response.data : error.message
      );
      setMessage({
        text: error.response?.data?.error?.message || "An error occurred",
        type: "danger",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-3xl">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
          Sign Up to Your Account
        </h2>
        {message.text && (
          <div
            className={`p-4 mb-4 text-sm rounded ${
              message.type === "success"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {message.text}
          </div>
        )}
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-600">
              User Name
            </label>
            <input
              type="text"
              id="username"
              name="username"
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-600">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label htmlFor="user_type" className="block text-sm font-medium text-gray-600">
              User Type
            </label>
            <select
              id="user_type"
              name="user_type"
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={userData.user_type}
            >
              <option value="" disabled>
                Select User Type
              </option>
              <option value="jobseeker">Job Seeker</option>
              <option value="company">Company</option>
            </select>
          </div>

          {userData.user_type === "company" && (
            <div>
              <label htmlFor="companyName" className="block text-sm font-medium text-gray-600">
                Company Name
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          )}

          <div>
            <label htmlFor="profile_img" className="block text-sm font-medium text-gray-600">
              Profile Image
            </label>
            <input
              type="file"
              id="profile_img"
              name="profile_img"
              onChange={handleFileChange}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              accept="image/*"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label htmlFor="repassword" className="block text-sm font-medium text-gray-600">
              Confirm Password
            </label>
            <input
              type="password"
              id="repassword"
              name="repassword"
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="col-span-1 md:col-span-2">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
