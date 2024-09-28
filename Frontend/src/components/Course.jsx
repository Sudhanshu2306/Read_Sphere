import React,{ useEffect, useState } from 'react';
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";

function Course() {
    const [book, setBook] = useState([]);
    useEffect(() => {
        const getBook=async () => {
          try {
            const res=await axios.get("http://localhost:4001/book");
            const data = res.data.filter((data) => data.category === "Premium");
            console.log(data);
            setBook(data);
          } catch (error) {
            console.log(error);
          }
        };
        getBook();
      }, []);
    return (
        <>
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-800 dark:text-white">
                <div className="mt-[110px] items-center justify-center text-center">
                    <h1 className="text-2xl md:text-4xl dark:bg-slate-800 dark:text-white">
                        We're delighted to have you{" "}
                        <br/>
                        <span className="text-blue-500">Here! ¯⁠\⁠_⁠(⁠ツ⁠)⁠_⁠/⁠¯</span>
                    </h1>
                    <p className="mt-12 dark:bg-slate-800 dark:text-white items-center">
                    From quiet afternoons with a good book to late-night reading sessions, we provide an endless supply 
                    of stories to keep your mind engaged and your heart inspired. Start your next chapter today.
                    </p>
                    <Link to="/">
                        <button className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 duration-300">
                            Back
                        </button>
                    </Link>
                </div>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-4 dark:bg-slate-800 dark:text-white">
                    {book.map((item) => (
                        <Cards key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Course;
