import type { Meta, StoryObj } from '@storybook/react';
import { UnControlledAccordion } from './UnControlledAccordion';

const meta: Meta<typeof UnControlledAccordion> = {
    title: 'components/UnControlledAccordion',
    component: UnControlledAccordion,
};

 export default meta;
 type Story = StoryObj<typeof UnControlledAccordion>;

export const ChangeMode = () => {
    return <UnControlledAccordion titleValue={'Users'}  />
};

