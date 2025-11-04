import { ReactNode } from "react"

type probs={
    text:ReactNode
}

const Bodytext = ({text}:probs) => {

  return (
    <div className="w-full pt-5">
        <h1 className="text-xl md:text-2xl leading-8 ">{text}</h1>
      
    </div>
  )
}

export default Bodytext