import React, { useState } from 'react'

function Prop({info:{img,name,proffesion,friend}}) {
    const [val,setVal]=useState(false);

  return (
    <div  className='flex flex-col items-center gap-2 capitalize rounded-xl overflow-hidden'>
        <div className='w-40 h-50 bg-zinc-500 '  >
            <img  className='w-full h-full object-cover' src={img} alt="img" />
        </div>
        <h1 className='text-xl font-semibold'>{name}</h1>
        <p className='text-md '>{proffesion}</p>
        <button onClick={()=>setVal(!val)} className={` capitalize px-3 py-1 ${val===false?'bg-blue-500':'bg-green-400'} rounded-full cursor-pointer`}>{ val? 'friend added': 'Add friend'}</button>
    </div>
  )
}

export default Prop