import { useEffect, useState } from "react";
import { getUsersCoursesByUserId } from "../services/api";

const MyCourses = () => {
  const [usersCourses, setUsersCourses] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        setUsersCourses(await getUsersCoursesByUserId());
        console.log(await getUsersCoursesByUserId());
      } catch (error) {
        console.error(error.message);
        throw new Error(error.message);
      }
    })();
  }, []);
  return (
    <section className="h-screen mt-32">
      <h1 className="text-center text-3xl font-semibold">
        <span className="text-green-500">My</span>{" "}
        <span className="text-blue-500">Courses</span>
      </h1>
      {usersCourses?.data?.map((userCourse) => (
        <div
          className="container mx-auto mt-10 flex flex-col items-center md:flex-row md:justify-center md:gap-2 shadow-xl bg-white p-2 border-2"
          key={userCourse.id}
        >
          <div className="w-full md:w-1/2 lg:w-1/3">
            <img
              src={userCourse.courseImage}
              alt="js"
              className="w-full h-[200px] object-cover rounded-md"
            />
          </div>
          <div className="w-full md:w-1/2 lg:w-2/3 p-4 md:p-0 flex flex-col items-center justify-center">
            <h2 className="text-center text-xl font-bold text-blue-500">
              {userCourse.courseName}
            </h2>
            <p className="mt-2 text-justify text-slate-600">
              {userCourse.courseDescription.slice(0, 200)}...
            </p>
            <button className="mt-4 bg-blue-500 p-2 rounded-sm text-white hover:bg-blue-600 w-full md:w-auto">
              {new Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "long",
                day: "2-digit",
              }).format(new Date(userCourse.schedule.startDate))}{" "}
              -{" "}
              {new Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "long",
                day: "2-digit",
              }).format(new Date(userCourse.schedule.endDate))}
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default MyCourses;
