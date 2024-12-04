// import React from "react";

// const DashTile = ({ title, value, icon, bgColor }) => {
//   return (
//     <div
//       className={`rounded-lg shadow-lg p-4 flex items-center justify-between text-white ${bgColor} transition-transform transform hover:-translate-y-2`}
//     >
//       <div>
//         <h6 className="text-sm uppercase font-semibold opacity-80">{title}</h6>
//         <h3 className="text-2xl font-bold mt-2">{value}</h3>
//       </div>
//       <div className="text-4xl opacity-80">{icon}</div>
//     </div>
//   );
// };

// export default DashTile;
import React from "react";

const DashTile = ({ title, value, icon, bgColor }) => {
  return (
    <div
      className={`p-5 border-l-4 ${bgColor} text-gray-900 rounded-lg flex flex-col items-center justify-center transform transition-all hover:scale-105 duration-300`}
    >
      <div className="text-4xl mb-3">{icon}</div>
      <h6 className="text-xs font-semibold text-opacity-80 uppercase">{title}</h6>
      <h3 className="text-xl font-bold">{value}</h3>
    </div>
  );
};

export default DashTile;


