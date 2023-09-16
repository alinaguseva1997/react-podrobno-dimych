import type {Meta, StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions'
import {Select} from "./Select";
import {useState} from "react";

const meta: Meta<typeof Select> = {
    title: 'Component/Select/Select',
    component: Select,
};
export default meta;

type Story = StoryObj<typeof Select>;

const items = [
    {title: 'react', value: '1'},
    {title: 'js', value: '2'},
    {title: 'html&css', value: '3'}
]

// const onChangeCallback = action('Value changed')

export const SelectWithValue = () => {
    const [value, setValue] = useState('2')
    return <Select items={items} onChange={setValue} value={value}/>
};

export const SelectWithoutValue = () => {
    const [value, setValue] = useState(null)
    return <Select items={items} onChange={setValue} value={value}/>
};
 // старая версия написания историй, максимально приближен к реакту