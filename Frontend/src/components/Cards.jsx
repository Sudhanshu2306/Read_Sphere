import React from "react";

function Cards({ item }) {
  // console.log(item);
  let x = (item.category === "Free") ? "Read" : "Buy now";
  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
          <figure>
            <img src={item.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge bg-green-500 border-zinc-600">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">₹{item.price}</div>
              <div className=" cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-green-700 hover:text-black font-bold duration-200">
                {x}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;