import type {Meta, StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions'
import {OnOff} from "./OnOff";

const meta: Meta<typeof OnOff> = {
    title: 'component/OnOff/OnOff',
    component: OnOff,
};
export default meta;

type Story = StoryObj<typeof OnOff>;

export const OnOffPrimary: Story = {
    args: {
        valueOnOff: true
    }
} //новая версия создания истории

const onClickCallback = action('onClick')

export const On = () => {
    return <OnOff valueOnOff={true} onClick={onClickCallback} />
};

export const Off = () => {
    return <OnOff valueOnOff={false} onClick={onClickCallback} />
}; // старая версия написания историй, максимально приближен к реакту