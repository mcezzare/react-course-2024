import { useState } from 'react'

export const Counter = () => {

    const [count, setCount] = useState<number>(1);

    const increaseBy = (value: number) => {
        setCount(count + value);
    }

    return (
        <>
            <h3>Counter</h3>
            <h4>Counter : <small>{count}</small></h4>
            <div>
                <button onClick={() => increaseBy(+1)}>+1</button>
                &nbsp;&nbsp;&nbsp;
                <button onClick={() => increaseBy(-1)}>-1</button>

            </div>

        </>

    )
}
