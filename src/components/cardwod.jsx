function Cardwod({title,exercices,tours}){
    return(
        <div class="card cardwod" style={{"width" : "18em"}}>
            <div class="card-body description">
                <h2 class="card-title">{title}</h2>
                <div class = "rounds">{tours}</div>
                <p class="card-text exercices">{exercices}</p>
                <a class="card-link">Ajoute ta perf</a>
            </div>
        </div>
    )
}

export default Cardwod