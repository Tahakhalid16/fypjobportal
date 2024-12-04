// import React from "react";
// import Link from "next/link";
// import { useAuth } from "../src/app/context/AuthContext";

// const AsideBar = () => {
//   return (
//     <aside className="hidden md:block w-64 bg-gray-800 text-white h-screen sticky top-0">
//       <div className="p-4">
//         <h5 className="text-lg font-bold text-center mb-6">Username</h5>
//         <ul className="space-y-4">
//           <li>
//             <Link
//               href="/company"
//               className="block py-2 px-4 rounded-lg hover:bg-gray-700"
//             >
//               Dashboard
//             </Link>
//           </li>
//           <li>
//             <Link
//               href="/company/addjob"
//               className="block py-2 px-4 rounded-lg hover:bg-gray-700"
//             >
//               Post Job
//             </Link>
//           </li>
//           <li>
//             <Link
//               href="/company/jobdisplay"
//               className="block py-2 px-4 rounded-lg hover:bg-gray-700"
//             >
//               Job List
//             </Link>
//           </li>
//           <li>
//             <Link
//               href="/company/app_list"
//               className="block py-2 px-4 rounded-lg hover:bg-gray-700"
//             >
//               Request
//             </Link>
//           </li>
//           <li>
//             <Link
//               href="/company/profile"
//               className="block py-2 px-4 rounded-lg hover:bg-gray-700"
//             >
//               Profile
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </aside>
//   );
// };

// export default AsideBar;
import React from "react";
import Link from "next/link";
import { useAuth } from "../src/app/context/AuthContext";

const AsideBar = () => {
  const { username } = useAuth(); // Access username from context

  return (
    <aside className="hidden md:block w-64 bg-gray-800 text-white h-screen sticky top-0">
      <div className="p-4">
        {/* Dynamically display username */}
        <h5 className="text-lg font-bold text-center mb-5">{username || "Guest"}</h5>
        <ul className="space-y-4">
          <li>
            <Link
              href="/company"
              className="block py-2 px-4 rounded-lg hover:bg-gray-700"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              href="/company/addjob"
              className="block py-2 px-4 rounded-lg hover:bg-gray-700"
            >
              Post Job
            </Link>
          </li>
          <li>
            <Link
              href="/company/jobdisplay"
              className="block py-2 px-4 rounded-lg hover:bg-gray-700"
            >
              Job List
            </Link>
          </li>
          <li>
            <Link
              href="/company/app_list"
              className="block py-2 px-4 rounded-lg hover:bg-gray-700"
            >
              Request
            </Link>
          </li>
          <li>
            <Link
              href="/company/profile"
              className="block py-2 px-4 rounded-lg hover:bg-gray-700"
            >
              Profile
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default AsideBar;
