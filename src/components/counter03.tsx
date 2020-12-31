import React, { FC, useEffect, useState } from 'react'
import './counter.scss'

const Counter03: FC = () => {
    const [count, setCount] = useState<number>(0)
    //如果第二个参数不传，则监听所有状态的变化
    //如果第二个参数只是一个空数据，表示该函数只会在组件创建的时候调用一次
    //如果传了[count]，表示每次count的改变都会触发该函数
    useEffect(() => {
        const timer = setInterval(() => {
            setCount(count => count + 1)
        }, 1000)
        //return返回的是一个函数，之后在组件被销毁时执行
        return () => {
            clearInterval(timer)
        }
    }, [])
    return (
        <div className="counter">
            <div className="displayer">计数: {count}</div>
        </div>
    )
}

export default Counter03