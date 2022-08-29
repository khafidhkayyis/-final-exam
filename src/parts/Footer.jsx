import '../assets/css/ProductDetail.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram, faTwitter, faYoutube, } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
    return(
        <div className="footer py-5" style={{background:'black',color:'white'}}> 
            <div className="row px-5">
                <div className="col-12 col-lg-4">
                    <h2 className="text-center">About</h2>
                    <hr />
                    <p>In Wakai Project, we aim to disrupt the billion dollar sneakers industry by being transparent, giving you the reasonable  price using direct to consumer model, and bringing back the passion and creativity by being courageous to explore. Get to know us better by following our social media handles!</p>
                    <div className="social-media">
                        <ul style={{listStyle: 'none', display: 'flex', padding: '0'}} >
                            <li><a href="/" style={{textDecoration: 'none '}} ><FontAwesomeIcon className="text-primary media"  icon={faInstagram} /></a></li>
                            <li><a href="/" style={{textDecoration: 'none '}} ><FontAwesomeIcon className="text-primary media"  icon={faFacebook} /></a></li>
                            <li><a href="/" style={{textDecoration: 'none '}} ><FontAwesomeIcon className="text-primary media"  icon={faTwitter} /></a></li>
                            <li><a href="/" style={{textDecoration: 'none '}} ><FontAwesomeIcon className="text-primary media"  icon={faYoutube} /></a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-12 col-lg-4">
                    <h2 className="text-center">Company</h2>
                    <hr />
                    <ul style={{listStyle: 'none', padding: '0',display:'flex',}}>
                        <li><a href="/" className="me-5" style={{textDecoration: 'none '}} >About</a></li>
                        <li><a href="/" className="me-5" style={{textDecoration: 'none '}} >Contact Us</a></li>
                        <li><a href="/" className="me-5" style={{textDecoration: 'none '}} >Terms</a></li>
                    </ul>
                </div>
                <div className="col-12 col-lg-4">
                    <h2 className="text-center">Newsleter</h2>
                    <hr />
                    <span>
                    Subscribe to receive updates, access to exclusive deals, and more.
                    </span>
                    <form>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Footer;