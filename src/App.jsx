import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import FormLogin from "./components/FormLogin";
import FormRegister from "./components/FormRegister";
import LandingPage from "./pages/LandingPage";
import CourseDetail from "./pages/CourseDetail";
import MyCourses from "./pages/MyCourses";
import toast, { Toaster } from "react-hot-toast";
import { login, logout, register } from "./services/api";
import { useEffect, useState } from "react";
import TopNavigationBar from "./components/TopNavigationBar";
import { jwtDecode } from "jwt-decode";

const App = () => {
  const navigate = useNavigate();
  //untuk mengecek apakah user sedang login atau tidak
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  //untuk menyimpan username yang diambil dari cookie
  const [username, setUsername] = useState(null);

  const [dataLogin, setDataLogin] = useState({
    email: "",
    password: "",
  });
  const [dataRegister, setDataRegister] = useState({
    username: "",
    fullname: "",
    phoneNumber: "",
    email: "",
    password: "",
    repeatPassword: "",
  });
  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    try {
      if (dataLogin.email === "" || dataLogin.password === "") {
        toast.error("Please fill all the fields");
        return;
      }
      const response = await login(dataLogin);
      console.log(response);
      if (response.status === "success") {
        //decode data
        const { username: usernameData } = jwtDecode(response.data);
        console.log(username);
        setIsAuthenticated(true);
        //penyimpanan ke local storage
        localStorage.setItem("isAuthenticated", true);
        //menyimpan decode ke storage + state
        localStorage.setItem("course-app-username", usernameData);
        setUsername(usernameData);
      }
      toast.success(response.message);
    } catch (error) {
      console.error(error.message);
      toast.error(error.message);
    }
  };
  const handleSubmitRegister = async (e) => {
    e.preventDefault();
    try {
      if (
        dataRegister.username === "" ||
        dataRegister.fullname === "" ||
        dataRegister.phoneNumber === "" ||
        dataRegister.email === "" ||
        dataRegister.password === "" ||
        dataRegister.repeatPassword === ""
      ) {
        toast.error("Please fill all the fields");
        return;
      }
      console.log(dataRegister);
      const response = await register({
        username: dataRegister.username,
        fullname: dataRegister.fullname,
        phoneNumber: dataRegister.phoneNumber,
        email: dataRegister.email,
        password: dataRegister.password,
      });
      console.log(response);
      toast.success(response.message);
      navigate("/login");
    } catch (error) {
      console.error(error.message);
      toast.error(error.message);
    }
  };
  const handleLogout = async () => {
    await logout();
    localStorage.clear();
    setUsername(null);
    setIsAuthenticated(false);
    navigate("/");
  };
  //untuk cek selalu di use effect
  useEffect(() => {
    if (localStorage.getItem("isAuthenticated")) {
      console.log("authenticated");
      setIsAuthenticated(true);
      setUsername(localStorage.getItem("course-app-username"));
    }
  }, []);

  return (
    <>
      <TopNavigationBar
        isAuthenticated={isAuthenticated}
        username={username}
        handleLogout={handleLogout}
      />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* logic ketika login tidak bisa mengakses halaman login dan register */}
        {!isAuthenticated ? (
          <Route
            path="/login"
            element={
              <FormLogin
                data={dataLogin}
                setData={setDataLogin}
                handleSubmitLogin={handleSubmitLogin}
                setIsAuthenticated={setIsAuthenticated}
              />
            }
          />
        ) : (
          <Route path="/login" element={<Navigate to="/" />}></Route>
        )}
        {!isAuthenticated ? (
          <Route
            path="/register"
            element={
              <FormRegister
                data={dataRegister}
                setData={setDataRegister}
                handleSubmitRegister={handleSubmitRegister}
              />
            }
          />
        ) : (
          <Route path="/register" element={<Navigate to="/" />}></Route>
        )}

        <Route
          path="/course-detail/:id"
          element={<CourseDetail isAuthenticated={isAuthenticated} />}
        />
        <Route path="/my-courses" element={<MyCourses />} />
      </Routes>
      <Toaster position="top-center" />
    </>
  );
};

export default App;
