import '../assets/css/Cart.scss';
import React from 'react';
import { Products } from '../data/products';
import handleToRupiah from '../assets/Services/handleToRupiah';
import { Link } from 'react-router-dom';

class Cart extends React.Component {
    state = {
        titlle: 'Cart',
        quantity: 0,
        productCarts: []
    }
    componentDidMount(){
        document.title = 'Cart';

        const emailLogin = localStorage.getItem('userLogin');
        if(!emailLogin){
            window.location.href = "/login";
            // swal('Yah', 'Login dulu bro', 'warning')
        } else {

            // ambil data dari localStorage
            const users = JSON.parse(localStorage.getItem('users'));
            const emailLogin = localStorage.getItem('userLogin');
            let userLogin = {}
    
            // cari data user yang sesuai dengan email yang login
            users.forEach(user => {
                if(user.email === emailLogin){
                    userLogin = user
                }
            });
    
            // ambil cart dari user yang login
            let userCarts = userLogin.cart
    
    
            let cartProducts = []
            userCarts.forEach((userCart) => {
                const productCart = Products.filter((product) => product.id === userCart.idProduct )
                productCart[0].quantity = parseInt(userCart.quantity)  
                cartProducts.push(productCart[0])
            })
            this.setState({
                productCarts: cartProducts
            })
        }

    }
    
    handleMinus = () => {
        if(this.state.quantity > 1){
            this.setState({
                quantity: this.state.quantity - 1
            })
        }
    }

    handlePlus = () => {
        const stock = 5;
        if(this.state.quantity < stock){
            this.setState({
                quantity: this.state.quantity + 1
            })
        }
    }

    render(){
        const {productCarts} = this.state
        let subTotal = 0
        let total = 0
        return(
            <div className="container cart py-5 mt-5">
                <div className="row">
                    <div className="col-12 text-center mt-4">
                        <h2>Cart</h2>
                    </div>
                    <div className="col-10 mx-auto">
                        <div className="row">
                            <div className="col-4 p-0 text-center">
                                <h4>Product</h4>
                                <hr />
                            </div>
                            <div className="col-4 p-0 text-center">
                                <h4>Quantity</h4>
                                <hr />
                            </div>
                            <div className="col-4 p-0" style={{textAlign: 'right'}} >
                                <h4>Sub Total</h4>
                                <hr />
                            </div>
                        </div>
                       {
                           productCarts.map(cart => {
                               subTotal = parseInt(cart.quantity) * cart.price
                               total += subTotal
                               return(
                                <div className="row cart__my">
                                    <div className="col-4 col-lg-4 p-0">
                                        <div className="row">
                                            <div className="col-12 col-md-6">
                                                <img className="" src={cart.image} alt={cart.title} />
                                            </div>
                                            <div className="col-12 col-md-6 text-left cart__info">
                                                <h3 className="h6" >{cart.title}</h3>
                                                {/* <select class="form-select" aria-label="Default select example">
                                                    <option selected value="1">36</option>
                                                    <option value="2">37</option>
                                                    <option value="3">38</option>
                                                </select> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4 col-lg-4 p-0 cart__counter text-center">
                                        <div className="cart__counter__box " >
                                            <button className="btn btn-primary">-</button>
                                            <div class="mb-3">
                                                <input type="number" style={{width: '50px'}}  class="form-control" value={cart.quantity} />
                                            </div>
                                            <button className="btn btn-primary">+</button>
                                        </div>
                                    </div>
                                    <div className="col-4 col-lg-4 p-0 cart__price" style={{textAlign: 'right'}} >
                                        <span className="h5 fw-bold text-danger" >Rp { handleToRupiah(cart.price)}</span>
                                    </div>
                                    <hr style={{margin: '20px 0'}} />
                                </div>
                               )
                            })
                        }
                        <div className="d-flex justify-content-end" >
                            <div className="d-flex flex-column justify-content-end" >
                                <h4 className="h4 text-right">Total</h4>
                                <h1 className="h1">Rp {handleToRupiah(total)}</h1>
                                <Link to="/checkout">
                                <button className="btn btn-primary">Checkout</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Cart;