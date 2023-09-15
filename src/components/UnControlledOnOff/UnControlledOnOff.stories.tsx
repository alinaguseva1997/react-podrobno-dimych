import type {Meta, StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions'
import {UnControlledOnOff} from "./UnControlledOnOff";

const meta: Meta<typeof UnControlledOnOff> = {
    title: 'component/OnOff/UnControlledOnOff',
    component: UnControlledOnOff,
};
export default meta;

type Story = StoryObj<typeof UnControlledOnOff>;

export const UnControlledOnOffPrimary: Story = {
    args: {
        onChange: action('onChange'),
        defaultOn: false
    }
} //новая версия создания истории
