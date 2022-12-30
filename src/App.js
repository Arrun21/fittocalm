// import logo from './logo.svg';
// import './App.css';

import React, { useState } from 'react';
import Exercise from './Exercise';
import Categories from './Categories';
import items from './data';

function App() {
  const [exerciseItems, setExerciseItems] = useState(items);
  const [categories, setCategories] = useState([]);


  return <main>
    <section className='exercise section'>
    <div className='title'>
      <h2>exercises</h2>
      <div className='underline'></div>
    </div>
    <Categories/>
    <Exercise items={exerciseItems}/>
    </section>
    </main>;
}

export default App;
