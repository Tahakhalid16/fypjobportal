"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

const ApplicationStatus = () => {
  const [applications, setApplications] = useState([]);
  const [jobDetails, setJobDetails] = useState({}); // To store job details

  const jwt = localStorage.getItem("jwt_token");
  const userId = localStorage.getItem("userid"); // Get user ID from local storage

  const getApplications = async () => {
    let headers = {
      Authorization: `Bearer ${jwt}`,
    };

    try {
      let res = await axios.get("http://localhost:1337/api/user-applications", {
        headers,
      });
      const userApplications = res.data.data.filter(
        (app) => app.user_id === userId
      ); // Filter by user_id
      setApplications(userApplications);
    } catch (error) {
      console.error("Error fetching user applications:", error);
    }
  };

  const getJobDetails = async (jobId) => {
    try {
      const res = await axios.get(`http://localhost:1337/api/jobs/${jobId}`);
      return res.data.data; // Return the job details
    } catch (error) {
      console.error("Error fetching job details:", error);
      return null;
    }
  };

  useEffect(() => {
    getApplications();
  }, []);

  useEffect(() => {
    const fetchJobDetails = async () => {
      const jobs = await Promise.all(
        applications.map(async (app) => {
          const jobDetail = await getJobDetails(app.job_id);
          return jobDetail;
        })
      );
      const jobMap = {};
      jobs.forEach((job, index) => {
        if (job) {
          jobMap[applications[index].job_id] = job; // Map job_id to job details
        }
      });
      setJobDetails(jobMap);
    };

    if (applications.length > 0) {
      fetchJobDetails();
    }
  }, [applications]);

  const getBadgeClass = (status) => {
    switch (status.toLowerCase()) {
      case "pending":
        return "bg-blue-100 text-blue-800";
      case "approved":
        return "bg-green-100 text-green-800";
      case "rejected":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="px-6 py-8 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-semibold text-gray-700 mb-6">
        Application Status
      </h2>
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="min-w-full text-sm text-gray-600">
          <thead className="bg-gray-100 text-gray-800">
            <tr>
              <th className="py-3 px-4 text-left">#</th>
              <th className="py-3 px-4 text-left">Apply Date</th>
              <th className="py-3 px-4 text-left">Job Title</th>
              <th className="py-3 px-4 text-left">Company</th>
              <th className="py-3 px-4 text-left">Req Experience</th>
              <th className="py-3 px-4 text-left">Exp Date</th>
              <th className="py-3 px-4 text-left">Salary</th>
              <th className="py-3 px-4 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app, index) => {
              const job = jobDetails[app.job_id] || {};
              return (
                <tr
                  key={app.id}
                  className={`${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  } hover:bg-gray-100`}
                >
                  <td className="py-3 px-4">{index + 1}</td>
                  <td className="py-3 px-4">{app.app_dt}</td>
                  <td className="py-3 px-4">{job.title || "N/A"}</td>
                  <td className="py-3 px-4">{job.company || "N/A"}</td>
                  <td className="py-3 px-4">{job.req_experience || "N/A"}</td>
                  <td className="py-3 px-4">{job.due_dt || "N/A"}</td>
                  <td className="py-3 px-4">{job.salary || "N/A"}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-3 py-1 text-xs font-medium rounded-full ${getBadgeClass(
                        app.app_status
                      )}`}
                    >
                      {app.app_status}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApplicationStatus;
