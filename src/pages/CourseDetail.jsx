/* eslint-disable react/prop-types */
import { useNavigate, useParams } from "react-router-dom";
import { getCourseById, registerCourse } from "../services/api";
import { useEffect, useState } from "react";
import NotFound from "../components/NotFound";
import Loading from "../components/Loading";

const CourseDetail = ({ isAuthenticated }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [course, setCourse] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [schedule, setSchedule] = useState("");
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        console.log(await getCourseById(id));
        setCourse(await getCourseById(id));
      } catch (error) {
        console.error(error.message);
        setError(error.message);
        throw new Error(error.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (error) {
    return <NotFound />;
  }

  if (loading) {
    return <Loading loading={loading} />;
  }

  return (
    // <section className="h-screen">
    //   <div className="container mx-auto">
    //     <div className="flex flex-col items-center justify-center h-screen gap-8 md:flex md:flex-col md:items-center lg:flex lg:flex-row md:h-screen">
    //       <div className="img-home">
    //         <img
    //           src={course?.data?.imageUrl}
    //           alt="logo"
    //           className="object-cover object-center mt-12 mx-auto md:w-3/4 lg:w-[300px] lg:h-[300px] min-w-screen md: min-w-screen"
    //         />
    //       </div>
    //       <div className="content-home text-start md:text-justify">
    //         <div className="mb-2">
    //           <p className="md:text-xl text-slate-600 leading-7">
    //             {course?.data?.description}
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="course-schedules">
    //       <div>
    //         <div>
    //           <label htmlFor="course-schedules">Schedules : </label>
    //         </div>
    //         <select name="" id="">
    //           <option value="">-- Pilih Schedules --</option>
    //           <option value="">1 Maret 2025, 09:00</option>
    //           <option value="">7 Maret 2025, 09:00</option>
    //           <option value="">12 Maret 2025, 09:00</option>
    //           <option value="">17 Maret 2025, 09:00</option>
    //           <option value="">22 Maret 2025, 09:00</option>
    //         </select>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <div className="min-h-screen flex justify-center items-center bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden  mt-12 md:mt-12 lg:mt-12">
        <img
          src={course?.data?.imageUrl}
          alt="Course Thumbnail"
          className="w-full h-64 object-cover object-center"
        />
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            {course?.data?.name}
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            {course?.data?.description}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="flex items-center">
              <span className="text-gray-600 font-semibold">Durasi:</span>
              <span className="ml-2 text-gray-800">12 Minggu</span>
            </div>
            <div className="flex items-center">
              <span className="text-gray-600 font-semibold">Tingkat:</span>
              <span className="ml-2 text-gray-800">Pemula - Menengah</span>
            </div>
            <div className="flex items-center">
              <span className="text-gray-600 font-semibold">Harga:</span>
              <span className="ml-2 text-gray-800">Rp 3.500.000</span>
            </div>
            <div className="flex items-center">
              <span className="text-gray-600 font-semibold">Mentor:</span>
              <span className="ml-2 text-gray-800">John Doe</span>
            </div>
          </div>
          <div>
            <label htmlFor="schedule">Schedule: </label>
          </div>
          <select
            name=""
            id="schedule"
            onChange={(e) => setSchedule(e.target.value)}
            className="w-full  text-slate-800 py-3 rounded-md shadow-md transition duration-300 mb-2"
          >
            <option value="">-- Pilih Schedule --</option>
            <option value="03/01/2025|03/07/2025">
              1 Maret 2025 - 7 Maret 2025
            </option>
            <option value="03/08/2025|03/12/2025">
              8 Maret 2025 - 12 Maret 2025
            </option>
            <option value="03/13/2025|03/17/2025">
              13 Maret 2025 - 17 Maret 2025
            </option>
            <option value="03/18/2025|03/22/2025">
              18 Maret 2025 - 22 Maret 2025
            </option>
            <option value="03/23/2025|03/28/2025">
              23 Maret 2025 - 28 Maret 2025
            </option>
          </select>
          <button
            className="w-full bg-blue-600 text-white py-3 rounded-md shadow-md hover:bg-blue-700 transition duration-300"
            onClick={async () => {
              // isAuthenticated ? navigate("/my-courses") : navigate("/login");
              if (schedule === "") {
                alert("Silahkan pilih schedule terlebih dahulu");
                return;
              }
              if (!isAuthenticated) {
                navigate("/login");
              } else {
                //membuat endpoint
                const response = await registerCourse({
                  courseId: course.data.id,
                  schedule,
                });
                console.log(response);
                alert("Anda telah terdaftar di kursus ini");
                navigate("/my-courses");
              }
            }}
          >
            Daftar Sekarang
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
