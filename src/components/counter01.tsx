import React from 'react'

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
            <div>
                <div>计数: {this.state.count}</div>
                <div>减少</div>
                <div>增加</div>
                <div>重置</div>
            </div>
        )
    }
}

export default Counter01