import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const SlickCustom = () => {
    const SlideEl = [
        { id: 1, h2: 'im cool pie', p: 'cool cool pie cool pie cool cool pie cool pie cool cool pie cool pie cool cool pie cool pie' },
        { id: 2, h2: 'im cool pie', p: 'cool cool pie cool pie cool cool pie cool pie cool cool pie cool pie cool cool pie cool pie' },
        { id: 3, h2: 'im cool pie', p: 'cool cool pie cool pie cool cool pie cool pie cool cool pie cool pie cool cool pie cool pie' }
    ];

    const slider = useRef();
    // Slider DOM을 컨트롤하기 위해 useRef 객체 생성
    const set = {
        arrows: false,
        afterChange: idx => {
            // React의 afterChange는 변수를 idx 값만 가지고 있다. 
            setNum(idx)
        }
    }

    useEffect(() => {
        setNum(0)
    }, [])
    // useEffct 처음 렌더링 되었을 때 한 번만 실행해주는 Hook
    // 뒤의 [] 배열은 []안의 요소가 실행되었을 때 useEffect함수를 실행.

    const [num, setNum] = useState(0);
    // useState 변수의 초기값 할당;
    return (
        <div className="MainSection">
            <Slider {...set} ref={slider} className="MainVisual">
                {/* DOM에 ref값으로 설정 */}
                {
                    SlideEl.map((itm, idx) =>
                        <figure
                            key={itm.id}
                            // map 함수의 key값 을 지정해 오류를 막기
                            className={`itm0${idx + 1} ${idx == num ? 'on' : ''}`}
                        // 백틱을 사용해 on을 template literal로 만들어줌
                        >
                            <div className={`slogan ${idx == num ? 'on' : ''}`}>
                                <h2>{itm.h2}</h2>
                                {/* SldeEl 의 h2 */}
                                <p>{itm.p}</p>
                                {/* SldeEl 의 p */}
                                <a href="#!">more</a>
                            </div>
                        </figure>
                    )
                }
            </Slider>
            <div className="num">
                {num + 1} / {SlideEl.length}
                {/* slide 번호 */}
            </div>
            <div className="arrows">
                <i className="xi-arrow-left" onClick={
                    () => (slider.current.slickPrev())
                    // 클릭 시 이전 슬라이드로 이동
                }></i>
                <i className="xi-arrow-right" onClick={
                    () => (slider.current.slickNext())
                    // 클릭 시 다음 슬라이드로 이동
                }></i>
            </div>
            <ul className="slideDot">
                {SlideEl.map((dot, idx) => <li key={dot.id}
                    onClick={() =>
                        slider.current.slickGoTo(idx)

                    }
                    className={idx == num ? 'on' : ''}
                >
                    {dot.id}</li>)}
            </ul>
        </div>
    )
}

export default SlickCustom;