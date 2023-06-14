import React from "react";

type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: ItemType[]
}

type ItemType = {
    title: string
    value: any
}
export function Select(props: SelectPropsType) {
    console.log('Select rendered')
    return (
        <div>
            <div></div>
            {props.items.map(el => <div>{el.title}</div>)}
        </div>

    );
}