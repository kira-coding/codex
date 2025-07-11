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
    <div className={`flex ${orientation ? "flex-col w-1/3 p-8 px-16 rounded-2xl " : "flex-row p-2 rounded-sm items-center"} mx-2 text-black `} style={{ backgroundColor: color,}}>
      {children}

      {title && <h2 className="mb-4 " style={{ fontSize: "2.15rem", marginBottom: "1.2rem", marginTop: "0.5rem" }}>{title}</h2>}
      {orientation ? <p className='text-gray-900' style={{ fontSize: "1.09rem" }}>{description}</p> 
      :
       <p className='text-gray-900 font-semibold py-2 text-xs ml-2.5'>{description}</p>}
    </div>
  )
}

export default Card