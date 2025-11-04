"use client";

import { ReactNode } from "react";

type probs={
  content: ReactNode,
  images:ReactNode,
  leftimg:boolean,
  customstyle?:string
}

export default function StickyImageSection({content, images, leftimg, customstyle}:probs) {
  return (
    <section className={`flex ${leftimg?"md:flex-row":"md:flex-row-reverse"} flex-col justify-start gap-5 -mt-40 ${customstyle}  `}>
      {/* Image Section */}
    <div className="md:w-1/2 w-full h-screen sticky top-0 flex flex-col items-start justify-start">
  {images}
</div>


      {/* Text Section */}
      <div className="md:w-1/2 w-full flex flex-col justify-center  ">
        {/* <div className="h-screen flex items-center">
          <p className="text-lg leading-relaxed">
            This is the first section of text. As you scroll, the image stays fixed at the top.
          </p>
        </div>

        <div className="h-screen flex items-center">
          <p className="text-lg leading-relaxed">
            Here’s the second section. When you reach the bottom, the image will scroll away.
          </p>
        </div> */}
        {content}
      </div>
    </section>
  );
}
