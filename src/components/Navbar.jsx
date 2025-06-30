import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Portofolio</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><Link className="nav-link" to="/">Beranda</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about">Tentang</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/projects">Proyek</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contact">Kontak</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/blog">Blog</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
