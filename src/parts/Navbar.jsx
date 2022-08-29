import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faSearch, faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import swal from 'sweetalert'
import { useNavigate } from 'react-router'
import '../assets/css/Navbar.scss';


const Navbar = () => {
    let navigate = useNavigate();
    const userLogin = localStorage.getItem('userLogin');
    const renderAuthButton = () => {
        if(userLogin){
            return <button onClick={authLogout} className="nav-link btn btn-outline-info px-4 me-3" to="/login">Logout</button>
        } else {
            return(
                <> 
                    <Link className="btn btn-primary nav-link btn btn-outline-info px-4 me-3 text-white" to="/login">Login</Link>
                    <Link className="btn btn-primary nav-link btn btn-outline-info px-4 text-white" to="/register">Register</Link>
                </>
            )
        }

    }

    const authLogout =() => {
        localStorage.removeItem('userLogin');
        swal('Success', 'Berhasil Logout', 'success')
        navigate('/login')
    }

    return(
        <nav className="navbar fixed-top shadow-sm navbar-expand-lg navbar-light bg-white py-3">
            <div className="container">
                <Link className="navbar-brand text-dark fw-bold" to="/" > 
                    若い女性 Wakai Josei
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ms-auto">
                        <div className="icon d-flex me-4">
                            <Link to="/profile">
                            <a className="nav-link active" aria-current="page" href="/"><FontAwesomeIcon className="text-primary" icon={faUser} /></a>
                            </Link>
                            <Link to="/allproduct">
                            <a className="nav-link" href="/"><FontAwesomeIcon className="text-primary" icon={faSearch} /></a>
                            </Link>
                            <Link to="/cart" > 
                            <a className="nav-link " href="/"><FontAwesomeIcon className="text-primary" icon={faCartPlus} /></a>
                            </Link>
                        </div>
                    {
                        renderAuthButton()
                    }
                </div>
                </div>
            </div>
        </nav>
    )
}



export default Navbar;