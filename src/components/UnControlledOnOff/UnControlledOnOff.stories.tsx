import type { Meta, StoryObj } from '@storybook/react';
import { UnControlledOnOff } from './UnControlledOnOff';
import {useState} from "react";

const meta: Meta<typeof UnControlledOnOff> = {
    title: 'UnControlledOnOff',
    component: UnControlledOnOff,
};

 export default meta;
 type Story = StoryObj<typeof UnControlledOnOff>;

export const ChangeMode = () => {
    return <UnControlledOnOff defaultOn={false} onChange={()=>{}}/>
};

