import React from 'react';
import { Products } from '../data/products';
import swal from 'sweetalert';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

class Checkout extends React.Component {
    state = {
        quantity: 0,
        productCarts: []
    }

    componentDidMount(){
        document.title = 'Checkout';

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
    
    handleMinus = () => {
        if(this.state.quantity > 1){
            this.setState({
                quantity: this.state.quantity - 1
            })
        }
    }

    handleCheckout = (e) => {
        const stock = 5;
        if(this.state.quantity < stock){
            this.setState({
                quantity: this.state.quantity + 1
            })
        }

        // const shipping
        // const shippingTo
        // const shippingMethod
        // const user {
        //     shipping,
        //     shippingTo,
        //     shippingMethod
        //     cart : []
        // };



    }

    handleChekout(){
        swal({
            title: "Payment Success!",
            text: "Thankyou for shoping!",
            icon: "success",
            button: "Go to Home",
          })
        .then(() => {
            window.location.href = '/'
        });
    }


    render(){
        return(
            <div className="container mt-5 py-5">
                <h1 className='h4' >Checkout</h1>
                <hr />
                <div className="card-checkout d-flex">

                    <div className="payment-method py-4 col-6" >
                        <form>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Shipping</label>
                                    <input type="text" class="form-control" id="exampleInputEmail1" />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Shipping To</label>
                                    <input type="text" class="form-control" id="exampleInputEmail1" />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Shipping Method</label>
                                    <input type="text" class="form-control" id="exampleInputEmail1" />
                                </div>
                        </form>
                        <button onClick={this.handleChekout}  type="button" class="btn btn-primary">Pay Now</button>
                    </div>

                    <div className="card-checkout py-4 col-4 ms-5">
                        <div className="card-product d-flex">
                            <img className="image w-100" src={(Products[0].image)} alt="/" />
                        </div>

                    </div>
                </div>
            </div>
            
        )
    }
}

function CheckoutNavigate(){
    let navigate = useNavigate();
    return <Checkout navigate={navigate} />
}

export default CheckoutNavigate