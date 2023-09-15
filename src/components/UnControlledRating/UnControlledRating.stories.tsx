import type {Meta, StoryObj} from '@storybook/react';
import {UnControlledRating} from "./UnControlledRating";

const meta: Meta<typeof UnControlledRating> = {
    title: 'component/Rating/UnControlledRating',
    component: UnControlledRating,
};
export default meta;

type Story = StoryObj<typeof UnControlledRating>;

export const UnControlledRatingPrimary: Story = {} //новая версия создания истории
