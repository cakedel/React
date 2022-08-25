import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const SyncSlick = () => {
    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();
    
    const set = {
        vertical: true,
        dots: false
    }
    return (
        <>
            <Slider dots={true} asNavFor={nav2} ref={(slider1) => setNav1(slider1)} {...set}>
                <div>a</div>
                <div>b</div>
                <div>c</div>
            </Slider>
            <Slider arrows={false} asNavFor={nav1}
                ref={(slider2) => setNav2(slider2)}>
                <div>01</div>
                <div>02</div>
                <div>03</div>
            </Slider>
        </>
    )
}
export default SyncSlick;