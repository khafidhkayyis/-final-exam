import Card from "../parts/Card"
import { Products } from "../data/products";
import { Link } from "react-router-dom";
import React from "react";

class Main extends React.Component {
    state = {
        Products: Products.slice(8),
        PopularProducts: [],
    }

    componentWillUnmount(){
    }
    
    componentDidMount(){
        
        // looping semua data product
        // looping satu product, untuk mendapatkan value.
        let PopularProductId = []
        let PopularProduct = []
        Products.forEach(product => {
            PopularProductId.push({
                id: product.id,
                sold: product.sold
            })
        });

        PopularProductId.sort((a,b)=> (a.sold < b.sold ? 1 : -1))
        PopularProductId.forEach(idproduct => {
            Products.forEach(product => {
                if(idproduct.id === product.id){
                    PopularProduct.push(product)
                }
            });
        })

        PopularProduct = PopularProduct.slice(0, 8)
        this.setState({
            PopularProducts: PopularProduct
        })
        
    }

    render(){
        const {Products} = this.state
        const PopularProduct = this.state.PopularProducts
        
        return(
            <div className="container py-5">
                <div className="row g-4 py-3">
                    <div className="col-12 py-5 d-flex justify-content-center">
                        <span className="h3 text-dark" to="allproduct" style={{textDecoration: 'none', fontWeight: 'bold'}} >
                            Popular Product
                        </span>
                    </div>
                    { PopularProduct.map((product) => {
                        return <Card product={product}  />
                    })}
                </div>
    
                <div className="row g-4 py-3">
                    <div className="col-12 py-5 d-flex justify-content-center">
                        <span className="h3 text-dark" to="allproduct" style={{textDecoration: 'none', fontWeight: 'bold'}} >
                            All Product
                        </span>
                    </div>
                    { Products.map((product) => {
                        return <Card product={product}  />
                    })}
                    <div className="col-12 py-4 d-flex justify-content-center">
                        <Link className="btn btn-primary py-3 px-4" to="allproduct" style={{textDecoration: 'none', fontWeight: 'bold'}} >
                            See All Product
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main;