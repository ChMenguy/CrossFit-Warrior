import Cardwod from '../components/cardwod'
import useFetchWods from '../components/fetchWods'

function Displaywods ({url}) {
    const [wodsgirl] = useFetchWods(url)
    return(
        <>
        {!wodsgirl ? 'Chargement...' :
        <div className="container wods">
        {wodsgirl.wods.map(wod=>(
            <Cardwod 
                title = {wod.title} 
                exercices={wod.exercices.map(exercices=><p>{exercices}</p>)} 
                tours={wod.rounds==='1' ? 'Tour Unique' : wod.rounds+' tours'}
                key = {wod.title}
            />
        ))}
        </div>
        }
        </>
    )
}

export default Displaywods
