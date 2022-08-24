//DATA 생성
const DATA = [
    { id: 1, name: 'cake', age: '20', eat: false },
    { id: 2, name: 'pie', age: '20', eat: true },
    { id: 3, name: 'tart', age: '20', eat: true }
]

//List Component 생성
const List = () => {
    return (
        <>
            <ul>
                {DATA.map((it, idx) =>
                    <li key={it.id}>
                        number {idx + 1} {it.name} is {it.age} years old and {it.eat ? 'eating' : 'sleeping'}
                    </li>
                )}
            </ul>
        </>
    )
}

export default List;