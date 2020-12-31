import React from 'react'
import './counter.scss'

interface CounterProps {

}

interface CounterState {
    count: number
}

class Counter01 extends React.Component<CounterProps, CounterState> {
    constructor(props: CounterProps) {
        super(props)
    }
    state: CounterState = {
        count: 0
    }

    render() {
        return (
            <div className="counter">
                <div className="displayer">计数: {this.state.count}</div>
                <div className="btns">
                    <button>减少</button>
                    <button>增加</button>
                    <button>重置</button>
                </div>
            </div>
        )
    }
}

export default Counter01