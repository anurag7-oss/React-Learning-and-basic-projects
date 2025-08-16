import React, { useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

function UsestateAdv() {
    const [val,setVal]=useState(true);
  return (
    <div className=" flex justify-center items-center w-screen min-h-screen  ">
      <div className=" relative flex  w-60 h-32 bg-gray-400 rounded-md overflow-hidden">
        <img
          className={` shrink-0 w-full h-full  object-cover ${val===true?"-translate-x-[0%]":'-translate-x-[100%] '} transition-transform  ease-in-out `}
          src="https://plus.unsplash.com/premium_photo-1711407243278-b05bb4957d4c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <img
          className={` shrink-0 w-full h-full  object-cover ${val===true?"-translate-x-[0%]":'-translate-x-[100%]'} transition-transform ease-in-out`}
          src="https://images.unsplash.com/photo-1755133314246-2103970d4726?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <span onClick={()=>setVal(!val)} className="  w-10 h-10 bg-[#dadada5d] absolute left-1/2 -translate-x-1/2 -translate-y-1/2  bottom-[0.5%] flex justify-center items-center rounded-full">
          <FaLongArrowAltRight />
        </span>
      </div>
    </div>
  );
}

export default UsestateAdv;
