
import Email from "./Email"

function Contact(){
    return(
   <div className="contact container text-center" id="contact">
    <div className="row">
        <div className="col-md-4"><hr /></div>
        <div className="col-md-4"><h1>Get in Touch</h1></div>
        <div className="col-md-4"><hr /></div>
    </div>
    <p className="description mt-3">Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
     <Email />
   </div>

    );
}


export default Contact;