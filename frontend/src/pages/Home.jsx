import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import React, { useRef } from 'react'


function Home() {
  const titleDivRef = useRef(null);
  useGSAP(() => {
    const tl1 = gsap.timeline({});
    tl1.from(titleDivRef.current.children[0], {
      x: -200,
      opacity: 0,
      duration: 1,
      ease: 'power1.inOut'
    }, 'head')
    tl1.from(titleDivRef.current.children[1], {
      x: 200,
      opacity: 0,
      duration: 1,
      ease: 'power1.inOut'
    }, 'head')
    tl1.from(titleDivRef.current.children[2], {
      y: 50,
      duration: 1,
      opacity: 0
    })
  })
  return (
    <div className="relative w-full min-h-screen flex items-center  text-white">
      <div ref={titleDivRef} className='w-full  md:w-[65%] lg:w-[50%]'>
        <h1 className='text-[13vw] sm:text-[9vw] md:text-[8vw] lg:text-[6vw] font-heading-cursive text-start font-[500] ml-5 md:ml-16 underline decoration-4 decoration-red-500 underline-offset-8'>Your Ingredients,</h1>
        <h1 className='text-[13vw] sm:text-[9vw] md:text-[8vw] font-heading-cursive text-right mr-10 lg:mr-16 underline decoration-4 decoration-red-500 underline-offset-8'>Our Recipe</h1>
        <h5 className='text-[5vw] sm:text=[3vw] md:text-[3vw] lg:text-[1.5vw] font-[cursive]  text-center md:text-right text-black underline underline-offset-2 decoration-white'  >Cook Better, Smarter with AI</h5>
      </div>
      <div className='absolute -z-10 w-full h-full top-0 left-0'>
        <img src="/landing4a.png" alt="" className='object-cover object-center' />
      </div>
      <div className='block lg:hidden absolute w-[50vw] -z-10 bottom-0 left-0'>
        <img src='/ingredient1.png' alt="" className='w-full h-full ' />

      </div>

    </div>
  )
}

export default Home
