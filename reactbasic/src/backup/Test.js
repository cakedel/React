import Some from "./backup/Some";

const Test = ({ list, age, name, onClick }) => {
    return (
        <div>
            <button onClick={onClick}>click</button>
            <h2>
                my {list} {age} friend {name} list
                <button onClick={
                    () => (
                        alert(list)
                    )
                }>click</button>
            </h2>

            <Some list={list} />

            <ul>
                <li>
                    Lorem ipsum dolor sit amet.
                </li>
                <li>
                    Lorem ipsum dolor sit amet.
                </li>
                <li>
                    Lorem ipsum dolor sit amet.
                </li>
                <li>
                    Lorem ipsum dolor sit amet.
                </li>
                <li>
                    Lorem ipsum dolor sit amet.
                </li>
            </ul>
        </div>
    )
}

export default Test;