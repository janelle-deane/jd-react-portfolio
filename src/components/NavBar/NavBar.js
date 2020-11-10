import './NavBar.css';
import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
    const location = useLocation();
    return (
        <div className="NavBar">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                    Janelle
                </Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link
                                to="/contact"
                                className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}
                            >
                                Contact
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link
                                to="/portfolio"
                                className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
                            >
                                Portfolio
                        </Link>
                        </li>
                        <li class="nav-item active">
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






