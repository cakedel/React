import { useState } from "react";
import { IoAccessibilitySharp } from "react-icons/io5";

const TopBanner = () => {
    // 1. 아이콘을 클릭한다.
    // 2. 아이콘을 클릭하면 TopBanner에 class "on"을 붙인다 / 뗀다
    // 3. 변수를 만들어서 true / false 되는 스위치를 만들고
    // 4. true / false 값에 따라서 class "on"을 붙인다 / 뗀다

    const [toggle, setToggle] = useState(false);

    return (
        <>
            <div className={`TopBanner ${toggle ? 'on' : ''}`}>
                <h2>Lorem ipsum dolor sit amet.</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br />
                    Dolores, aperiam.</p>
                <a href="" onClick={(e) => { e.preventDefault(); }}>
                    more
                </a>

            </div>
            <span className={`btn ${toggle ? 'on' : ''}`} onClick={() => { setToggle(!toggle) }}>
                <IoAccessibilitySharp />
            </span>
        </>
    )
}
export default TopBanner;