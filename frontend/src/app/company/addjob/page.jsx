"use client";
import React, { useState } from "react";
import axios from "axios";
import AsideBar from "../../../../components/AsideBar";

const AddJob = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    job_type: "",
    salary: "",
    address: "",
    experience_req: "",
    due_dt: "",
    company: "",
    industry: "",
    education: "",
  });
  const [message, setMessage] = useState({ type: "", text: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    setFormData((prevState) => ({
      ...prevState,
      company_id: localStorage.getItem("userid"),
    }));

    const jobData = {
      data: { ...formData },
    };
    console.log("Job data to be sent:", jobData);

    const jwtToken = localStorage.getItem("jwt_token");

    try {
      const jobResponse = await axios.post("http://localhost:1337/api/jobs", jobData, {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
          "Content-Type": "application/json",
        },
      });
      console.log("Job created:", jobResponse.data);
      setMessage({
        type: "success",
        text: "Job submitted successfully!",
      });
      setFormData({
        title: "",
        description: "",
        job_type: "",
        salary: "",
        address: "",
        experience_req: "",
        due_dt: "",
        company: "",
        industry: "",
        education: "",
      });
    } catch (error) {
      console.error("Error creating job:", error.response ? error.response.data : error.message);
      setMessage({
        type: "danger",
        text: error.response
          ? error.response.data.message
          : "There was an error posting the job. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <AsideBar />
      <main className="flex-1 p-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6">Post New Job</h2>

          {message.text && (
            <div
              className={`mb-4 p-4 rounded ${
                message.type === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
              }`}
            >
              {message.text}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Job Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Job Description
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows="4"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>

            <div>
              <label htmlFor="salary" className="block text-sm font-medium text-gray-700">
                Salary
              </label>
              <input
                type="text"
                id="salary"
                name="salary"
                value={formData.salary}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label htmlFor="experience_req" className="block text-sm font-medium text-gray-700">
                Experience (years)
              </label>
              <input
                type="text"
                id="experience_req"
                name="experience_req"
                value={formData.experience_req}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label htmlFor="due_dt" className="block text-sm font-medium text-gray-700">
                Application Due Date
              </label>
              <input
                type="date"
                id="due_dt"
                name="due_dt"
                value={formData.due_dt}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label htmlFor="job_type" className="block text-sm font-medium text-gray-700">
                Job Type
              </label>
              <select
                id="job_type"
                name="job_type"
                value={formData.job_type}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="Full-Time">Full-Time</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Contract">Contract</option>
                <option value="Internship">Internship</option>
              </select>
            </div>

            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                Address
              </label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                rows="3"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label htmlFor="industry" className="block text-sm font-medium text-gray-700">
                Industry
              </label>
              <input
                type="text"
                id="industry"
                name="industry"
                value={formData.industry}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label htmlFor="education" className="block text-sm font-medium text-gray-700">
                Qualification
              </label>
              <select
                id="education"
                name="education"
                value={formData.education}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="High-School">High-School</option>
                <option value="Bachelor's">Bachelor's</option>
                <option value="Master's">Master's</option>
                <option value="PhD">PhD</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full px-4 py-2 rounded-md text-white ${
                loading ? "bg-blue-400" : "bg-blue-600 hover:bg-blue-700"
              } transition-colors`}
            >
              {loading ? "Posting Job..." : "Post Job"}
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default AddJob;
