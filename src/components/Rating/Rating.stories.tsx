import type {Meta, StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions'
import {Rating} from "./Rating";

const meta: Meta<typeof Rating> = {
    title: 'component/Rating/Rating',
    component: Rating,
};
export default meta;

type Story = StoryObj<typeof Rating>;

export const RatingPrimary: Story = {
    args: {
        value: 5,
        onClick: action('onClick')
    }
} //новая версия создания истории

