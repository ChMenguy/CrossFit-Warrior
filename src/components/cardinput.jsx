function Cardinput({title,type,addperftime,handleperftime,addperfrep,handleperfrep,event,addpseudo,handlepseudo,handlesubmit}){
    return(
        <div className="card cardwod" style={{"width" : "18em"}}>
            <div className="card-body description">
                <div className="header">
                    <div type = 'button' className="backbutton" onClick={event}>🔙</div> 
                    <h2 className="card-title">{title}</h2>
                    <div></div>
                </div> 
                <input class="form-control" type="text" placeholder="Pseudo" value={addpseudo} onChange={handlepseudo}></input>
                {type === 'time' ? <input class="form-control" type="time" value={addperftime} onChange={handleperftime} id="example-time-input"></input> 
                : <input class="form-control" type="number" value={addperfrep} onChange={handleperfrep} id="example-number-input"></input>}
                <button type="button" class="btn btn-warning ajout" onClick={handlesubmit}>Envoyer</button>
            </div>
        </div>
    )
}

export default Cardinput