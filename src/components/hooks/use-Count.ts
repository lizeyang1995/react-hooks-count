import { Reducer, useReducer, useState } from "react"

//自定义一个hooks，要1⃣以use开头
export function useCount() {
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
    return { count, decrease, increase, reset }
}

function countReducerHandler(state: number, action: string) {
    switch (action) {
        case 'decrease':
            return state - 1;
        case 'increase':
            return state + 1;
        case 'reset':
            return 0
        default:
            throw new Error("...")
    }
}

export function useCount2() {
    const [count, dispathch] = useReducer<Reducer<number, string>>(countReducerHandler, 0);
    const decrease = () => {
        dispathch('decrease')
    }
    const increase = () => {
        dispathch('increase')
    }
    const reset = () => {
        dispathch('reset')
    }
    return { count, decrease, increase, reset }
}