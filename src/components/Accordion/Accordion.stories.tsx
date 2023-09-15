import type {Meta, StoryObj} from '@storybook/react';
import {Accordion} from './Accordion';
import {action} from '@storybook/addon-actions'

const meta: Meta<typeof Accordion> = {
    title: 'component/Accordion/Accordion',
    component: Accordion,
};

export default meta;

type Story = StoryObj<typeof Accordion>;

const items = [
    {title: 'react', value: 1},
    {title: 'js', value: 2},
    {title: 'html&css', value: 3}
]

export const AccordionPrimary: Story = {
    args: {
        items: items,
        titleValue: 'Accordion',
        collapsed: true
    }
} //новая версия создания истории

const onChangeCallback = action('onChange')
const onClickCallback = action('onClick')

export const OpenedAccordion = () => {
    return <Accordion titleValue={'Opened Accordion'} collapsed={true} onChange={onChangeCallback} items={items} onClick={onClickCallback}/>
};

export const CollapsedAccordion = () => {
    return <Accordion titleValue={'Collapsed Accordion'} collapsed={false} onChange={onChangeCallback} items={items} onClick={onClickCallback}/>
}; // старая версия написания историй, максимально приближен к реакту