"use client";
import { Inter } from "next/font/google";
import Navbar from "../../components/Navbar.jsx";
import Footer from "../../components/Footer.jsx";
import "./globals.css";
import { useEffect, useState } from "react";
import { AuthProvider } from "./context/AuthContext.js";
const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  const [userRole, setUserRole] = useState(null);
  useEffect(() => {
    const company = localStorage.getItem("user_type");
    if (company === "company") {
      setUserRole("company_manager");
    }
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          {userRole === "company_manager" ? <CompanyTopBar /> : <Navbar />}
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
