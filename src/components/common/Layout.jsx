import React from "react";

export default function Layout({ children }) {
  return (
    <div className=" py-5 flex mt-[150px] border-solid border-[2px] border-black  mx-auto  w-[450px] h-[500px] shadow-2xl">
      {children}
    </div>
  );
}
