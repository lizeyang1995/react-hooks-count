import React, { FC, ReactElement, useState } from 'react'
import './counter.scss'

const Counter02: FC = (): ReactElement => {
    const [count, setCount] = useState<number>(0)
    const decrease = () => {
        setCount(count - 1)
    }
    const increase = () => {
        setCount(count + 1)
    }
    const reset = () => {
        setCount(0)
    }
    return (
        <div className="counter">
            <div className="displayer">计数: {count}</div>
            <div className="btns">
                <button onClick={decrease}>减少</button>
                <button onClick={increase}>增加</button>
                <button onClick={reset}>重置</button>
            </div>
        </div>
    )
}

export default Counter02