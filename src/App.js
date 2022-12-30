// import logo from './logo.svg';
// import './App.css';

import React, { useState } from 'react';
import Exercise from './Exercise';
import Categories from './Categories';
import items from './data';

function App() {
  const [exerciseItems, setExerciseItems] = useState(items);
  // const [categories, setCategories] = useState([]);

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
    <h2>Fit To Calm</h2>
    <div className='underline'></div>
    <br></br>
      <h2>exercises</h2>
      <div className='underline'></div>
    </div>
    <Categories filterItems={filterItems}/>
    <Exercise items={exerciseItems}/>
    </section>
    </main>;
}

export default App;
