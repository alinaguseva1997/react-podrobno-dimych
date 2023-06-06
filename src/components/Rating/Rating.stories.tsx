import type { Meta, StoryObj } from '@storybook/react';
import { Rating } from './Rating';
import {useState} from "react";
import {RatingValueType} from "../../App";

const meta: Meta<typeof Rating> = {
    title: 'components/Rating',
    component: Rating,
};

 export default meta;
 type Story = StoryObj<typeof Rating>;

export const EmptyRating = () => <Rating value={0} onClick={()=>{}} />;
export const Rating1 = () => <Rating value={1} onClick={()=>{}} />;
export const Rating2 = () => <Rating value={2} onClick={()=>{}} />;
export const Rating3 = () => <Rating value={3} onClick={()=>{}} />;
export const Rating4 = () => <Rating value={4} onClick={()=>{}} />;
export const Rating5 = () => <Rating value={5} onClick={()=>{}} />;
export const ChangeRating = () => {
    const [rating, setRating] = useState<RatingValueType>(3)
    return <Rating value={rating} onClick={setRating}/>
};

