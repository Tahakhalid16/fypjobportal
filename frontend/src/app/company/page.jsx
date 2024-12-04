"use client";
import React, { useState, useEffect } from "react";
import DashTile from "../../../components/DashTile";
import AsideBar from "../../../components/AsideBar";
import axios from "axios";
import { FaBriefcase, FaFileAlt } from "react-icons/fa";
import { FaListCheck } from "react-icons/fa6";
import { MdFilterListOff } from "react-icons/md";

const Index = () => {
  const [jobs, setJobs] = useState(0);
  const [applications, setApplications] = useState(0);
  const [approvedApplications, setApprovedApplications] = useState(0);
  const [rejectedApplications, setRejectedApplications] = useState(0);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get("http://localhost:1337/api/jobs");
        setJobs(response.data.data.length);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    const fetchApplications = async () => {
      try {
        const response = await axios.get(
          "http://localhost:1337/api/user-applications?populate=*",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("jwt_token")}`,
            },
          }
        );
        setApplications(response.data.data.length);
        setApprovedApplications(
          response.data.data.filter((app) => app.app_status === "approved")
            .length
        );
        setRejectedApplications(
          response.data.data.filter((app) => app.app_status === "rejected")
            .length
        );
      } catch (error) {
        console.error("Error fetching applications:", error);
      }
    };

    fetchJobs();
    fetchApplications();
  }, []);

  return (
    <div className="flex">
      <AsideBar />
      <main className="flex-1 p-6 bg-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <DashTile
            title="Total Jobs"
            value={jobs}
            icon={<FaBriefcase />}
            bgColor="bg-blue-500"
          />
          <DashTile
            title="Total Applications"
            value={applications}
            icon={<FaFileAlt />}
            bgColor="bg-green-500"
          />
          <DashTile
            title="Approved Applications"
            value={approvedApplications}
            icon={<FaListCheck />}
            bgColor="bg-yellow-500"
          />
          <DashTile
            title="Rejected Applications"
            value={rejectedApplications}
            icon={<MdFilterListOff />}
            bgColor="bg-red-500"
          />
        </div>
      </main>
    </div>
  );
};

export default Index;
