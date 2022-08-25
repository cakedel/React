import { useRef } from "react";
import MainSlider from "react-slick";
import "slick-carousel/slick/slick.css";

const MainVisual = () => {
    const settings = {
        arrows: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    // 슬릭 메소드 사용하기
    // 1. 슬릭에 이름을 붙여준다. useRef --> 이름.current
    // 2. 클릭하는 요소에 이벤트를 직접 달아준다.

    const MS = useRef(null);
    return (
        <div>
            <i className="xi-bars"></i>
            <MainSlider {...settings} ref={MS}>
                {/* spread 연산자 객체 꾸러미를 들고온다. */}
                <figure>01</figure>
                <figure>02</figure>
                <figure>03</figure>
            </MainSlider>
            <div className="arrows">
                <i className="xi-arrow-left" onClick={
                    () => (
                        MS.current.slickPrev()
                    )}>
                </i>
                <i className="xi-arrow-right"
                    onClick={() => MS.current.slickNext()}>
                </i>
            </div>
        </div>
    )
}

// (e) => {
//     return e
// }

// (e) => (
//    return e
// )

// (e) => (e)

// e => e
// 매개 변수가 하나일때 중괄호, 괄호 생략 가능

export default MainVisual;