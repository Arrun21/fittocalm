import React from 'react';
import exercise from './data';

const Exercise = ({items}) => {
  return ( 
  <div className="section-center">
    {items.map((exerciseItem)=> {
        const {id,title,img,desc,experience} = exerciseItem;
        return (
        <article key={id} className="exercise-item">
            <img src={img} alt={title} className='photo'/>
            <div className='item-info'>
                <header>
                    <h4>{title}</h4>
                    <h4 className='experience'>{experience}</h4>
                </header>
                <p className='item-text'>{desc}</p>
            </div>
        </article>
    );
    })}
  </div>
  );
};

export default Exercise;