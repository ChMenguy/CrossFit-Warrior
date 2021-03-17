import React, { useEffect, useState } from 'react';
import Cardwod from './cardwod'
import Cardinput from './cardinput'
import useFetchWods from '../fetchWods'
import axios from 'axios';

function Displaywods ({url}) {
    const [addScore,handleAddScore] = useState({status : false, wod :''});
    const [addPerftime,handlePerftime] = useState('00:00')
    const [addPerfrep,handlePerfrep] = useState('00')
    const [addPseudo,handlePseudo] = useState('')
    const [data] = useFetchWods(url)

    useEffect(()=>{
      handlePerftime(addPerftime) 
      handlePerfrep(addPerfrep)
      handlePseudo(addPseudo)
    })

    const handleSubmit = (title,type,species) =>{
      const newperf = {
        wod : title,
        pseudo : addPseudo,
        score : type === 'time' ? addPerftime : addPerfrep,
        species : species,
        date : new Date()
      }
      console.log(newperf)
      axios.post('http://localhost:3000/scores', newperf)

      handlePseudo('')
      handlePerfrep('00')
      handlePerftime('00:00')
      handleAddScore({status : false, wod : ''})
    }

    return(
        <>
        {!data.load ? 'Chargement...' :
        <div className="container wods">
       
            {data.wods.map(wod=>(
                (addScore.status && addScore.wod===wod.title)?  
                  <Cardinput 
                    title = {wod.title}
                    type = {wod.type}
                    event = {()=>handleAddScore({status : false, wod : ''})}
                    addperftime = {addPerftime}
                    addperfrep = {addPerfrep}
                    addpseudo = {addPseudo}
                    handleperftime = {(e)=>handlePerftime(e.target.value)}
                    handleperfrep = {(e)=>handlePerfrep(e.target.value)}   
                    handlepseudo =  {(e)=>handlePseudo(e.target.value)} 
                    handlesubmit = {()=>handleSubmit(wod.title,wod.type,wod.species)}
                  />  
                : <Cardwod 
                    state = {addScore}
                    title = {wod.title} 
                    exercices={wod.exercices.map(exercices=><p>{exercices}</p>)} 
                    tours={wod.rounds}
                    key = {wod.title}
                    event = {()=>handleAddScore({status : true, wod : wod.title})}    
                    />    
            ))
         } 
        </div>
        }
        </>
    )
}

export default Displaywods
