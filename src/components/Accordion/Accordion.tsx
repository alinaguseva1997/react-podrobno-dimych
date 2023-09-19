import React from "react";

type ItemType = {
    title: string
    value: any
}

export type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
    items: ItemType[]
    onClick: (value: any) => void
}

export const Accordion = React.memo((props: AccordionPropsType) => {
    console.log('UnControlledAccordion rendered')
    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick = {props.onChange}/>
            {props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
        </div>
    )
})

export type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

const AccordionTitle = React.memo((props: AccordionTitlePropsType) => {
    console.log('AccordionTitle rendered')
    return (
        <h3 onClick={()=> {props.onClick()}}>{props.title}</h3>
    )
})

export type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
}

const AccordionBody = React.memo((props: AccordionBodyPropsType) => {
    console.log('AccordionBody rendered')
    return (
        <ul>
            {props.items.map((el, index) => <li onClick={()=>{props.onClick(el.value)}} key={index}>{el.title}</li>)}
        </ul>
    )
})