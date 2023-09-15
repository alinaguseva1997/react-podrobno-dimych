import type {Meta, StoryObj} from '@storybook/react';
import {UnControlledAccordion} from "./UnControlledAccordion";

const meta: Meta<typeof UnControlledAccordion> = {
    title: 'component/Accordion/UnControlledAccordion',
    component: UnControlledAccordion,
};

export default meta;

type Story = StoryObj<typeof UnControlledAccordion>;

export const UnControlledAccordionPrimary: Story = {
    args: {
        titleValue: 'Users'
    }
} //новая версия создания истории
