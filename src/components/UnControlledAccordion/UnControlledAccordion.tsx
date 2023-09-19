import React, {useReducer, useState} from "react";

type AccordionPropsType = {
    titleValue: string
}

type ActionType = {
    type: string
}

const reducer = (state: boolean, action: ActionType) => {
    if (action.type === 'TOGGLE-COLLAPSED') {
        return !state;
    }
    return state
}

export function UnControlledAccordion(props: AccordionPropsType) {
    console.log('UnControlledAccordion rendered')

    let [collapsed, dispatch] = useReducer(reducer, false)

    return (
        <div className={'App'}>
            <AccordionTitle title={props.titleValue} onClick = {() => {dispatch({type: 'TOGGLE-COLLAPSED'})}}/>
            {!collapsed && <AccordionBody/>}
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