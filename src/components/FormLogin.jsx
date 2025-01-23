/* eslint-disable react/prop-types */
import formBG from "../assets/images/marvin-meyer-SYTO3xs06fU-unsplash.jpg";
import SubmitButton from "./SubmitButton";
const FormLogin = ({ data, setData, handleSubmitLogin }) => {
  return (
    <section
      className="h-screen bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${formBG})` }}
    >
      <div className="container mx-auto py-5 px-[7%]">
        <div className="row flex justify-center items-center flex-col mt-16 mx-auto bg-slate-200 p-10 md:flex md:justify-center md:items-center md:flex-row md:gap-10 md:mx-auto md:mt-24 lg:w-full lg:mt-32 rounded-md">
          <div className="form-login flex flex-row justify-center items-center gap-20 md:gap-2">
            <div className="hidden md:block ">
              <img
                src="https://img.pikbest.com/png-images/20211011/focused-people-studying-in-online-school_6139981.png!bw700"
                alt=""
                className="w-full"
              />
            </div>
            <div className="md:flex md:flex-col md:w-full lg:w-1/2">
              <div className="img-login">
                <img
                  src="https://phinconacademy.com/front/assets/img/academy-logo.png"
                  alt=""
                  className="w-3/6 mx-auto md:w-2/5 lg:w-1/2"
                />
              </div>
              <form onSubmit={handleSubmitLogin}>
                <div className="form-group p-3">
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
                    placeholder="Enter Username"
                    className="p-2 rounded-sm w-full opacity-80 mt-1 text-md tracking-wide md:flex md:flex-col md:justify-center md:w-full"
                    required
                  />
                </div>
                <div className="form-group p-3 md:flex md:flex-col">
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
                    className="p-2 rounded-sm w-full opacity-80 mt-1 text-md"
                    required
                  />
                </div>
                <SubmitButton />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormLogin;
