"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import AsideBar from "../../../../components/AsideBar";

const JobsDisplay = () => {
  const [jobs, setJobs] = useState([]);
  const [editingJob, setEditingJob] = useState(null);
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

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    const jwt = localStorage.getItem("jwt_token");
    try {
      const res = await axios.get("http://localhost:1337/api/jobs?populate=*", {
        headers: { Authorization: `Bearer ${jwt}` },
      });
      setJobs(res.data.data);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  const handleEdit = (job) => {
    setEditingJob(job.id);
    setFormData({
      title: job.title || "",
      description: job.description || "",
      job_type: job.job_type || "",
      salary: job.salary || "",
      address: job.address || "",
      experience_req: job.experience_req || "",
      due_dt: job.due_dt || "",
      company: job.company || "",
      industry: job.industry || "",
      education: job.education || "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const jwt = localStorage.getItem("jwt_token");

    try {
      await axios.put(
        `http://localhost:1337/api/jobs/${editingJob}`,
        { data: formData },
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
            "Content-Type": "application/json",
          },
        }
      );

      setEditingJob(null);
      fetchJobs(); // Refresh the jobs list
      alert("Job updated successfully!");
    } catch (error) {
      console.error("Error updating job:", error);
      alert("Error updating job. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex">
      <AsideBar />
      <main className="flex-1 p-6 bg-gray-50">
        <div className="space-y-6">
          <h1 className="text-2xl font-semibold text-gray-800">
            Jobs Posted List
          </h1>
          <hr className="border-gray-300" />
          {editingJob ? (
            <div className="max-w-2xl bg-white p-6 shadow rounded-md">
              <h2 className="text-xl font-semibold mb-4">Edit Job</h2>
              <form onSubmit={handleUpdate} className="space-y-4">
                <div>
                  <label
                    htmlFor="title"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Job Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Job Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows="3"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="salary"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Salary
                  </label>
                  <input
                    type="text"
                    id="salary"
                    name="salary"
                    value={formData.salary}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    required
                  />
                </div>
                <div className="flex space-x-4">
                  <div className="flex-1">
                    <label
                      htmlFor="experience_req"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Experience (years)
                    </label>
                    <input
                      type="text"
                      id="experience_req"
                      name="experience_req"
                      value={formData.experience_req}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      required
                    />
                  </div>
                  <div className="flex-1">
                    <label
                      htmlFor="due_dt"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Application Due Date
                    </label>
                    <input
                      type="date"
                      id="due_dt"
                      name="due_dt"
                      value={formData.due_dt}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="job_type"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Job Type
                  </label>
                  <select
                    id="job_type"
                    name="job_type"
                    value={formData.job_type}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    required
                  >
                    <option value="">Select Job Type</option>
                    <option value="Full-time">Full-time</option>
                    <option value="Part Time">Part Time</option>
                    <option value="Contract">Contract</option>
                    <option value="Internship">Internship</option>
                  </select>
                </div>
                <div className="flex space-x-4">
                  <button
                    type="submit"
                    className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  >
                    Update Job
                  </button>
                  <button
                    type="button"
                    onClick={() => setEditingJob(null)}
                    className="w-full py-2 px-4 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:ring-2 focus:ring-gray-400 focus:outline-none"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <table className="w-full table-auto bg-white shadow rounded-md">
              <thead>
                <tr className="bg-gray-100 text-left text-sm font-semibold text-gray-600">
                  <th className="px-6 py-3">Serial Number</th>
                  <th className="px-6 py-3">Title</th>
                  <th className="px-6 py-3">Experience</th>
                  <th className="px-6 py-3">Salary</th>
                  <th className="px-6 py-3">Industry</th>
                  <th className="px-6 py-3">Job Type</th>
                  <th className="px-6 py-3">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {jobs.map((job) => (
                  <tr key={job.id} className="hover:bg-gray-50">
                    <td className="px-6 py-3">{job.id}</td>
                    <td className="px-6 py-3">{job.title}</td>
                    <td className="px-6 py-3">{job.experience_req}</td>
                    <td className="px-6 py-3">{job.salary}</td>
                    <td className="px-6 py-3">{job.industry}</td>
                    <td className="px-6 py-3">{job.job_type}</td>
                    <td className="px-6 py-3">
                      <button
                        onClick={() => handleEdit(job)}
                        className="py-1 px-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </main>
    </div>
  );
};

export default JobsDisplay;
