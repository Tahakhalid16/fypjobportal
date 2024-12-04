// import React, { useState } from "react";
// import Link from "next/link";
// import { useAuth } from "../src/app/context/AuthContext";
// import { Menu, X, Briefcase, User, FileText } from "lucide-react";

// const NavLink = ({ href, children, className = "" }) => (
//   <Link
//     href={href}
//     className={`text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200 ${className}`}
//   >
//     {children}
//   </Link>
// );

// const Navbar = () => {
//   const { isAuthenticated, logout, userType } = useAuth();
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <header className="w-full bg-white/80 backdrop-blur-md shadow-sm">
//       <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <Link href="/" className="flex items-center space-x-2">
//             <Briefcase className="h-8 w-8 text-blue-600" />
//             <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
//               JobPortal
//             </span>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-8">
//             <NavLink href="/">Home</NavLink>
//             <NavLink href="/about">About</NavLink>

//             {!isAuthenticated ? (
//               <>
//                 <NavLink href="/jobs">Jobs</NavLink>
//                 <Link
//                   href="/signin"
//                   className="text-gray-600 font-medium hover:text-blue-600 transition-colors duration-200"
//                 >
//                   Login
//                 </Link>
//                 <Link
//                   href="/signup"
//                   className="px-4 py-2 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors duration-200"
//                 >
//                   Sign Up
//                 </Link>
//               </>
//             ) : (
//               <div className="flex items-center space-x-8">
//                 {userType === "jobseeker" && (
//                   <>
//                     <NavLink
//                       href="/jobs"
//                       className="flex items-center space-x-1"
//                     >
//                       <Briefcase className="h-4 w-4" />
//                       <span>Jobs</span>
//                     </NavLink>
//                     <NavLink
//                       href="/appstatus"
//                       className="flex items-center space-x-1"
//                     >
//                       <FileText className="h-4 w-4" />
//                       <span>Applications</span>
//                     </NavLink>
//                     <NavLink
//                       href="/profile"
//                       className="flex items-center space-x-1"
//                     >
//                       <User className="h-4 w-4" />
//                       <span>Profile</span>
//                     </NavLink>
//                   </>
//                 )}
//                 <button
//                   onClick={logout}
//                   className="px-4 py-2 bg-red-100 text-red-600 rounded-full font-medium hover:bg-red-200 transition-colors duration-200"
//                 >
//                   Logout
//                 </button>
//               </div>
//             )}
//           </div>

//           {/* Mobile menu button */}
//           <button
//             onClick={toggleMenu}
//             className="md:hidden rounded-lg p-2 hover:bg-gray-100 transition-colors duration-200 focus:outline-none"
//           >
//             {isOpen ? (
//               <X className="h-6 w-6 text-gray-600" />
//             ) : (
//               <Menu className="h-6 w-6 text-gray-600" />
//             )}
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         <div
//           className={`${
//             isOpen ? "block" : "hidden"
//           } md:hidden border-t border-gray-100 py-4`}
//         >
//           <div className="flex flex-col space-y-4 px-2">
//             <NavLink href="/">Home</NavLink>
//             <NavLink href="/about">About</NavLink>

//             {!isAuthenticated ? (
//               <>
//                 <NavLink href="/job">Find Job</NavLink>
//                 <Link
//                   href="/signin"
//                   className="text-gray-600 font-medium hover:text-blue-600 transition-colors duration-200"
//                 >
//                   Login
//                 </Link>
//                 <Link
//                   href="/signup"
//                   className="px-4 py-2 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors duration-200 text-center"
//                 >
//                   Sign Up
//                 </Link>
//               </>
//             ) : (
//               <>
//                 {userType === "jobseeker" && (
//                   <>
//                     <NavLink
//                       href="/job"
//                       className="flex items-center space-x-2"
//                     >
//                       <Briefcase className="h-4 w-4" />
//                       <span>Find Job</span>
//                     </NavLink>
//                     <NavLink
//                       href="/appstatus"
//                       className="flex items-center space-x-2"
//                     >
//                       <FileText className="h-4 w-4" />
//                       <span>Applications</span>
//                     </NavLink>
//                     <NavLink
//                       href="/profile"
//                       className="flex items-center space-x-2"
//                     >
//                       <User className="h-4 w-4" />
//                       <span>Profile</span>
//                     </NavLink>
//                   </>
//                 )}
//                 <button
//                   onClick={logout}
//                   className="px-4 py-2 bg-red-100 text-red-600 rounded-full font-medium hover:bg-red-200 transition-colors duration-200 text-center"
//                 >
//                   Logout
//                 </button>
//               </>
//             )}
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;
import React from "react";
import Link from "next/link";
import { useAuth } from "../src/app/context/AuthContext";
import { Briefcase, User, FileText } from "lucide-react";

const NavLink = ({ href, children, className = "" }) => (
  <Link
    href={href}
    className={`text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200 ${className}`}
  >
    {children}
  </Link>
);

const Navbar = () => {
  const { isAuthenticated, logout, userType } = useAuth();

  return (
    <header className="w-full bg-white/80 backdrop-blur-md shadow-sm">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Briefcase className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              JobPortal
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="flex items-center space-x-8">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About</NavLink>

            {!isAuthenticated ? (
              <>
                <NavLink href="/jobs">Jobs</NavLink>
                <Link
                  href="/signin"
                  className="text-gray-600 font-medium hover:text-blue-600 transition-colors duration-200"
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="px-4 py-2 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors duration-200"
                >
                  Sign Up
                </Link>
              </>
            ) : (
              <div className="flex items-center space-x-8">
                {userType === "jobseeker" && (
                  <>
                    <NavLink
                      href="/jobs"
                      className="flex items-center space-x-1"
                    >
                      <Briefcase className="h-4 w-4" />
                      <span>Jobs</span>
                    </NavLink>
                    <NavLink
                      href="/appstatus"
                      className="flex items-center space-x-1"
                    >
                      <FileText className="h-4 w-4" />
                      <span>Applications</span>
                    </NavLink>
                    <NavLink
                      href="/profile"
                      className="flex items-center space-x-1"
                    >
                      <User className="h-4 w-4" />
                      <span>Profile</span>
                    </NavLink>
                  </>
                )}
                {userType === "company" && (
                  <>
                    <NavLink
                      href="/company"
                      className="flex items-center space-x-1"
                    >
                      <Briefcase className="h-4 w-4" />
                      <span>Dashboard</span>
                    </NavLink>
                    <NavLink
                      href="/company/addjob"
                      className="flex items-center space-x-1"
                    >
                      <FileText className="h-4 w-4" />
                      <span>Post Job</span>
                    </NavLink>
                    <NavLink
                      href="/company/jobdisplay"
                      className="flex items-center space-x-1"
                    >
                      <FileText className="h-4 w-4" />
                      <span>Job List</span>
                    </NavLink>
                  </>
                )}
                <button
                  onClick={logout}
                  className="px-4 py-2 bg-red-100 text-red-600 rounded-full font-medium hover:bg-red-200 transition-colors duration-200"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
