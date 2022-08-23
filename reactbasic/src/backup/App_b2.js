import { useState } from "react";
import Test from "../Test";

const App = () => {
  const [num, setNum] = useState(1);
  const numHandler = () => (setNum(num + 1))
  return <>
    <h1>
      <div>{num}</div>
    </h1>


    {/* <button onClick={numHandler} >click</button> */}
    <Test list="Paper" name="Knife" age={20} onClick = {numHandler} />
    <Test list="Color" name="Knife" age={20} onClick = {numHandler} />
    <Test list="Pencil" name="Knife" age={20} onClick = {numHandler} />
    <Test list="Crayon" name="Knife" age={20} onClick = {numHandler} />

  </>
}

export default App;