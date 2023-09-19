import React from "react";
import {RatingValueType} from "../../App";


type RatingPropsType = {
    value: RatingValueType
    onClick: (value: RatingValueType) => void
}
export const Rating = React.memo((props: RatingPropsType) => {
    console.log('UnControlledRating rendered')
    return (
        <div>
            <Star selected={props.value > 0} onClick = {props.onClick} value = {1}/>
            <Star selected={props.value > 1} onClick = {props.onClick} value = {2}/>
            <Star selected={props.value > 2} onClick = {props.onClick} value = {3}/>
            <Star selected={props.value > 3} onClick = {props.onClick} value = {4}/>
            <Star selected={props.value > 4} onClick = {props.onClick} value = {5}/>
        </div>
    );
})

type StarPropsType = {
    selected: boolean
    onClick: (value: RatingValueType) => void
    value: RatingValueType
}
const Star = React.memo((props: StarPropsType) => {
    console.log('Star rendered')
    const selectedStar = props.selected ? <b>Star </b> : 'Star '
    return (
        <span onClick={() => {props.onClick(props.value)}}>
            {selectedStar}
        </span>
    )
})