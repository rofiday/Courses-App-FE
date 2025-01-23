import { useEffect, useState } from "react";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { Link } from "react-router-dom";
import { getAllCourses } from "../services/api";

const LandingPage = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    (async () => {
      setCourses(await getAllCourses());
      console.log(await getAllCourses());
    })();
  }, []);

  return (
    <>
      {/* section navbar start */}
      {/* section navbar end */}
      {/* section home start */}
      <section className="home px-[6%]">
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-center h-screen gap-8 md:flex md:flex-col md:items-center lg:flex lg:flex-row md:h-screen">
            <div className="img-home">
              <img
                src="https://guruinovatif.s3.ap-southeast-1.amazonaws.com/4877/1.jpg"
                alt="logo"
                className="bg-cover bg-center object-cover object-center mt-12 mx-auto md:w-3/4 lg:w-full min-w-screen"
              />
            </div>
            <div className="content-home text-start md:text-justify">
              <div className="mb-2">
                <p className="md:text-xl text-slate-600 leading-7">
                  Phincon Academy hadir sebagai delegasi dari Phincon IT
                  Consultant yang menyediakan solusi dan layanan IT terbaik.
                </p>
              </div>
              <div>
                <p className="md:text-xl text-slate-600 leading-7">
                  Membawa dedikasi yang sama, Phincon Academy hadir dengan
                  nilai-nilai luhur dalam mencetak generasi cemerlang melalui
                  pendidikan dalam dunia IT.
                </p>
              </div>
              <div className="md:flex uppercase tracking-wide gap-2 mt-5">
                <h3 className="md:text-xl lg:text-sm lg:font-bold text-blue-600 leading-7">
                  Phincon Academy Part of
                </h3>
                <h1 className="md:text-xl lg:text-sm lg:font-bold leading-7 text-green-500">
                  PHINTRACO GROUP
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section home end */}

      {/* section courses start */}
      <section className=" px-[6%] pb-6">
        <h2 className="text-3xl font-semibold text-center pb-5">
          Course<span className="text-green-500">&apos;s</span>
        </h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          {courses?.data?.map((course) => (
            <div
              key={course.id}
              className="card-img shadow-md rounded-md p-5 flex items-center justify-center flex-col"
            >
              <img
                src={course.imageUrl}
                alt="course-img"
                className="object-cover object-center w-[250px] h-[250px] bg-center"
              />
              <h3 className="text-md my-5">{course.name}</h3>
              <Link
                to={`/course-detail/${course.id}`}
                className="text-md bg-blue-500 text-white hover:bg-blue-600 px-6 py-1 rounded-md w-full text-center"
                onClick={() => {
                  console.log("test");
                }}
              >
                Details
              </Link>
            </div>
          ))}
        </div>
      </section>
      {/* section courses end */}

      {/* section location start */}
      <section className="pt-32 px-[6%] pb-6">
        <div className="container mx-auto md:flex md:flex-col md:justify-center lg:flex lg:flex-row bg-white shadow-2xl rounded-3xl border-2">
          <div className="flex flex-col justify-center items-center  text-center md:block md:text-left md:p-5 md:leading-relaxed">
            <h2 className="text-blue-600 font-bold text-lg md:text-4xl my-2">
              Location
            </h2>
            <p className="text-slate-700 text-md md:text-2xl my-2">
              Phincon Academy Campus, Gandaria 8 Office Tower, 8th Floor.
            </p>
            <p className="text-slate-500 md:text-xl my-2">
              Jl. Sultan Iskandar Muda No.8 RT.10/RW.6, Gandaria, Kec. Kebayoran
              Lama, Jakarta Selatan 12240
            </p>
            <div className="flex flex-col items-center text-base md:flex md:flex-row md:items-center gap-2 mb-2 text-slate-500 md:text-xl my-2">
              <AiOutlineMail className="md:text-2xl" />
              <p>Email</p>
              <p>academy@phincon.com</p>
              <AiOutlinePhone className="md:text-2xl" />
              <p>Phone</p>
              <p>021-29851699</p>
            </div>
          </div>
          <div>
            <img
              src="https://phinconacademy.com/front/assets/img/location-bg.png"
              alt="phincon-loc"
              className="w-full object-cover object-center"
            />
          </div>
        </div>
      </section>
      {/* section location end */}
      {/* section footer start */}
      <footer className=" border-t p-5 shadow-lg bg-white">
        <div
          className="container mx-auto flex flex-col justify-center items-center md:flex 
        md:flex-row md:items-center md:justify-between"
        >
          <img
            src="https://phinconacademy.com/front/assets/img/academy-logo.png"
            alt="phincon-logo"
            className="w-1/6 md:w-1/5 lg:w-1/12 my-2"
          />
          <div className="flex items-center gap-5 text-center my-2">
            <Link to="/home">Home</Link>
            <Link to="/my-courses">MyCourses</Link>
          </div>
          <div>
            <p>&copy; 2025 Phincon Academy</p>
          </div>
        </div>
      </footer>
      {/* section footer end */}
    </>
  );
};

export default LandingPage;
