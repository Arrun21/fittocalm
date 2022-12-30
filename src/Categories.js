import React from 'react';

const Categories = ({filterItems}) => {

  return <div className='btn-container'>
    <button className='filter-btn' onClick={()=> filterItems('all')}> 
    all
    </button>
    <button className='filter-btn' onClick={()=> filterItems('bodyweight')}> 
    bodyweight
    </button>
    <button className='filter-btn' onClick={()=> filterItems('chest')}> 
    chest
    </button>
    <button className='filter-btn' onClick={()=> filterItems('back')}> 
    back
    </button>
    <button className='filter-btn' onClick={()=> filterItems('biceps')}> 
    biceps
    </button>
    <button className='filter-btn' onClick={()=> filterItems('tricep')}> 
    triceps
    </button>
    <button className='filter-btn' onClick={()=> filterItems('legs')}> 
    legs
    </button>
  </div>;
};

export default Categories;