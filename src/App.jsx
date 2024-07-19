import { useState } from "react"
import Home from "./Components/Home"
import GamePlay from "./Components/GamePlay";

function App() {
  
const [isGameStarted,setIsGameStared] = useState(true);

const toggleGamePlay = () =>{
  setIsGameStared((prev)=> !prev);
}
  return (
    <>
    {
      isGameStarted ? <GamePlay/> :  <Home toggle={toggleGamePlay} />
    }
    



    </>
  )
}

export default App;

