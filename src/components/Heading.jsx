function Heading(props){

    return(
    <div className="row">
        <div className="col-md-2">
        <h1 className="heading">{props.name}</h1>
        </div>
        <div className="col-md-6 ps-0 py-2"><hr /></div>
    </div>
    
    );
}


export default Heading;