import { useEffect } from "react";
import { useState } from "react";
import Home from "./components/Home";
import Loader from "./Loader";

function App() {
  const [loading,setloading] = useState(true);
  useEffect(() => {
    setTimeout(()=>{
      setloading(false)
  },3000)
  }, [])
  return (
    <>
      {loading?<Loader/>:<Home/>}
      </>
  );
}

export default App;
