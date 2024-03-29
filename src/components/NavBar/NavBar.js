import '../NavBar/NavBar.css'
import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
    const location = useLocation();
    return (
        <div className="NavBar" id ="NavBar">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}id ="Janelle-tag">
                    Janelle
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link
                                to="/contact"
                                className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}
                            >
                                Contact
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/portfolio"
                                className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
                            >
                                Portfolio
                        </Link>
                        </li>
                        <li className="nav-item active">
                            <Link
                                to="/about"
                                className={location.pathname === "/about" ? "nav-link active" : "nav-link"}
                            >
                                About
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}






