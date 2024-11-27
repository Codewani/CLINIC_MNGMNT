function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#5A9BD5' }}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">DBook Inc</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            {/* Enter Records Dropdown */}
            <li className="nav-item">
              <a className="nav-link mx-2" href="#">
                Ai Diagnostic
              </a>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link mx-2 dropdown-toggle"
                href="#"
                id="enterRecordsDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Enter Records
              </a>
              <ul className="dropdown-menu" aria-labelledby="enterRecordsDropdown">
                <li>
                  <a className="dropdown-item" href="/CreatePatient">Patient</a>
                </li>
                <li>
                  <a className="dropdown-item" href="/CreateWard">Ward</a>
                </li>
              </ul>
            </li>

            {/* View Records Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link mx-2 dropdown-toggle"
                href="#"
                id="viewRecordsDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                View Records
              </a>
              <ul className="dropdown-menu" aria-labelledby="viewRecordsDropdown">
                <li>
                  <a className="dropdown-item" href="/viewpatients">Patient</a>
                </li>
                <li>
                  <a className="dropdown-item" href="/viewwards">Ward</a>
                </li>
              </ul>
            </li>

            {/* About Link */}
            <li className="nav-item">
              <a className="nav-link mx-2" href="#">
                About
              </a>
            </li>

            {/* Sign In or Logout */}
            <li className="nav-item">
              <a className="nav-link mx-2" href="/login">
                Sign In
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-2" href="/logout">
                Logout
              </a>
            </li>
          </ul>

          {/* Social Media Links (Desktop Only) */}
          <ul className="navbar-nav ms-auto d-none d-lg-inline-flex">
            <li className="nav-item mx-2">
              <a className="nav-link text-dark h5" href="#" target="_blank" rel="noreferrer">
                <i className="fab fa-google-plus-square"></i>
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link text-dark h5" href="#" target="_blank" rel="noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link text-dark h5" href="#" target="_blank" rel="noreferrer">
                <i className="fab fa-facebook-square"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;



