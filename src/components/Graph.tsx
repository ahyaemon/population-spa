import { Component } from 'solid-js'
import { Canvas } from './graph/Canvas'
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
            <YAxis min={5143} max={23296} />
            <Canvas codes={props.codes} />
            <Legend />
            <div />
            <XAxis />
            <div />
        </div>
    )
}
