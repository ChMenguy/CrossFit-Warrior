import Nav from '../components/nav'
import Displaywods from '../components/displaywods'

function Wodgirl ({$url}) {
    
   
    return(
        <>
        <Nav />
        <Displaywods 
            url='http://localhost:3000/wodgirls'
        />
        </>
    )
}
    


export default Wodgirl;