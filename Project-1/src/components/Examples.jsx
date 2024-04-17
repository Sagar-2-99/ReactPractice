import {useState} from 'react';
import { EXAMPLES } from "../data-with-examples";
import TabButton from "./TabButton"
import Section from './Section';
import Tabs from './Tabs';

export default function Examples(){

  //stateArray is an array returned by useState
  //const stateArray= useState('Please click a button');
  //Another Way of Destructuring
  const [selectedTopic, setSelectedTopic] = useState("");
  //selectedTopic is the Current State value and setSelectedTopic is the function to update the state

  //Call useState function at top level of the code to make it work
  //React Hooks must not be called outside of a React function component.
  //React Hooks must not be called in nested code statements(eg. inside an if statement).
  let tabContent = <p>"Please Click a button"</p>;
  function handleSelect(selectButton) {
    setSelectedTopic(selectButton); //set the state to selectButton;
  }
  console.log('Sagar');

  if(selectedTopic){
    tabContent = (<div id = "core-concepts">
    <h3>{EXAMPLES[selectedTopic].title}</h3>
    <p>{EXAMPLES[selectedTopic].description}</p>
    <pre>
      <code>
          {EXAMPLES[selectedTopic].code}
      </code>
    </pre>
  </div>);
  }

    return (<Section title="Examples" id="examples">
    <Tabs buttons={
        <>
        <TabButton isSelected={selectedTopic === 'components'} onClick={() => handleSelect("components")}>
        Components
      </TabButton>
      <TabButton isSelected={selectedTopic === 'jsx'} onClick={() => handleSelect("jsx")}>JSX</TabButton>
      <TabButton isSelected={selectedTopic === 'props'} onClick={() => handleSelect("props")}>Props</TabButton>
      <TabButton isSelected={selectedTopic === 'state'} onClick={() => handleSelect("state")}>State</TabButton>
        </>
    }>
        {tabContent}
    </Tabs>
    <menu>
    
    </menu>
      
  </Section>);
}