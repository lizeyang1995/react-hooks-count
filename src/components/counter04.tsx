import React, { FC, useCallback, useRef, useState } from 'react'
import './counter.scss'

const Counter04: FC = () => {
    const [count, setCount] = useState(0)

    //为了避免因为count的更新而导致整个counter04的刷新，我们用useRef来缓存他
    let timer = useRef<any>();

    //当第二个参数[]里面的内容发生变化，则第一个参数会重新执行
    //如果第二个参数是一个空数组，则只会在最开始初始化一次
    const start = useCallback(() => {
        if (!timer.current) {
            timer.current = setInterval(() => {
                setCount(count => count + 1)
            }, 1000)
        }
    }, [])

    const pause = useCallback(() => {
        if (timer.current) {
            clearInterval(timer.current)
            timer.current = null
        }
    }, [])

    const reset = useCallback(() => {
        pause()
        setCount(0);
    }, [])

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