import { FiUnlock } from "react-icons/fi";
import { logo } from "../assets";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center h-screen flex-col">
      <h1 className="appname text-4xl opacity-20 -z-10 mb-3">Yourba</h1>
      <div className="bg-white p-8 rounded shadow-lg  overflow-hidden relative ">
        <div className="h-5 bg-brand absolute w-full -top-4 right-0"></div>

        <div className="flex flex-row-reverse justify-end items-center mb-6">
          <h2 className="text-2xl  text-brand inline">Login</h2>
          <img
            src={logo}
            alt="app logo"
            className="w-10 h-10 object-cover"
          />
        </div>
        <form className="w-full flex flex-col gap-5">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Username</span>
            </label>

            <input
              type="text"
              placeholder="@username"
              className="input w-full max-w-xs bg-gray-100"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>

            <input
              type="password"
              placeholder="********"
              className="input w-full max-w-xs bg-gray-100"
            />
          </div>
          <button
            type="submit"
            className="btn bg-cta font-semibold text-white outline-none border-none shadow">
            Login
            <FiUnlock />
          </button>
        </form>
        <p className="text-sm text-gray-600 mt-4">
          Don't have an account?{" "}
          <span className="text-cta opacity-70">Create one now!</span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;

{
  /* <Link className="">Create one now!</Link>; */
}
