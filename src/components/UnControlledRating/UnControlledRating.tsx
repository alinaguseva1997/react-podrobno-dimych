import React, {useState} from "react";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

type RatingPropsType = {
    defaultValue?: RatingValueType
}
export const UnControlledRating = React.memo((props: RatingPropsType) => {
    let [value, setValue] = useState<RatingValueType>(props.defaultValue ? props.defaultValue : 0)

    console.log('UnControlledRating rendered')
    return (
        <div>
            <Star selected={value > 0} setValue = {() => setValue(1)}/>
            <Star selected={value > 1} setValue = {() => setValue(2)}/>
            <Star selected={value > 2} setValue = {() => setValue(3)}/>
            <Star selected={value > 3} setValue = {() => setValue(4)}/>
            <Star selected={value > 4} setValue = {() => setValue(5)}/>
        </div>
    );
})

type StarPropsType = {
    selected: boolean
    setValue: () => void
}
const Star = React.memo((props: StarPropsType) => {
    console.log('Star rendered')
    const selectedStar = props.selected ? <b>Star </b> : 'Star '
    return (
        <span onClick={()=> {props.setValue()}}>
            {selectedStar}
        </span>
    )
})