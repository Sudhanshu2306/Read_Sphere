import React from 'react'
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Login from './Login';
import axios from "axios";
import toast from 'react-hot-toast';
function Signup() {
  const location=useLocation();
  const navigate=useNavigate();
  const from=location.state?.from?.pathname || "/"
  const {
    register,
    handleSubmit,
    formState: { errors },
  }=useForm();

  const onSubmit= async (data)=>{
    const userInfo={
      fullname:data.fullname,
      email:data.email,
      password:data.password,
    }
    await axios.post("http://localhost:4001/user/signup",userInfo)
    .then((res)=>{
      console.log(res.data);
      if(res.data){
        toast.success('Signup successful!');
        navigate(from, {replace:true});
        // <Navigate to="/" />
      }
      localStorage.setItem("users",json.stringify(res.data.user));
    }).catch((err)=>{
      if(err.response){
        console.log(err);
          toast.error("Error: "+err.response.data.message);
      }
    })
  };
  return (
    <div>
        <div className='flex h-screen items-center justify-center'>
            <div className="w-[400px] h-[400px]">
            <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                // onClick={() => document.getElementById("my_modal_3").close()}
                >
                ✕
                </Link>

                <h3 className="font-bold text-lg">Sign Up</h3>
                {/* Email */}
                <div className="mt-4 space-y-2">
                <span>Name</span>
                <br />
                <input
                    type="text"
                    placeholder="Enter your Name"
                    className="w-80 px-3 py-1 border rounded-md outline-none dark:text-black"
                    {...register("fullname", { required: true })}
                />
                <br />
                {errors.fullname && (
                    <span className="text-sm text-red-500">
                    This field is required
                    </span>
                )}
                </div>
                {/* Email */}
                <div className="mt-4 space-y-2">
                <span>Email</span>
                <br />
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-80 px-3 py-1 border rounded-md outline-none dark:text-black"
                    {...register("email", { required: true })}
                />
                <br />
                {errors.email && (
                    <span className="text-sm text-red-500">
                    This field is required
                    </span>
                )}
                </div>
                {/* password */}
                <div className="mt-4 space-y-2">
                <span>Password</span>
                <br />
                <input
                    type="password"
                    placeholder="Enter your password"
                    className="w-80 px-3 py-1 border rounded-md outline-none dark:text-black"
                    {...register("password", { required: true })}
                />
                <br />
                {errors.password && (
                    <span className="text-sm text-red-500">
                    This field is required
                    </span>
                )}
                </div>

                {/* Button */}
                <div className="flex justify-around mt-6">
                <button className="bg-green-500 text-white rounded-md px-3 py-1 hover:bg-green-700 duration-200">
                    Sign Up
                </button>
                <p>
                    Already registered?{" "}
                    <button
                    to="/"
                    className="underline text-blue-500 cursor-pointer"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                    >
                    SignIn
                    </button>{" "}
                    <Login />
                </p>
              </div>
            </form>
           </div>
          </div>
        </div>
    </div>
  )
}

export default Signup