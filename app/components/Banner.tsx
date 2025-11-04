import React from 'react'

const Banner = () => {
  return (
      <div className="w-full h-full relative">
        <video
        src="/lake_low.mp4"
        loop
        muted
        autoPlay 
        className="w-full h-auto"  
       />
       {/* overlay */}
       <div className="absolute top-0 left-0 bg-black z-5 w-full h-full opacity-30 "></div>
       <div className="absolute top-0 left-0  z-10 w-full h-full flex flex-col gap-5 items-center text-5xl justify-center font-bold  text-white ">
        <h1 className="uppercase">Urban Lake Restoration Blueprint</h1>
        <p className="text-3xl">Sub-heading</p>

       </div>

      </div>
  )
}

export default Banner
