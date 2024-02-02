import { Link } from "react-router-dom";
import { useState } from "react";

const SignIn = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validated = validate(formData);
    setErrors(validated);

    if (Object.keys(validated).length === 0) {
      console.log("FORM SUBMITTED");
      window.location.href = "/home";
    }
  };

  const validate = (data) => {
    let errors = {};

    if (!data.username.trim()) {
      errors.username = "invalid username";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email.trim() || !emailRegex.test(data.email)) {
      errors.email = "invalid email";
    }

    if (!data.password.trim() || data.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }

    if (data.password !== data.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    return errors;
  };

  return (
    <>
      <div className="bg-[#D50D3E] w-full h-screen flex justify-center items-center relative">
        <div className="w-[280px] h-[450px] bg-white rounded-[30px] lg:w-[450px] lg:h-[500px]">
          <div className="flex flex-col gap-5 lg:gap-7 items-center p-5">
            <div>
              <p className="text-[16px] font-bold text-center lg:text-[20px]">
                Sign in
              </p>
            </div>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 lg:gap-8 w-full"
            >
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor=""
                    className="text-[12px] font-bold lg:text-[16px]"
                  >
                    Username
                  </label>
                  {errors.username && (
                    <p className="text-[10px] lg:text-[12px] text-red-600">
                      {errors.username}
                    </p>
                  )}
                </div>

                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  placeholder="Enter username"
                  onChange={handleInputChange}
                  className="placeholder-black font-thin p-[10px] text-[10px] w-full h-[30px] drop-shadow-md rounded-sm lg:text-[12px]"
                />
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor=""
                    className="text-[12px] font-bold lg:text-[16px]"
                  >
                    Email
                  </label>
                  {errors.email && (
                    <p className="text-[10px] lg:text-[12px] text-red-600">
                      {errors.email}
                    </p>
                  )}
                </div>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  placeholder="Enter password"
                  onChange={handleInputChange}
                  className="placeholder-black font-thin p-[10px] text-[10px] w-full h-[30px] drop-shadow-md rounded-sm lg:text-[12px]"
                />
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor=""
                    className="text-[12px] font-bold lg:text-[16px]"
                  >
                    Password
                  </label>
                  {errors.password && (
                    <p className="text-[10px] lg:text-[12px] text-red-600">
                      {errors.password}
                    </p>
                  )}
                </div>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  placeholder="Enter password"
                  onChange={handleInputChange}
                  className="placeholder-black font-thin p-[10px] text-[10px] w-full h-[30px] drop-shadow-md rounded-sm lg:text-[12px]"
                />
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor=""
                    className="text-[12px] font-bold lg:text-[16px]"
                  >
                    Confirm Password
                  </label>
                  {errors.confirmPassword && (
                    <p className="text-[10px] lg:text-[12px] text-red-600">
                      {errors.confirmPassword}
                    </p>
                  )}
                </div>

                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  placeholder="Enter password"
                  onChange={handleInputChange}
                  className="placeholder-black font-thin p-[10px] text-[10px] w-full h-[30px] drop-shadow-md rounded-sm lg:text-[12px]"
                />
              </div>

              <button
                type="submit"
                className="bg-[#D50D3E] h-[30px] font-bold text-[10px] rounded-[8px] text-white lg:text-[12px] lg:w-[100px] w-[75px] self-center"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
