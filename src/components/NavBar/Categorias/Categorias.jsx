import { Link } from "react-router-dom";

export const Categorias = () => {
    return (
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <Link className="nav-link" to={"/"}>                
                    <button className='btn btn-primary'>
                        <i className="fas fa-home fa-lg">MENDOZA T&W</i>
                    </button>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={"/category/1"}>
                    <button className='btn btn-secondary'>
                        <i className="fas fa-laptop fa-lg">Montaña</i>
                    </button>
                </Link>
            </li>

            <li className="nav-item">
                <Link className="nav-link" to={"/category/2"}>
                    <button className='btn btn-secondary'>
                        <i className="fas fa-mobile fa-lg">Bodegas</i>
                    </button>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={"/category/3"}>
                    <button className='btn btn-secondary'>
                        <i className="fas fa-tv fa-lg">City Tour</i>
                    </button>
                </Link>
            </li>

        </ul>
    );
}