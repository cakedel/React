import { useRef } from "react";
// useRef 함수를 불러오기

const UseRef = () => {
    const Name = useRef(null);
    // Ref 객체 생성 
    return (
        <div ref={Name}>
            {/* 선택하고 싶은 DOM에 ref값으로 설정 */}
            i have a Name
        </div>
    )
}

export default UseRef;