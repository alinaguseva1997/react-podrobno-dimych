import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {UnControlledOnOff} from "./components/UnControlledOnOff/UnControlledOnOff";
import {OnOff} from "./components/OnOff/OnOff";
import {UnControlledAccordion} from "./components/UnControlledAccordion/UnControlledAccordion";
import {UnControlledRating} from "./components/UnControlledRating/UnControlledRating";



export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

function App() {
  console.log('App rendered')

  let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
  let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
  let [on, setOn] = useState<boolean>(false)

  return (
      <div className={'App'}>
        <UnControlledOnOff onChange = {setOn}/> {on.toString()}
        <OnOff valueOnOff = {on} onClick = {setOn}/>
        <UnControlledAccordion titleValue = {'Menu'}/>
        <Rating value = {ratingValue} onClick = {setRatingValue}/>

        <UnControlledRating />
        <Accordion titleValue = {'Menu'} collapsed={accordionCollapsed} onChange = {() => setAccordionCollapsed(!accordionCollapsed)} items={[]} onClick={() => {}}/>

      </div>
  );
}

type PageTitlePropsType = {
  title: string
}

function PageTitle(props: PageTitlePropsType) {
  console.log('PageTitle rendered')
  return <h1>{props.title}</h1>
}

export default App;
