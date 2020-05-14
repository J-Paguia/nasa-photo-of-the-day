import React from 'react'


function NasaCard(props) {
  console.log(props)

  return(
    <div className='nasa-card-list'>
      <h2>{props.title}</h2>
      <p>{props.explanation}</p>
      <button>Click for Previous Day</button>
      
      <p>{props.date}</p>
      
      <img src={props.image} alt='nasa-img'></img>
      
    </div>

  )
}

export default NasaCard