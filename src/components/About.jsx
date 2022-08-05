import Heading from "./Heading"

function About(){

    return(
    <div className="about container" data-aos="fade-left">
       <Heading name="About Me"/>
       <div className="row mt-5 description">
        <div className="col-md-6"><p>Hello! My name is Siddhant and I enjoy creating things for the internet and the world to see. My interest in programming started when I was introduced to <span>QBASIC</span> at age 12.</p>
        <p> Since then, I have learned and worked with several technologies,worked on several projects and built things that I hope will help people somewhere down the line.</p>
        <p> Here are some technologies that I have worked with : </p>

        </div>
       </div>
       
    </div>

    );
}


export default About;