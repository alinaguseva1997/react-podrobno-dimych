import type {Meta, StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions'
import {Select} from "./Select";

const meta: Meta<typeof Select> = {
    component: Select,
};
export default meta;

type Story = StoryObj<typeof Select>;

const items = [
    {title: 'react', value: 1},
    {title: 'js', value: 2},
    {title: 'html&css', value: 2}
]

const onChangeCallback = action('onChange')

export const SelectPrimary = () => {
    return <Select items={items} onChange={onChangeCallback} value={1}/>
};
 // старая версия написания историй, максимально приближен к реакту