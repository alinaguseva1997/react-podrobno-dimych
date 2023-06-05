import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from './Accordion';
import {useState} from "react";

const meta: Meta<typeof Accordion> = {
    title: 'Accordion',
    component: Accordion,
};

 export default meta;
 type Story = StoryObj<typeof Accordion>;

export const MenuCollapsedMode= () => <Accordion collapsed={true} titleValue={'Menu'} onClick={()=>{}} />;
export const UsersUnCollapsedMode = () => <Accordion collapsed={false}titleValue={'Users'} onClick={ ()=>{} } />;

export const ChangeMode = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion collapsed={value} titleValue={'Users'} onClick={()=> setValue(!value)} />
};

