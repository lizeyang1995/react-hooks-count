import React, { FC, ReactElement } from 'react'
import './counter.scss'
import { useCount, useCount2 } from '../components/hooks/use-Count'

const Counter02: FC = (): ReactElement => {
    // const { count, decrease, increase, reset } = useCount()
    const { count, decrease, increase, reset } = useCount2()
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