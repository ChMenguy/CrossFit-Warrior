import Nav from '../components/nav'
import Cardwod from '../components/cardwod'
import useFetchWods from '../components/fetchWods'

function Wodgirl () {
    
    const [wodsgirl] = useFetchWods('http://localhost:3000/wodgirls')
    return(
        <>
        <Nav />
        {!wodsgirl ? 'Chargement...' :
        <div className="container wods">
        {wodsgirl.wods.map(wod=>(
            <Cardwod title = {wod.title} exercices={wod.exercices.map(exercices=><p>{exercices}</p>)} tours={wod.rounds==1 ? 'Tour Unique' : wod.rounds+' tours'}/>
        ))}
        </div>
        }
        </>
    )
}
    


export default Wodgirl;