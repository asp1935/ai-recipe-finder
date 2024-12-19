import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import React, { useRef } from 'react'


function Home() {
  const titleDivRef=useRef(null);
  useGSAP(()=>{
    const tl1=gsap.timeline({});
    tl1.from(titleDivRef.current.children[0],{
      x:-200,
      opacity:0,
      duration:1,
      ease:'power1.inOut'
    },'head')
    tl1.from(titleDivRef.current.children[1],{
      x:200,
      opacity:0,
      duration:1,
      ease:'power1.inOut'
    },'head')
    tl1.from(titleDivRef.current.children[2],{
      y:50,
      duration:1,
      opacity:0
    })
  })
  return (
    <div className="w-full min-h-screen flex items-center bg-[url('./public/landing4a.png')] bg-center bg-no-repeat bg-cover  text-white">
      <div ref={titleDivRef} className='w-[50%]'>
      {/* <SearchBar/> */}
      <h1 className='text-[6vw] font-heading-cursive text-start font-[500] ml-16 underline decoration-4 decoration-red-500 underline-offset-8'>Your Ingredients,</h1>
      <h1 className='text-[6vw] font-heading-cursive text-right mr-16 underline decoration-4 decoration-red-500 underline-offset-8'>Our Recipe</h1>
      <h5 className='text-[1vw] font-[cursive] text-right text-black underline underline-offset-2 decoration-white'  >Cook Better, Smarter with AI</h5>
      </div>
      
    </div>
  )
}

export default Home
