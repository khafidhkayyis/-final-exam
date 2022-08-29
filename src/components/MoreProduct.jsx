import '../assets/css/ProductDetail.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClock, faPlane, faRedo } from "@fortawesome/free-solid-svg-icons";
const MoreProduct = () => {
    return(
        <div className="container MoreProduct py-5 my-5">
            <div className="row">
                <div className="col-12 col-lg-4 text-center">
                    <span><FontAwesomeIcon className="text-dark iconProduct" icon={faPlane}/></span>
                    <h1 className="mt-4" >Gratis Ongkir</h1>
                </div>
                <div className="col-12 col-lg-4 text-center">
                    <span><FontAwesomeIcon className="text-dark iconProduct" icon={faRedo}/></span>
                    <h1 className="mt-4" >Gratis Tukar Barang</h1>
                </div>
                <div className="col-12 col-lg-4 text-center">
                    <span><FontAwesomeIcon className="text-darkn iconProduct" icon={faClock}/></span>
                    <h1 className="mt-4" >Support 24 jam</h1>
                </div>
            </div>
        </div>
    )
}

export default MoreProduct;