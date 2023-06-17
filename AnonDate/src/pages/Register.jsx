import { useState } from "react";
import { FiUnlock } from "react-icons/fi";
import { FaCamera } from "react-icons/fa";
import { logo } from "../assets";

const Register = () => {
  const [step, setStep] = useState(1);
  const [PasswordMatchError, setPasswordMatchError] = useState(false);
  const [requiredError, setRequiredError] = useState(false);
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    bio: "",
    dob: "",
    gender: "",
    location: "",
    profilePicture: null,
  });

  const handleNextStep = (e) => {
    let requiredFields = [];
    switch (step) {
      case 1:
        requiredFields = ["username", "email", "password", "confirmPassword"];
        break;
      case 2:
        requiredFields = ["dob", "gender", "location"];
        break;
      // Add cases for other steps if needed
      default:
        break;
    }

    // Check if all required fields are filled
    const requiredFieldsFilled = requiredFields.every(
      (fieldName) => userData[fieldName] !== ""
    );

    // Check if passwords match (only for step 1)
    const passwordsMatch = step === 1 ? password === confirmPassword : true;

    if (!passwordsMatch) {
      setPasswordMatchError(true);
      return;
    }

    if (!requiredFieldsFilled) {
      setRequiredError(true);
      return;
    }

    setStep(step + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    setUserData((prevData) => ({
      ...prevData,
      profilePicture: URL.createObjectURL(file),
    }));
  };

  const {
    username,
    email,
    password,
    confirmPassword,
    bio,
    dob,
    gender,
    location,
    profilePicture,
  } = userData;

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input
                required
                type="text"
                name="username"
                placeholder="Enter username"
                className="input w-full  bg-gray-100 h-10"
                value={username}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                required
                type="email"
                name="email"
                placeholder="Enter email"
                className="input w-full  bg-gray-100 h-10"
                value={email}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                required
                type="password"
                name="password"
                placeholder="Enter password"
                className="input w-full  bg-gray-100 h-10"
                value={password}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                required
                type="password"
                name="confirmPassword"
                placeholder="Confirm password"
                className={`input w-full  bg-gray-100 h-10 ${
                  PasswordMatchError && "border-2 border-cta"
                }`}
                value={confirmPassword}
                onChange={handleInputChange}
              />
              {PasswordMatchError && (
                <label className="label ">
                  <span className="label-text-alt text-cta">
                    Password mismatch
                  </span>
                </label>
              )}
            </div>
          </>
        );
      case 2:
        return (
          <>
            <div className="flex justify-center relative w-full">
              <img
                src={profilePicture ? profilePicture : logo}
                alt="proflie picture"
                className="w-32 h-32 bg-white rounded-full ring-2 ring-brand object-cover"
              />
              <div className="form-control w-full hidden">
                <label className="label">
                  <span className="label-text">Profile Picture</span>
                </label>
                <input
                  required
                  type="file"
                  id="profilePictureInput"
                  accept="image/*"
                  name="profilePicture"
                  className="input w-full  bg-gray-100 h-10 hidden"
                  onChange={handleProfilePictureChange}
                />
              </div>
              <button
                className="-ml-4 mt-20"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("profilePictureInput").click();
                }}>
                <FaCamera className="h-10 w-10 " />
              </button>
            </div>

            <div className="md:grid md:grid-cols-2 gap-2">
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text">Date of Birth</span>
                </label>
                <input
                  required
                  type="date"
                  name="dob"
                  className="input w-full  bg-gray-100 h-10 "
                  value={dob}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Gender</span>
                </label>
                <select
                  name="gender"
                  className="input w-full  bg-gray-100 h-10"
                  value={gender}
                  onChange={handleInputChange}>
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-control w-full md:col-span-2 ">
                <label className="label">
                  <span className="label-text">Location</span>
                </label>
                <input
                  required
                  type="text"
                  name="location"
                  placeholder="Enter your location"
                  className="input w-full  bg-gray-100 h-10"
                  value={location}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-control w-full md:col-span-2">
                <label className="label">
                  <span className="label-text">Bio</span>
                </label>
                <textarea
                  type="text"
                  name="bio"
                  placeholder="Enter your bio..."
                  className="input w-full  bg-gray-100 h-20 py-2"
                  value={bio}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex items-center justify-center h-screen flex-col w-screen px-2 y-4 bg-gray-100 py-5">
      <div className="bg-white p-3  md:mt-0 md:p-8 rounded shadow-lg overflow-hidden relative md:w-[450px] w-full h-full ">
        <div className="h-5 bg-brand absolute w-full -bottom-4 right-0"></div>

        <div className="flex flex-row justify-between items-center mb-6">
          <h1 className="appname text-4xl opacity-20">Yourba</h1>
          <div className="flex items-center">
            <h2 className="text-2xl text-brand inline">Register</h2>
            <img
              src={logo}
              alt="app logo"
              className="w-10 h-10 object-cover"
            />
          </div>
        </div>

        <form className="w-full flex flex-col gap-5">
          {requiredError && (
            <label className="label p-0">
              <span className="label-text-alt text-cta">
                ***All fields are required***
              </span>
            </label>
          )}
          {renderStepContent()}

          <div className="flex justify-between">
            {step > 1 && (
              <button
                type="button"
                onClick={handlePreviousStep}
                className="btn btn-outline btn-sm">
                Previous
              </button>
            )}

            {step < 2 ? (
              <button
                type="button"
                onClick={handleNextStep}
                className="btn bg-cta font-semibold text-white outline-none border-none shadow">
                Next
                <FiUnlock />
              </button>
            ) : (
              <button
                type="submit"
                onClick={handleSubmit}
                className="btn bg-cta font-semibold text-white outline-none border-none shadow">
                Register
                <FiUnlock />
              </button>
            )}
          </div>
        </form>

        <p className="text-sm text-gray-600 mt-4 w-full text-center">
          Already have an account?{" "}
          <span className="text-cta opacity-70">Login now!</span>
        </p>
      </div>
    </div>
  );
};

export default Register;
