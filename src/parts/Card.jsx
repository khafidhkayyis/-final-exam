import { Link } from "react-router-dom";
import handleToRupiah from "../assets/Services/handleToRupiah";
import '../assets/css/Card.scss';

const Card = ({product}) => {
    return(
        <div class="col-12 col-md-6 col-lg-3">
            <div class="card" style={{textAlign: 'center'}}>
                <img src={product.image} class="card-img-top" alt="..." />
                <div class="card-body">
                    <Link to={{pathname: `/product/${product.id}`}} style={{textDecoration: 'none'}} >
                        <h5 class="card-title text-dark">{product.title}</h5>
                    </Link>
                    <span className="card-price">Rp {handleToRupiah(product.price)}</span>
                    <span className="card-discount">Rp {(product.diskon)}</span><br />
                    <span className="card-discount">{(product.sold)} Sold Out</span>
                </div>
                <Link to={{pathname: `/product/${product.id}`}} className="btn border-0 border-top fw-bold btn-outline-primary rounded-0 py-3">Detail</Link>
            </div>
        </div>
    )
}


export default Card;