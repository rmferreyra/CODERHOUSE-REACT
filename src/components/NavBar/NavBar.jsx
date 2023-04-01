import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav>
            <h3>TOUR & WINES</h3>
            <nav className="navbar bg-primary" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Mendoza</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Bodegas</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">City Tour</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Montaña</a>
        </li>
      </ul>
      <CartWidget />
    </div>
  </div>
</nav>
        </nav>
    )
}

export default NavBar