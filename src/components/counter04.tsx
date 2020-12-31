import React, { FC, useRef, useState } from 'react'
import './counter.scss'

const Counter04: FC = () => {
    const [count, setCount] = useState(0)

    //为了避免因为count的更新而导致整个counter04的刷新，我们用useRef来缓存他
    let timer = useRef<any>();

    const start = () => {
        if (!timer.current) {
            timer.current = setInterval(() => {
                setCount(count => count + 1)
            }, 1000)
        }
    }

    const pause = () => {
        if (timer.current) {
            clearInterval(timer.current)
            timer.current = null
        }
    }

    const reset = () => {
        pause()
        setCount(0);
    }

    return (
        <div>
            <div className="displayer">计数: {count}</div>
            <div className="btns">
                <button onClick={start}>启动</button>
                <button onClick={pause}>暂停</button>
                <button onClick={reset}>重置</button>
            </div>
        </div>
    )
}

export default Counter04