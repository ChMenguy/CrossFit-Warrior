import React, { useEffect, useState } from 'react';
import Cardwod from '../components/cardwod'
import Cardinput from '../components/cardinput'
import useFetchWods from '../components/fetchWods'


function Displaywods ({url}) {
    const [addScore,handleAddScore] = useState({status : false,
                                                wod :''});
    const [addPerftime,handlePerftime] = useState('00:00')
    const [addPerfrep,handlePerfrep] = useState('00')
    const [wodsgirl] = useFetchWods(url)

    return(
        <>
        {!wodsgirl ? 'Chargement...' :
        <div className="container wods">
       
            {wodsgirl.wods.map(wod=>(
                (addScore.status && addScore.wod===wod.title)?  
                  <Cardinput 
                    title = {wod.title}
                    type = {wod.type}
                    event = {()=>handleAddScore({status : false, wod : ''})}
                    addperftime = {addPerftime}
                    addperfrep = {addPerfrep}
                    handleperftime = {(e)=>handlePerftime()}           
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
