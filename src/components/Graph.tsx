import { Component } from 'solid-js'
import { Line } from './graph/Line'
import { YAxis } from './graph/YAxis'
import classes from './Graph.module.css'
import { Legend } from './graph/Legend'
import { XAxis } from './graph/XAxis'

type GraphProps = {
    codes: number[]
}

export const Graph: Component<GraphProps> = props => {
    return (
        <div class={classes.graph}>
            <YAxis />
            <Line codes={props.codes} />
            <Legend />
            <div />
            <XAxis />
            <div />
        </div>
    )
}
