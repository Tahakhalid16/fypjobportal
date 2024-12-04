import React from "react";
import { useRouter } from "next/navigation";

const SingleJob = ({
  title,
  company,
  experience,
  type,
  address,
  salary,
  logo,
  jobId,
}) => {
  const router = useRouter();

  const getBadgeColor = (jobType) => {
    switch (jobType.toLowerCase()) {
      case "full time":
        return "bg-blue-500 text-white";
      case "part time":
        return "bg-green-500 text-white";
      case "contract":
        return "bg-yellow-500 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  const handleApplyClick = () => {
    localStorage.setItem("jobid", jobId);
    localStorage.setItem("jobtitle", title);
    router.push("/apply");
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      <div className="flex flex-col h-full p-6">
        {/* Company Logo */}
        <div className="flex-shrink-0 mb-4">
          <img
            src={`http://localhost:1337/${logo}`}
            alt={`${company} logo`}
            className="w-16 h-16 object-contain mx-auto"
          />
        </div>

        {/* Job Details */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
            <span
              className={`px-2 py-1 rounded-full text-xs font-medium ${getBadgeColor(
                type
              )}`}
            >
              {type}
            </span>
          </div>
          <p className="text-gray-500 text-sm">{company}</p>

          <div className="mt-4 space-y-2 text-sm">
            <div className="flex items-center">
              <i className="text-gray-400 mr-2 bi bi-briefcase"></i>
              <span>Experience: {experience}</span>
            </div>
            <div className="flex items-center">
              <i className="text-gray-400 mr-2 bi bi-geo-alt"></i>
              <span>Location: {address}</span>
            </div>
            <div className="flex items-center">
              <i className="text-gray-400 mr-2 bi bi-currency-dollar"></i>
              <span>Salary: {salary}</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-4">
          <button
            onClick={handleApplyClick}
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleJob;
