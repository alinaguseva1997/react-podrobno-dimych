import React, {useState} from "react";

type OnOffPropsType = {
    onChange: (on: boolean) => void
    defaultOn?: boolean
}

export const UnControlledOnOff = React.memo((props: OnOffPropsType) => {
    let [on, setOn] = useState(props.defaultOn? props.defaultOn : false)

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: on ? 'green' : 'white'
    };
    const offStyle = {
        marginLeft: '2px',
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: on ? 'white' : 'red'
    };
    const indicatorStyle = {
        marginLeft: '5px',
        width: '10px',
        height: '10px',
        borderRadius: ' 5px',
        border: '1px solid black',
        display: 'inline-block',
        backgroundColor: on ? 'green' : 'red'
    };

    const onClickHandler1 =()=>{
        setOn(true)
        props.onChange(true)
    }
    const onClickHandler2 =()=>{
        setOn(false)
        props.onChange(false)
    }

    return (
        <div className={'App'}>
            <div onClick={onClickHandler1} style={onStyle}>On</div>
            <div onClick={onClickHandler2} style={offStyle}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
})