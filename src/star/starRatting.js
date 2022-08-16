import React, {useState} from 'react';
import Star from './star';

const createArray= (length)=>[
    ...Array(length)
  ];

function StarRating({totalStar = 5}){
    const [selectedStars, 
    setSelectedStars
  ] =useState(0);
  return (
  <> 
  <p>Please rate our Application</p>
  {
  createArray(totalStar).map((n, i)=> (
    <Star 
    key={i}
    selected={selectedStars>i}
    onSelect ={() => setSelectedStars(i+ 1)}
    />
  ))
  }
  <p>Selected {selectedStars} out of {totalStar}</p>
  </>
  )
  }
  export default StarRating;