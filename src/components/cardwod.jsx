function Cardwod({title,exercices,tours,state,event}){
    return(
        <div className="card cardwod" style={{"width" : "18em"}}>
            <div className="card-body description">
                <h2 className="card-title">{title}</h2>
                <div className = "rounds">{tours}</div>
                <p className="card-text exercices">{exercices}</p>
                <button type="button" class="btn btn-warning ajout" onClick={event} >Ajoute ta Perf</button>
            </div>
        </div>
    )
}

export default Cardwod