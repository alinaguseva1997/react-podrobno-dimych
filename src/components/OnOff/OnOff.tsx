import React from "react";

type OnOffPropsType = {
    valueOnOff: boolean
    onClick: (value: boolean) => void
}

export const OnOff = React.memo((props: OnOffPropsType) => {


    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: props.valueOnOff ? 'green' : 'white'
    };
    const offStyle = {
        marginLeft: '2px',
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: props.valueOnOff ? 'white' : 'red'
    };
    const indicatorStyle = {
        marginLeft: '5px',
        width: '10px',
        height: '10px',
        borderRadius: ' 5px',
        border: '1px solid black',
        display: 'inline-block',
        backgroundColor: props.valueOnOff ? 'green' : 'red'
    };
    //
    // const onClickHandler1 =()=>{
    //     props.setOn(true)
    // }
    // const onClickHandler2 =()=>{
    //     props.setOn(false)
    // }

    return (
        <div className={'App'}>
            <div onClick={()=>props.onClick(true)} style={onStyle}>On</div>
            <div onClick={()=>props.onClick(false)} style={offStyle}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
})