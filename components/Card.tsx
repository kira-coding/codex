import React from 'react'

type Props = {
  children: React.ReactNode;
  title?: string;
  description: string;
  color: string;
  orientation?: boolean;
}

function Card({ children, title, color, description, orientation = true }: Props) {
  return (
    <div className={`flex ${orientation ? "flex-col w-1/3" : "flex-row"} mx-2 text-black ${orientation ? "p-8 px-12 " : "p-2 items-center"}`} style={{ backgroundColor: color, borderRadius: "1.5rem",}}>
      {children}

      {title && <h2 className="mb-4  " style={{ fontSize: "2.2rem", marginBottom: "1.2rem", marginTop: "0.5rem" }}>{title}</h2>}
      {orientation ? <p className='text-gray-900' style={{ fontSize: "1.09rem" }}>{description}</p> 
      :
       <p className='text-gray-900 font-semibold ' style={{ fontSize: "1rem", padding:"0.75rem"}}>{description}</p>}
    </div>
  )
}

export default Card