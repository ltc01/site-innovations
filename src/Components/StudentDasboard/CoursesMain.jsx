import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using react-router for navigation

const CoursesMain = () => {
  const courses = [
    { name: 'Course 1', progress: 50, image: 'https://miro.medium.com/v2/resize:fit:720/1*aBQrwweY6-qFVWeizUrTnQ.png' },
    { name: 'Course 2', progress: 100, image: 'https://miro.medium.com/v2/resize:fit:720/1*aBQrwweY6-qFVWeizUrTnQ.png' },
    { name: 'Course 3', progress: 10, image: 'https://miro.medium.com/v2/resize:fit:720/1*aBQrwweY6-qFVWeizUrTnQ.png' }
  ];

  return (
    <div className="w-full backdrop-filter bg-indigo-500 shadow-border backdrop-blur-lg dark:text-white dark:border dark:border-white h-fit mx-auto p-4 rounded-lg shadow-md">
      <h2 className="text-2xl text-white font-bold mb-5 text-center">Courses</h2>
      
      <div className="flex flex-col max-h-full gap-6">
        {courses.map((course, index) => (
          <div key={index} className=" w-full flex text-black flex-col bg-white dark:border dark:border-white lg:flex-row items-center gap-4 shadow-lg rounded-3xl py-3 px-4">
            
            {/* Course Image */}
            <img 
              src={course.image} 
              alt={course.name} 
              className="w-16 h-16 rounded-full object-cover"
            />

            {/* Course Info */}
            <div className="flex flex-col w-full">
              <h3 className="text-lg font-semibold">{course.name}</h3>

              {/* Progress Bar */}
              <div className="h-4 bg-black rounded-full mt-1">
                <div 
                  className={`h-full rounded-e-3xl ${course.progress === 100 ? 'bg-gradient-to-r from-green-800 to-green-500' : 'bg-gradient-to-r from-indigo-800 to-indigo-500'}`}
                  style={{ width: `${course.progress}%` }}
                ></div>
              </div>
              <p className="text-sm mt-4 font-medium">Progress: {course.progress}%</p>
            </div>
          </div>
        ))}
      </div>

      {/* Link to All Courses */}
      <div className="mt-8 text-center">
        <Link to="/courses" className="text-white hover:underline">
          View All Courses
        </Link>
      </div>
    </div>
  );
};

export default CoursesMain;

// import React from 'react';
// import { Link } from 'react-router-dom';

// const CoursesMain = () => {
//   const courses = [
//     { 
//       name: 'Course 1', 
//       progress: 50, 
//       teacher: 'John Doe', 
//       startDate: '2024-09-01', 
//       endDate: '2024-12-15', 
//       image: 'https://miro.medium.com/v2/resize:fit:720/1*aBQrwweY6-qFVWeizUrTnQ.png' 
//     },
//     { 
//       name: 'Course 2', 
//       progress: 100, 
//       teacher: 'Jane Smith', 
//       startDate: '2024-10-01', 
//       endDate: '2025-01-15', 
//       image: 'https://miro.medium.com/v2/resize:fit:720/1*aBQrwweY6-qFVWeizUrTnQ.png' 
//     },
//     { 
//       name: 'Course 3', 
//       progress: 10, 
//       teacher: 'Alice Johnson', 
//       startDate: '2024-08-20', 
//       endDate: '2024-11-30', 
//       image: 'https://miro.medium.com/v2/resize:fit:720/1*aBQrwweY6-qFVWeizUrTnQ.png' 
//     }
//   ];

//   return (
//     <div className="w-full bg-slate-100 mx-auto p-4 rounded-lg shadow-md">
//       <h2 className="text-2xl font-bold mb-5 text-center">Courses</h2>

//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white rounded-lg shadow-md">
//           <thead>
//             <tr className="bg-gray-200 text-gray-700">
//               <th className="p-3 text-left">Image</th>
//               <th className="p-3 text-left">Course Name</th>
//               <th className="p-3 text-left">Teacher</th>
//               <th className="p-3 text-left">Start Date</th>
//               <th className="p-3 text-left">End Date</th>
//               <th className="p-3 text-left">Progress</th>
//             </tr>
//           </thead>
//           <tbody>
//             {courses.map((course, index) => (
//               <tr key={index} className="border-b">
//                 {/* Image Column */}
//                 <td className="p-3">
//                   <img 
//                     src={course.image} 
//                     alt={course.name} 
//                     className="w-16 h-16 rounded-full object-cover"
//                   />
//                 </td>

//                 {/* Course Name */}
//                 <td className="p-3">
//                   <h3 className="text-lg font-semibold">{course.name}</h3>
//                 </td>

//                 {/* Teacher */}
//                 <td className="p-3">
//                   <p>{course.teacher}</p>
//                 </td>

//                 {/* Start Date */}
//                 <td className="p-3">
//                   <p>{course.startDate}</p>
//                 </td>

//                 {/* End Date */}
//                 <td className="p-3">
//                   <p>{course.endDate}</p>
//                 </td>

//                 {/* Progress Bar */}
//                 <td className="p-3">
//                   <div className="w-full bg-gray-100 rounded-full">
//                     <div 
//                       className={`h-4 rounded-full ${course.progress === 100 ? 'bg-green-500' : 'bg-blue-500'}`}
//                       style={{ width: `${course.progress}%` }}
//                     ></div>
//                   </div>
//                   <p className="text-sm mt-2">{course.progress}%</p>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Link to All Courses */}
//       <div className="mt-8 text-center">
//         <Link to="/courses" className="text-blue-500 hover:underline">
//           View All Courses
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default CoursesMain;