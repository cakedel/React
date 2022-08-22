import { useRef, useState } from "react";
import './basic.css';

const App = () => {
  // const Home = () => {
  //   return <div>007</div>
  // }
  // const a = 'A';
  // return <p>
  //   {a} a
  //   {/* 중괄호에 써줘야 상수가 제대로 표현 */}
  //   <Home />
  // </p>
  const [num, setNum] = useState(1)
  // useState 변수의 초기값을 할당해주고 배열로 만들기
  const [toggle, setToggle] = useState(true)
  // true, array, function 등의 예약어는 배열 안에 쓸 수 없다.
  const Test = () => {
    return (
      <div>hello world</div>
    )
  }
  console.log('App')
  return (
    <>
      {num}
      <section className={toggle ? '' : 'on'}>
        {toggle ? 'now loading' : <Test />}
      </section>
      <button onClick={() => (
        setNum(num + 1),
        // 만들어낸 배열 num에 1을 계속적으로 더하는 setNum        
        console.log(num),
        setToggle(!toggle),
        // toggle에 not 연산자를 사용해서 !toggle을 반환 => false 값 반환 
        // !toggle에서 not 연산자를 붙이기 => not not true = true => true 값 반환 
        console.log(toggle)
      )
      }>click</button>
    </>
  )
}
//const 함수를 선언하는 기본적인 방법
//이름 없는 무명함수
//react는 state가 바뀌었을 때 함수 자체를 다시 호출해서 변화된 것만 html에 다시 그려준다.

export default App;
// default로 export한 것들은 import할 때 임의로 이름을 붙일 수 있다.