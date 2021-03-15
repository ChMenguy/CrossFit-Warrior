import React, { useEffect, useState } from 'react';
import Cardwod from '../components/cardwod'
import useFetchWods from '../components/fetchWods'


function Displaywods ({url}) {
    const [addScore,handleAddScore] = useState({status : false,
                                                wod :''});
    const [wodsgirl] = useFetchWods(url)

    return(
        <>
        {!wodsgirl ? 'Chargement...' :
        <div className="container wods">
       
            {wodsgirl.wods.map(wod=>(
                (addScore.status && addScore.wod==wod.title)?  
                  wod.title  
                : <Cardwod 
                        state = {addScore}
                        title = {wod.title} 
                        exercices={wod.exercices.map(exercices=><p>{exercices}</p>)} 
                        tours={wod.rounds==='1' ? 'Tour Unique' : wod.rounds+' tours'}
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
