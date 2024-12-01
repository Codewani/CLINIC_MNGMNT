const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light py-3" style={{
      background: 'linear-gradient(to right, #f0f8ff, #e6f2ff)',
      borderBottom: '3px solid #4a90e2'
    }}>
      <div className="container-fluid">
        {/* Logo */}
        <a className="navbar-brand d-flex align-items-center" href="#">
          <i className="bi bi-heart-pulse-fill text-primary me-2" style={{fontSize: '2rem'}}></i>
          <span className="text-primary fw-bold">CLINIC</span>
        </a>

        {/* Mobile Toggle Button */}
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

        {/* Navigation Menu */}
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          {/* Main Navigation Links - Centered */}
          <ul className="navbar-nav mx-auto">
            {/* AI Diagnostic */}
            <li className="nav-item">
              <a className="nav-link text-primary" href="/AiRetrieval">
                <i className="bi bi-robot me-1"></i>Ai Retriever
              </a>
            </li>

            {/* Enter Records Dropdown */}
            <li className="nav-item dropdown">
              <a 
                className="nav-link dropdown-toggle text-primary" 
                href="#" 
                id="enterRecordsDropdown" 
                role="button" 
                data-bs-toggle="dropdown" 
                aria-expanded="false"
              >
                <i className="bi bi-file-medical me-1"></i>Enter Records
              </a>
              <ul 
                className="dropdown-menu" 
                aria-labelledby="enterRecordsDropdown"
              >
                <li>
                  <a className="dropdown-item" href="/CreatePatient">
                    <i className="bi bi-person-add me-2 text-primary"></i>Patient
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/CreateWard">
                    <i className="bi bi-building-add me-2 text-primary"></i>Ward
                  </a>
                </li>
              </ul>
            </li>

            {/* View Records Dropdown */}
            <li className="nav-item dropdown">
              <a 
                className="nav-link dropdown-toggle text-primary" 
                href="#" 
                id="viewRecordsDropdown" 
                role="button" 
                data-bs-toggle="dropdown" 
                aria-expanded="false"
              >
                <i className="bi bi-clipboard-pulse me-1"></i>View Records
              </a>
              <ul 
                className="dropdown-menu" 
                aria-labelledby="viewRecordsDropdown"
              >
                <li>
                  <a className="dropdown-item" href="/viewpatients">
                    <i className="bi bi-person-vcard me-2 text-primary"></i>Patient
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/viewwards">
                    <i className="bi bi-buildings me-2 text-primary"></i>Ward
                  </a>
                </li>
              </ul>
            </li>

            {/* About */}
            <li className="nav-item">
              <a className="nav-link text-primary" href="#">
                <i className="bi bi-info-circle me-1"></i>About
              </a>
            </li>
          </ul>

          {/* Authentication Buttons - Right Side */}
          <div className="d-flex">
            <a 
              className="btn btn-outline-primary me-2" 
              href="/logout"
            >
              <i className="bi bi-box-arrow-right me-1"></i>Logout
            </a>
            <a 
              className="btn btn-primary" 
              href="/login"
            >
              <i className="bi bi-person-check me-1"></i>Sign In
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;