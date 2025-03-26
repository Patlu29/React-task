import { useNavigate } from "react-router-dom";

const Navbar = () => {

    const navigate = useNavigate();

    const navigateForm = () => {
      navigate("/form");
    };
  
  
    return (
        <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand">Anime WatchList</a>
          <form className="d-flex">
            <button className="btn" type="submit" onClick={navigateForm}>
              Login
            </button>
          </form>
        </div>
      </nav>
    )
}

export default Navbar