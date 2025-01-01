import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react'


function Home({ scrollTo }) {
  const titleDivRef = useRef(null);
  const scrollDownDivRef = useRef(null);

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

    gsap.set(scrollDownDivRef.current, { opacity: 1 });
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: titleDivRef.current,
        start: 'top 0%',
        end: 'top 20%',
        // markers: true,
        scrub: true,
        invalidateOnRefresh: true,
      }
    })
    tl2.to(scrollDownDivRef.current, {
      opacity: 0,

    })

  })
  return (
    <div className="relative w-full min-h-screen flex items-center  text-white">
      <div ref={titleDivRef} className='w-full  md:w-[65%] lg:w-[50%]'>
        <h1 className='text-[13vw] sm:text-[9vw] md:text-[8vw] lg:text-[6vw] font-heading-cursive text-start font-[500] ml-5 md:ml-16 underline decoration-4 decoration-red-500 underline-offset-8'>Your Ingredients,</h1>
        <h1 className='text-[13vw] sm:text-[9vw] md:text-[8vw] font-heading-cursive text-right mr-10 lg:mr-16 underline decoration-4 decoration-red-500 underline-offset-8'>Our Recipe</h1>
        <h5 className='text-[5vw] sm:text=[3vw] md:text-[3vw] lg:text-[1.5vw] font-[cursive]  text-center md:text-right text-black underline underline-offset-2 decoration-white'  >Cook Better, Smarter with AI</h5>
      </div>

      <div ref={scrollDownDivRef} onClick={() => scrollTo()} className='absolute animate-bounce bottom-10 left-1/2 right-2/4 w-fit flex flex-col justify-center items-center cursor-pointer '>
        <p className='text-nowrap text-black  drop-shadow-xl shadow-orange-700 '>Search Recipe</p>
        <i className="fa-solid fa-angle-down text-red-500 text-xl"></i>
      </div>

      <div className='absolute -z-10 w-full h-full top-0 left-0'>
        <img src="https://res.cloudinary.com/db0ijophz/image/upload/f_auto,q_auto/v1/ai-recipe-finder/wjepzov6z9qsasyyeizr" alt="" className='object-cover object-center' />
      </div>
      <div className='block lg:hidden absolute w-[50vw] -z-10 bottom-0 left-0'>
        <img src='https://res.cloudinary.com/db0ijophz/image/upload/f_auto,q_auto/v1/ai-recipe-finder/m1zf6cl03jekyjo6sigm' alt="" className='w-full h-full ' />

      </div>

    </div>
  )
}

export default Home
