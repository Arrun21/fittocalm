// import logo from './logo.svg';
// import './App.css';

import React, { useState } from 'react';
import Exercise from './Exercise';
import Categories from './Categories';
import items from './data';

function App() {
  const [exerciseItems, setExerciseItems] = useState(items);
  

  const filterItems = (category) => {
    if(category === 'all'){
      setExerciseItems(items)
      return;
    }
    const newItems = items.filter((item)=> item.category === category)
    setExerciseItems(newItems)
  }

  return <main>
    <section className='exercise section'>
    <div className='title'>
    <img id='logo' src='./images/Healthylogo.png'  alt="logo image" />
      <p className='welcometext'>Welcome to Fit To Calm, choose from a wide range of exercises to help better yourself, improving your mental wellbeing and health!</p>
      <h2>exercises</h2>
      <div className='underline'></div>
    </div>
    <Categories filterItems={filterItems}/>
    <Exercise items={exerciseItems}/>
    </section>
    </main>;
}

export default App;
