import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';
import logo from "../../public/contact-us.png";

function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    console.log("gndfjgbdf"); 
    // try {
      const res = await axios.post("http://localhost:4001/user/contact", userInfo, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log("gndfjgbdf"); 
      if (res.data) {
        toast.success('Message sent successfully!');
        // document.getElementById("contact1").close();
      }
    // } catch (err) {
      // if (err.response) {
      //   console.log(err);
      //   toast.error("Error: " + err.response.data.message);
      // }
    // }
  };

  return (
    <div className='display flex items-center justify-center gap-8' id="contact1">
      <div>
        <img src={logo} className='w-[400px] h-[400px] hidden md:block' alt="Contact Us" />
      </div>
      <div className='h-screen display flex items-center justify-center'>
        <form className="w-[350px]" onSubmit={handleSubmit(onSubmit)}>
          <h1 className='mb-[20px] text-center font-bold text-3xl'>CONTACT US</h1>

          <div className="mb-5">
            <label htmlFor="name" className="mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
            <input
              type="text"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Your Name"
              {...register('name', { required: true })}
              required
            />
            {errors.name && <p className="text-red-500 text-sm">This field is required</p>}
          </div>

          <div className="mb-5">
            <label htmlFor="email" className="mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@flowbite.com"
              {...register('email', { required: true })}
              required
            />
            {errors.email && <p className="text-red-500 text-sm">This field is required</p>}
          </div>

          <div className="mb-5">
            <label htmlFor="message" className="mb-2 text-sm font-medium text-gray-900 dark:text-white">Message</label>
            <textarea
              id="message"
              className="text-start h-[100px] items-start bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Type your message"
              {...register('message', { required: true })}
              required
            />
            {errors.message && <p className="text-red-500 text-sm">This field is required</p>}
          </div>

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact;