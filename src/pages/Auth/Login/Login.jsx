import React, { useState } from "react";
import LoginImg from "../../../assets/login/Login.gif";
import { useFormik } from "formik";
import { LoginSchema } from "../../../Validation/Schema/LoginSchema";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AxiosInstance } from "../../../components/Axios/AxiosInstance";
import { ErrorToast, SuccessToast } from "../../../Utils/Toast";

const Login = () => {
  const [eye, seteye] = useState(false);
  const navigate = useNavigate();

  const InitialValues = {
    emailOrphone: "",
    password: "",
  };
  const formik = useFormik({
    initialValues: InitialValues,
    validationSchema: LoginSchema,
    onSubmit: async (values) => {
      const response = await AxiosInstance.post(
        "/Login",
        {
          Email_Adress: values.emailOrphone,
          Password: values.password,
        },
        {
          withCredentials: true, // Include cookies
        }
      );
      if (response.statusText.toLowerCase() == "ok".toLowerCase()) {
        SuccessToast("Login Succesfull!");
        setTimeout(() => {
          navigate("/Home");
        }, 1500);
      } else {
        ErrorToast("Wrong Credentials!");
      }
    },
  });

  return (
    <div className="py-[140px]">
      <div className="container">
        <div className="flex items-center gap-x-16">
          <div className="w-[60%] bg-cyan-50 flex items-center justify-center rounded">
            <img src={LoginImg} alt="" />
          </div>
          <div className="w-[40%]">
            <div className="flex flex-col gap-y-4 ">
              <h2 className="text-[36px] font-medium font-Inter text-text_black000000">
                Login to Exclusive
              </h2>
              <p className="text-[16px] font-normal font-poppins">
                Enter Your Details Below
              </p>
              <form action="" onSubmit={formik.handleSubmit}>
                <input
                  type="text"
                  name="emailOrphone"
                  id="emailOrphone"
                  placeholder="Email or Phone Number"
                  className="border-b-2 border-b-gray-200 w-[60%] py-3"
                  onChange={formik.handleChange}
                  value={formik.values.emailOrphone}
                />

                {formik.touched.emailOrphone && formik.errors.emailOrphone ? (
                  <span className=" block mt-4 text-text_reddb4444">
                    {formik.errors.emailOrphone}
                  </span>
                ) : null}

                <div className="relative">
                  <input
                    type={eye ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder="Password"
                    className="border-b-2 border-b-gray-200 w-[60%] py-3 mt-2"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                  />
                  <span
                    className="absolute right-[40%] top-1/2 -translate-x-1/2 cursor-pointer text-xl"
                    onClick={() => seteye(!eye)}
                  >
                    {eye ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>

                {formik.touched.password && formik.errors.password ? (
                  <span className="block mt-4 text-text_reddb4444">
                    {formik.errors.password}
                  </span>
                ) : null}

                <div className="flex items-center gap-x-[87px] mt-[30px]">
                  <button
                    className="py-4 px-[48px] bg-text_reddb4444 font-poppins font-medium text-text_whiteFAFAFA text-[16px] rounded"
                    type="submit"
                  >
                    Log In
                  </button>
                  <Link
                    to="/ForgotPassword"
                    className="font-poppins font-medium text-text_reddb4444 text-[16px] cursor-pointer"
                  >
                    Forget Password?
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
