import { useState } from "react"
import useFetchWods from '../fetchWods'

function Displayscores(){
    const [type,handletype] = useState({type : 'none'})
    const [wodname,handlewodname] = useState({wodname : 'none'})
    const [scores] = useFetchWods('http://localhost:3000/scores')
    let name = ''

    console.log(scores)
    return(
        <div className="container selection">
            <select class="form-select w-25 p-3" aria-label="Default select example" type={type} onChange={(e)=>handletype({type : e.target.value})}>
                <option selected value = "none">TYPE DE WOD</option>
                <option value = "wodgirl">WOD GIRL</option>
                <option value="wodhero">WOD HERO</option>
            </select>

            {type.type!=='none' 
                    ? <select class="form-select w-25 p-3" aria-label="Default select example">
                        <option selected>WOD</option>
                        {
                        type.type=='wodgirl' ?
                        scores.wods.map((wods)=>{
                            if(wods.species=='wodgirl'){
                                if (name === '' || name !== wods.wod){
                                name = wods.wod       
                                } else { 
                                    return 
                                } 
                                return <option value="1">{name}</option>  
                            }        
                        }) : scores.wods.map((wods)=>{
                            if(wods.species=='wodhero'){
                                if (name === '' || name !== wods.wod){
                                name = wods.wod       
                                } else { 
                                    return 
                                } 
                                return <option value="1">{name}</option>  
                            }        
                        })
                        }
                    </select> 
            
                    : ''}
            
        </div>
        
 
    )
}

export default Displayscores