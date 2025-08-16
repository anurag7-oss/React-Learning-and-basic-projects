import React, { useState } from "react";

function Useestate() {
  const [val, setVal] = useState({ name: "Anurag", isBanned: false });
  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen">
      <p>{val.name}</p>
      <p>{val.isBanned.toString()}</p>
      <button
        className={`px-2 py-1 w-fit ${val.isBanned ? " bg-blue-500":"  bg-red-500"} rounded-full mt-5`}
        onClick={() => setVal({ ...val, isBanned:!val.isBanned})}
      >
        
        Change
      </button>
    </div>
  );
}

export default Useestate;
