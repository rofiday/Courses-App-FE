/* eslint-disable react/prop-types */
import formBG from "../assets/images/marvin-meyer-SYTO3xs06fU-unsplash.jpg";
import SubmitButton from "./SubmitButton";
const FormRegister = ({ data, setData, handleSubmitRegister }) => {
  return (
    <section
      className="h-screen bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${formBG})` }}
    >
      <div className="container mx-auto py-4 px-[7%]">
        <div className="row flex justify-center items-center mt-[6rem] md:mt-[7rem] flex-col mx-auto bg-slate-100 md:p-1 md:flex md:justify-center md:items-center md:flex-row md:mx-auto lg:w-full lg:mt-[5rem] rounded-md ">
          <div className="form-login md:flex md:flex-row md:justify-center md:items-center md:w-full md:mt-1 px-2">
            <div className="md:flex md:flex-col md:w-full lg:w-1/2 ">
              <div className="img-login">
                <img
                  src="https://phinconacademy.com/front/assets/img/academy-logo.png"
                  alt=""
                  className="w-1/3 mx-auto md:w-1/6 lg:w-1/3 py-2"
                />
              </div>
              <form onSubmit={handleSubmitRegister}>
                <div className="form-group p-1">
                  <label htmlFor="username" className="text-md">
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    value={data.username}
                    onChange={(e) => {
                      setData({ ...data, username: e.target.value });
                    }}
                    placeholder="Enter Username"
                    required
                    className="p-2 rounded-sm w-full opacity-80 mt-1 text-md tracking-wide md:flex md:flex-col md:justify-center md:w-full"
                  />
                </div>
                <div className="form-group p-1">
                  <label htmlFor="fullname" className="text-md">
                    Fullname
                  </label>
                  <input
                    type="text"
                    id="fullname"
                    value={data.fullname}
                    onChange={(e) => {
                      setData({ ...data, fullname: e.target.value });
                    }}
                    placeholder="Enter Fullname"
                    required
                    className="p-2 rounded-sm w-full opacity-80 mt-1 text-md tracking-wide md:flex md:flex-col md:justify-center md:w-full"
                  />
                </div>
                <div className="form-group p-1">
                  <label htmlFor="phoneNumber" className="text-md">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id="phoneNumber"
                    value={data.phoneNumber}
                    onChange={(e) => {
                      setData({ ...data, phoneNumber: e.target.value });
                    }}
                    placeholder="Enter Phone Number"
                    required
                    className="p-2 rounded-sm w-full opacity-80 mt-1 text-md tracking-wide md:flex md:flex-col md:justify-center md:w-full"
                  />
                </div>
                <div className="form-group p-1">
                  <label htmlFor="email" className="text-md">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={data.email}
                    onChange={(e) => {
                      setData({ ...data, email: e.target.value });
                    }}
                    placeholder="Enter Email"
                    required
                    className="p-2 rounded-sm w-full opacity-80 mt-1 text-md tracking-wide md:flex md:flex-col md:justify-center md:w-full"
                  />
                </div>
                <div className="form-group p-1 md:flex md:flex-col">
                  <label htmlFor="password" className="text-md tracking-wide">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={data.password}
                    onChange={(e) => {
                      setData({ ...data, password: e.target.value });
                    }}
                    placeholder="Enter password"
                    required
                    className="p-2 rounded-sm w-full opacity-80 mt-1 text-md"
                  />
                </div>
                <div className="form-group p-1 md:flex md:flex-col">
                  <label
                    htmlFor="repeat-password"
                    className="text-md tracking-wide"
                  >
                    Repeat Password
                  </label>
                  <input
                    type="password"
                    id="repeat-password"
                    value={data.repeatPassword}
                    onChange={(e) => {
                      setData({ ...data, repeatPassword: e.target.value });
                    }}
                    placeholder="Enter password"
                    required
                    className="p-2 rounded-sm w-full opacity-80 mt-1 text-md"
                  />
                </div>
                <SubmitButton />
              </form>
            </div>
            <div className="lg:block md:hidden hidden">
              <img
                src="https://img.pikbest.com/png-images/20211011/focused-people-studying-in-online-school_6139981.png!bw700"
                alt=""
                className="w-full object-cover object-center lg:mt-10 lg:text-center lg:w-3/4 lg:mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormRegister;
