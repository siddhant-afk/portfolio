
function Navbar(){

    return (
        <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">Siddhant Dudhane</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse py-3" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item px-4">
                <a className="nav-link " aria-current="page" href="#About">About Me</a>
              </li>
              
              <li className="nav-item px-4">
                <a className="nav-link" href="#projects">Projects</a>
              </li>
              <li className="nav-item px-4">
                <a href="#contact" className="nav-link">Contact</a>
              </li>
              <li className="nav-item px-4">
                <a href = "https://drive.google.com/file/d/1GJdzZGqZp7z79El6fHNJrZ8nOAhF1Y0y/view?usp=sharing"className="nav-link btn nav-button px-3 ">Resume</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Navbar;