import Heading from "./Heading"
import Card from "./Card";

function Projects(){

    return (
        <div className="container projects" data-aos="fade-in" id="projects">
            <Heading name = "My Work"/>
         
           <div className="row">
           <div className="col-md-4">
            <Card title = "Heart Disease Classification" description = "This notebook takes a look at the the data pertaining to heart attributes of various people and analyzes it to predict whether a person has a heart disease or not." github = "https://github.com/siddhant-afk/Heart-Disease-Classification"  />
            </div>
            <div className="col-md-4">
            <Card title = "QuickTab" description = "An online invoicing and inventory management system." github = "https://github.com/siddhant-afk/QuickTab"/>
            </div>
            </div>
            
        </div>
        
  

    );
}


export default Projects;