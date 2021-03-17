import Nav from '../components/nav'
import Displaywods from '../components/wods/displaywods'

function Wodhero () {
    return(
        <>
        <Nav />
        <Displaywods 
            url='http://localhost:3000/wodheros'
        />
        </>
    )
}

export default Wodhero;