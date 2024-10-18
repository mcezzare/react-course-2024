import { useCounter } from '../hooks/useCounter'

export const CounterWithHook = () => {
    const {count, increaseBy } = useCounter({
        // initialValue:5
    });

    return (
        <>
            <h3>Counter With Hook</h3>
            <h4>Counter : <small>{count}</small></h4>
            <div>
                <button onClick={() => increaseBy(+1)}>+1</button>
                &nbsp;&nbsp;&nbsp;
                <button onClick={() => increaseBy(-1)}>-1</button>

            </div>

        </>

    )
}
