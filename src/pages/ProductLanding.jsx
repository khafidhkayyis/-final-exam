import React from "react";
import { Products } from "../data/products";
import Card from "../parts/Card";

class ProductLanding extends React.Component {

    state = {
        page: 9,
        productData: []
    }

    componentDidMount(){
        document.title =  'All Product | Wakaijose'
        this.setState({
            productData: Products
        })
    }

    handleSearch = (e) =>{
        const keyword = e.target[0].value
        const foundProduct = Products.filter((product) => product.title === keyword)
        this.setState({
            productData: foundProduct
        })
    }
    

    render(){
        const {productData} = this.state
        return(
            <>
                {/* <CustomCarousel /> */}
                <div className="container mb-3" style={{marginTop: '140px'}} >
                    <form onSubmit={(e) => {this.handleSearch(e); e.preventDefault()}} >
                        <div class="input-group input-group-lg">
                            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
                            <button class="input-group-text btn btn-primary px-5" id="inputGroup-sizing-lg">Cari</button>
                        </div>
                    </form>
                </div>

                <div className="container pb-5">
                <div className="row g-4 py-3">
                    <div className="col-12">
                        <h2>All Product</h2>
                    </div>
                    { productData.map((product) => {
                            return <Card product={product} />
                        
                    })}
                    <div className="col-12 text-center">
                        <button className="btn btn-primary px-4">Load More</button>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default ProductLanding;