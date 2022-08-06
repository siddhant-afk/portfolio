
function Card(props){

    return(

         <div className="card mt-5 container">
            <div className="d-flex justify-content-between"> <img src="images/folder.png" alt="" className="img-fluid card-icons" />
            <div>
            
          <a href={props.github}> <img src="images/github.png" alt="" className="img-fluid card-icons" /></a>  

        <a href={props.open}><img src="images/open.png" alt="" className="img-fluid card-icons ms-3" style={{display : props.open?"inline" : "none"}} /></a>  

</div>

            </div>

            <div className="card-heading">
                <b>{props.title}</b>
            </div>
            <p className="card-text mt-3">
               {props.description}
            </p>
         
         </div>
    )
}

export default Card;