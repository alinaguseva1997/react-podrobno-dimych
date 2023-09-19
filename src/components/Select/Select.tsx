import React, {useState} from "react";
import s from './Select.module.css'

type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: ItemType[]
}

type ItemType = {
    title: string
    value: any
}

export const Select = React.memo((props: SelectPropsType) => {
    console.log('Select rendered')

    const [active, setActive] = useState(false)
    const [hoveredElementValue, sethoveredElementValue] = useState(props.value)


    const selectedItem = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hoveredElementValue)
    const toggleItems = () => setActive(!active)
    const onItemClick = (value: any) => {
        props.onChange(value);
        toggleItems();
    }

    return (
        <>
            <div className={s.select}>
                <span className={s.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
                {
                    active &&

                <div className={s.items}>
                    {props.items.map(el => <div key={el.value}
                                                onClick={() => onItemClick(el.value)}
                    className = {s.item + '' + (selectedItem === el ? s.selected : '')}
                    onMouseEnter={event => sethoveredElementValue(el.value)}>{el.title}</div>)}
                </div>
                }
            </div>
        </>

    );
})