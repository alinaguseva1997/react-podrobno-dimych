import React, {useReducer} from "react";
import {reducer, StateType} from "./reducer";

type AccordionPropsType = {
    titleValue: string
}

export const UnControlledAccordion = (props: AccordionPropsType) => {
    console.log('UnControlledAccordion rendered')
    let [state, dispatch] = useReducer(reducer, {collapsed: false})
    return (
        <div className={'App'}>
            <AccordionTitle title={props.titleValue} onClick = {() => {
                dispatch({type: 'TOGGLE-COLLAPSED'})}}/>
            {!state.collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendered')
    return (
        <h3 onClick={()=> {props.onClick()}}>{props.title}</h3>
    )
}

function AccordionBody() {
    console.log('AccordionBody rendered')
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}