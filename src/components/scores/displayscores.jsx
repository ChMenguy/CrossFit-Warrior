import { useState } from "react"
import useFetchWods from '../fetchWods'
import Selectwodscore from './selectwodscore'

function ScoreTable({date,pseudo,wod,score}){
    return(
                    <tr>
                    <td>{date}</td>
                    <td>{pseudo}</td>
                    <td>{wod}</td>
                    <td>{score}</td>
                    </tr>
               
    )
}


function Displayscores(){
    const [type,handletype] = useState({type : 'none'})
    const [wodname,handlewodname] = useState({wodname : 'none'})
    const [scores] = useFetchWods('http://localhost:3000/scores')

    console.log(scores)
    return(
            <>
            <Selectwodscore 
            type = {type}
            handletype = {handletype}
            scores = {scores}
            wodname = {wodname}
            handlewodname = {handlewodname}
            />
            {
                type.type=='none' ? 
                <table class="table container mt-5 scoretable">
                <thead>
                    <tr>
                    <th scope="col">DATE</th>
                    <th scope="col">PSEUDO</th>
                    <th scope="col">WOD</th>
                    <th scope="col">SCORE</th>
                    </tr>
                </thead>
                <tbody>
                {scores.wods.sort(function(a,b){

                                return new Date(b.date) - new Date(a.date);
                            })
                            .map (score =>
                                <ScoreTable 
                                date = {score.date}
                                pseudo = {score.pseudo.toLocaleString()}
                                wod = {score.wod}
                                score = {score.score}
                                />)
                }
                </tbody>
                </table>
                
                : ''
            }


            </>
     
    )
}

export default Displayscores