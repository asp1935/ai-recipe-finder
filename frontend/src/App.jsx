import { useEffect, useRef } from "react"
import SearchBar from "./components/SearchBar"
import Home from "./pages/Home"
import { startServer } from "./api/api"
import LocomotiveScroll from 'locomotive-scroll';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";


function App() {

  useEffect(() => {
    startServer()
  }, [])
  useGSAP(()=>{
    gsap.registerPlugin(ScrollTrigger);
  })
  const locomotiveScroll = new LocomotiveScroll();
  const scrollTo=()=>{
    locomotiveScroll.scrollTo('#searchDiv')
  }
  return (
    <>
      <Home scrollTo={scrollTo}/>
      <SearchBar />
    </>
  )
}

export default App
