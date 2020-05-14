import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NasaCard from './NasaCard'

function NasaCardList() {
  const [info, setInfo] = useState({})

  useEffect(() => {
    axios
      .get('https://api.nasa.gov/planetary/apod?api_key=5rFdmJciaA5Ms5vraE1ex94zfMdAphmq1E1MrVRg')
      .then(response => {
        console.log(response.data)
        setInfo(response.data)
        
      
      })
      .catch(error => {
        console.log('the data was not returned')
      })

  },[])

    return (
      <div className='info'>
        
          <NasaCard 
            title={info.title} 
            explanation={info.explanation}
              
            date={info.date}
            image={info.hdurl}
            />
        
      </div>
    )
}

export default NasaCardList
