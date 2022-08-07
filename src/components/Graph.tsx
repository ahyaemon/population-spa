import {Component} from "solid-js";
import {Line} from "./graph/Line";
import {YAxis} from "./graph/YAxis";
import classes from "./Graph.module.css";
import {Legend} from "./graph/Legend";
import {XAxis} from "./graph/XAxis";

export const Graph: Component = () => {
    return (
        <div class={classes.graph}>
            <YAxis/>
            <Line/>
            <Legend/>
            <div/>
            <XAxis/>
            <div/>
        </div>
    )
}
