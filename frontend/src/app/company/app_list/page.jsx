"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import AsideBar from "../../../../components/AsideBar";

const ApplicationTable = () => {
  const [applications, setApplications] = useState([]);
  const jwt = localStorage.getItem("jwt_token");

  const getData = async () => {
    const headers = { Authorization: `Bearer ${jwt}` };

    try {
      const res = await axios.get(
        "http://localhost:1337/api/user-applications",
        {
          headers,
        }
      );
      setApplications(res.data.data);
    } catch (error) {
      console.error("Error fetching user applications:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const updateApplicationStatus = async (id, newStatus) => {
    try {
      await axios.put(
        `http://localhost:1337/api/user-applications/${id}`,
        {
          data: { app_status: newStatus },
        },
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
            "Content-Type": "application/json",
          },
        }
      );
      getData();
    } catch (error) {
      console.error("Error updating user application:", error);
    }
  };

  return (
    <div className="flex">
      <AsideBar />
      <main className="flex-1 p-6 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h4 className="text-2xl font-semibold text-gray-800 mb-4">
            User Applications
          </h4>
          <div className="overflow-x-auto bg-white shadow-md rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Request Number
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Full Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Phone
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {applications.map((app) => (
                  <tr key={app.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {app.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {app.full_name} {app.last_name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {app.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {app.phone}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {app.app_status}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="flex space-x-2">
                        {app.app_status === "pending" && (
                          <>
                            <button
                              className="px-3 py-1 text-white bg-green-600 rounded-md hover:bg-green-700 focus:ring-2 focus:ring-green-500"
                              onClick={() =>
                                updateApplicationStatus(
                                  app.documentId,
                                  "approved"
                                )
                              }
                            >
                              Approve
                            </button>
                            <button
                              className="px-3 py-1 text-white bg-red-600 rounded-md hover:bg-red-700 focus:ring-2 focus:ring-red-500"
                              onClick={() =>
                                updateApplicationStatus(
                                  app.documentId,
                                  "rejected"
                                )
                              }
                            >
                              Reject
                            </button>
                          </>
                        )}
                        {app.app_status === "approved" && (
                          <button
                            className="px-3 py-1 text-white bg-red-600 rounded-md hover:bg-red-700 focus:ring-2 focus:ring-red-500"
                            onClick={() =>
                              updateApplicationStatus(
                                app.documentId,
                                "rejected"
                              )
                            }
                          >
                            Reject
                          </button>
                        )}
                        {app.app_status === "rejected" && (
                          <button
                            className="px-3 py-1 text-white bg-green-600 rounded-md hover:bg-green-700 focus:ring-2 focus:ring-green-500"
                            onClick={() =>
                              updateApplicationStatus(
                                app.documentId,
                                "approved"
                              )
                            }
                          >
                            Approve
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ApplicationTable;
