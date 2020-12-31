import { useState } from "react"

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