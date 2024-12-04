"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";

// Custom UI Components
const Card = ({ children, className = "" }) => (
  <div className={`bg-white shadow-md rounded-lg overflow-hidden ${className}`}>
    {children}
  </div>
);

const CardHeader = ({ children, className = "" }) => (
  <div className={`px-6 py-4 bg-gray-50 border-b border-gray-200 ${className}`}>
    {children}
  </div>
);

const CardTitle = ({ children, className = "" }) => (
  <h2 className={`text-2xl font-bold text-gray-900 ${className}`}>
    {children}
  </h2>
);

const CardContent = ({ children, className = "" }) => (
  <div className={`p-6 ${className}`}>{children}</div>
);

const Input = ({
  type = "text",
  name,
  value,
  onChange,
  placeholder = "",
  required = false,
  className = "",
  accept,
  multiple,
}) => (
  <input
    type={type}
    name={name}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    required={required}
    accept={accept}
    multiple={multiple}
    className={`
          w-full px-3 py-2 
          border border-gray-300 
          rounded-md shadow-sm 
          focus:outline-none focus:ring-2 focus:ring-blue-500 
          focus:border-blue-500 
          ${className}
      `}
  />
);

const Textarea = ({
  name,
  value,
  onChange,
  rows = 4,
  required = false,
  placeholder = "",
  className = "",
}) => (
  <textarea
    name={name}
    value={value}
    onChange={onChange}
    rows={rows}
    required={required}
    placeholder={placeholder}
    className={`
          w-full px-3 py-2 
          border border-gray-300 
          rounded-md shadow-sm 
          focus:outline-none focus:ring-2 focus:ring-blue-500 
          focus:border-blue-500 
          ${className}
      `}
  />
);

const Button = ({
  children,
  type = "button",
  onClick,
  disabled = false,
  className = "",
}) => (
  <button
    type={type}
    onClick={onClick}
    disabled={disabled}
    className={`
          w-full py-3 
          bg-blue-600 text-white 
          rounded-md 
          hover:bg-blue-700 
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
          disabled:opacity-50 disabled:cursor-not-allowed
          transition-colors duration-300
          ${className}
      `}
  >
    {children}
  </button>
);

const ApplicationForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    full_name: "",
    last_name: "",
    email: "",
    phone: "",
    app_status: "pending",
    cover_letter: "",
    any_experience: "",
    app_dt: new Date().toISOString().slice(0, 10),
    job_id: "",
    job_title: "",
    user_id: "",
  });

  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });
  const [jobId, setJobId] = useState("");
  const searchParams = useSearchParams();

  useEffect(() => {
    const jobid = localStorage.getItem("jobid");
    setJobId(jobid || "");

    setFormData((prevData) => ({
      ...prevData,
      job_id: jobid || "",
      user_id: localStorage.getItem("userid"),
    }));
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setFiles([...e.target.files]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: "", text: "" });
    const jobtitle = localStorage.getItem("jobtitle");

    const submissionData = {
      ...formData,
      job_title: jobtitle || "",
    };

    try {
      let fileIds = [];
      if (files.length > 0) {
        const fileFormData = new FormData();
        Array.from(files).forEach((file) => {
          fileFormData.append("files", file);
        });

        const uploadResponse = await fetch("http://localhost:1337/api/upload", {
          method: "POST",
          body: fileFormData,
        });
        const uploadData = await uploadResponse.json();
        fileIds = uploadData.map((file) => file.id);
      }

      const token = localStorage.getItem("jwt_token");

      const response = await fetch(
        "http://localhost:1337/api/user-applications",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            data: {
              ...submissionData,
              cv_file: fileIds.length > 0 ? fileIds : undefined,
            },
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit application");
      }

      setMessage({
        type: "success",
        text: "Application submitted successfully!",
      });

      setFormData({
        full_name: "",
        last_name: "",
        email: "",
        phone: "",
        app_status: "pending",
        cover_letter: "",
        any_experience: "",
        app_dt: new Date().toISOString().slice(0, 10),
        job_id: "",
        job_titles: "",
      });
      setFiles([]);
    } catch (error) {
      console.error("Error details:", error);
      setMessage({
        type: "danger",
        text: "Error submitting application",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Job Application</CardTitle>
          </CardHeader>
          <CardContent>
            {message.text && (
              <div
                className={`
                                  mb-4 p-4 rounded-md 
                                  ${
                                    message.type === "success"
                                      ? "bg-green-50 text-green-800"
                                      : "bg-red-50 text-red-800"
                                  }
                              `}
              >
                {message.text}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name*
                  </label>
                  <Input
                    type="text"
                    name="full_name"
                    value={formData.full_name}
                    onChange={handleChange}
                    required
                    placeholder="Enter first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name*
                  </label>
                  <Input
                    type="text"
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleChange}
                    required
                    placeholder="Enter last name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email*
                </label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter email address"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone*
                </label>
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Enter phone number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Cover Letter*
                </label>
                <Textarea
                  name="cover_letter"
                  value={formData.cover_letter}
                  onChange={handleChange}
                  rows={4}
                  required
                  placeholder="Write your cover letter"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Any Experience
                </label>
                <Textarea
                  name="any_experience"
                  value={formData.any_experience}
                  onChange={handleChange}
                  rows={4}
                  required
                  placeholder="Describe your relevant experience"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  CV/Resume*
                </label>
                <Input
                  type="file"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx"
                  multiple
                  required
                  className="file:mr-4 file:rounded-full file:border-0 file:bg-blue-50 file:text-blue-700 file:px-4 file:py-2 hover:file:bg-blue-100"
                />
              </div>

              <Button type="submit" disabled={loading}>
                {loading ? (
                  <div className="flex items-center justify-center">
                    <svg
                      className="animate-spin h-5 w-5 mr-3"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Submitting...
                  </div>
                ) : (
                  "Submit Application"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ApplicationForm;
