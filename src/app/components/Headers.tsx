import Image from 'next/image'
import React from 'react'

const Headers = () => {
  return (
    <section className='flex px-4 py-3 items-center justify-between'>
        <Image 
            src={"/logo.svg"}
            width={38}
            height={238}
            alt="logo"
        />

<div className='flex'>
        <button style={{ background: "circle at center, #8C45FF 30%, rgba(140, 69, 255, 0.6) 50%, rgba(140, 69, 255, 0) 70%)", border: "none" }} className='text-sm font-medium w-fit  px-3 py-1 from-[#8C45FF] to-black rounded-lg'>Join waitlist</button>
        HAM
</div>
    </section>
  )
}

export default Headers