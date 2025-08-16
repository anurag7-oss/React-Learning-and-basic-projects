import React from "react";

function Newcard() {
  const data = [
    {
      name: "mahiya we",
      discription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus earum sit atque.",
    },
    {
      name: "enna sona",
      discription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus earum sit atque.",
    },
    {
      name: "4bottel voteka",
      discription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus earum sit atque.",
    },
  ];
  const onClickHandle=()=>{alert('Chal rha hai ')};
  
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-zinc-400 gap-10">
        {data.map((item,index)=>(
            <div className=" w-60 px-3 py-2 bg-zinc-100 rounded-md  ">
        <h1 className="font-semibold text-xl "> {item.name}</h1>
        <p className="text-xs mt-3">
            {item.discription}
        </p>
        <button onClick={onClickHandle} className="px-3 py-1 bg-green-400 rounded-md mt-3 font-semibold text-zinc-100">
          Download Now
        </button>
      </div>
))}
      
    </div>
  );
}

export default Newcard;
