import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from './Accordion';
import {useState} from "react";

const meta: Meta<typeof Accordion> = {
    title: 'components/Accordion',
    component: Accordion,
};

 export default meta;
 type Story = StoryObj<typeof Accordion>;

 const callback = ()=>alert('accordion mode change event fired')
 const onClickCallback = () =>alert('some item was clicked')

export const MenuCollapsedMode= () => <Accordion collapsed={true} titleValue={'Menu'} onChange={ callback } onClick={onClickCallback} items = {[]}/>;
export const UsersUnCollapsedMode = () => <Accordion collapsed={false} titleValue={'Users'} onChange={callback} onClick={onClickCallback} items = {[{title:'Dimych', value: 1}, {title: 'Valera', value: 2}, {title: 'Artem', value:3}, {title: 'Victor', value: 4}]}/>;

export const ChangeMode = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion collapsed={value} titleValue={'Users'} onChange={()=>setValue(!value)} onClick={(id) =>{alert(`user with ID ${id} should be happy`)}} items = {[
        {title:'Dimych', value: 1},
        {title: 'Valera', value: 2},
        {title: 'Artem', value:3},
        {title: 'Victor', value: 4}
    ]}/>
};

