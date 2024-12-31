import { useEffect } from "react"
import SearchBar from "./components/SearchBar"
import Home from "./pages/Home"
import { startServer } from "./api/api"

function App() {

  useEffect(()=>{
    startServer()
  },[])

  return (
    <>
      <Home />
      <SearchBar />
    </>
  )
}

export default App
