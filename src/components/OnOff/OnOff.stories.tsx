import type { Meta, StoryObj } from '@storybook/react';
import { OnOff } from './OnOff';
import {useState} from "react";

const meta: Meta<typeof OnOff> = {
    title: 'OnOff',
    component: OnOff,
};

 export default meta;
 type Story = StoryObj<typeof OnOff>;

export const OnMode = () => <OnOff valueOnOff={true} onClick={()=>{}} />;
export const OffMode = () => <OnOff valueOnOff={false} onClick={ ()=>{} } />;

export const ChangeMode = () => {
    const [value, setValue] = useState<boolean>(true)
    return <OnOff valueOnOff={value} onClick={setValue}/>
};

