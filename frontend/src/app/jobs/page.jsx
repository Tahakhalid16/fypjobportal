"use client";
import React, { useEffect, useState } from "react";
import SingleJob from "../../../components/SingleJob";
import axios from "axios";

const Page = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchLocation, setSearchLocation] = useState("");

  // Filter states
  const [filters, setFilters] = useState({
    jobType: [],
    education: [],
    experience: [],
    salaryRange: [],
  });

  // Filter options
  const filterOptions = {
    jobType: ["Full-time", "Part time", "Contract", "Internship"],
    education: ["High School", "Bachelor's", "Master's", "PhD", "MBA"],
    experience: ["0-2 years", "2-5 years", "5-10 years", "10+ years"],
    salaryRange: ["0-30k", "30k-60k", "60k-100k", "100k+"],
  };

  useEffect(() => {
    const getData = async () => {
      try {
        let res = await axios.get("http://localhost:1337/api/jobs?populate=*");
        setJobs(res.data.data);
        setFilteredJobs(res.data.data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };
    getData();
  }, []);

  // Handle search and filter
  useEffect(() => {
    let results = jobs;

    // Apply search filters
    if (searchKeyword) {
      results = results.filter(
        (job) =>
          job.title.toLowerCase().includes(searchKeyword.toLowerCase()) ||
          job.company.toLowerCase().includes(searchKeyword.toLowerCase())
      );
    }
    if (searchLocation) {
      results = results.filter((job) =>
        job.address?.toLowerCase().includes(searchLocation.toLowerCase())
      );
    }

    // Apply filters
    Object.keys(filters).forEach((filterType) => {
      if (filters[filterType].length) {
        results = results.filter((job) =>
          filters[filterType].includes(job[filterType])
        );
      }
    });

    setFilteredJobs(results);
  }, [searchKeyword, searchLocation, filters, jobs]);

  // Handle checkbox changes
  const handleFilterChange = (filterType, value) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: prev[filterType].includes(value)
        ? prev[filterType].filter((item) => item !== value)
        : [...prev[filterType], value],
    }));
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-blue-600 py-12 text-center text-white">
        <h1 className="text-3xl font-bold">Find Your Dream Job</h1>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Column */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Filters</h2>
            {Object.keys(filterOptions).map((filterType) => (
              <div key={filterType} className="mb-6">
                <h3 className="text-lg font-medium capitalize mb-2">
                  {filterType.replace(/([A-Z])/g, " $1")}
                </h3>
                {filterOptions[filterType].map((option) => (
                  <div key={option} className="flex items-center mb-2">
                    <input
                      type="checkbox"
                      id={option}
                      checked={filters[filterType].includes(option)}
                      onChange={() => handleFilterChange(filterType, option)}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label
                      htmlFor={option}
                      className="ml-2 text-sm text-gray-700"
                    >
                      {option}
                    </label>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Jobs Column */}
          <div className="lg:col-span-3">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6">
              <h2 className="text-2xl font-semibold mb-4 sm:mb-0">
                {filteredJobs.length} Jobs Found
              </h2>
              <div className="flex gap-4">
                <input
                  type="text"
                  className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 focus:border-blue-500"
                  placeholder="Search jobs by keyword..."
                  value={searchKeyword}
                  onChange={(e) => setSearchKeyword(e.target.value)}
                />
                <input
                  type="text"
                  className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 focus:border-blue-500"
                  placeholder="Location..."
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job) => (
                  <SingleJob
                    key={job.id}
                    title={job.title}
                    company={job.company}
                    experience={job.experience_req}
                    type={job.job_type}
                    salary={job.salary}
                    address={job.address}
                    jobId={job.documentId}
                  />
                ))
              ) : (
                <div className="col-span-full text-center text-gray-500">
                  No jobs found matching your criteria
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
