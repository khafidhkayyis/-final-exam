import '../assets/css/ProductDetail.css'
import { useParams } from 'react-router';
import { Products } from '../data/products';
import swal from 'sweetalert';
import handleToRupiah from '../assets/Services/handleToRupiah';

const ProductDetail = () => {
    const params = useParams();
    const idProduct = params.id;
    let detailProduct = null;
    
    Products.forEach(product => {
        if(product.id === params.id){
            detailProduct = product;
        }
    });

    // const params = useParams();
    // const idProduct = params.id;
    // let productDetail = null
    // products.forEach(product => {
    //     if(product.id === idProduct){
    //         productDetail - product;
    //     }
    // })

    const handleAddToCart = () => {
        let users = JSON.parse(localStorage.getItem('users'));
        let emailLogin = localStorage.getItem('userLogin');
        let userCart = [];
        let userLogin = []
        

        users.forEach((user) => {
            if(user.email === emailLogin){
                userCart = user.cart
                userLogin = user
            }
        })
        
        // jalankan ketika cart belum ada isinya
        if(userCart.length === 0){

            userCart.push({
                idProduct: idProduct,
                quantity: 1
            })

            let userWithoutUserLogin = users.filter((user) => user.email !== emailLogin)
            let userWithNewCart = {
                name: userWithoutUserLogin.name,
                email: userLogin.email,
                password: userLogin.password,
                cart: userCart,
                dateOfBirth: userLogin.dateOfBirth,
                phone: userLogin.phone,
                address: userLogin.address,
                city: userLogin.city,
                province: userLogin.province
            }
    
            userWithoutUserLogin.push(userWithNewCart)
            localStorage.setItem('users', JSON.stringify(userWithoutUserLogin));


        } else {
            
            let  cartttt = userCart.filter((cart) => cart.idProduct === idProduct)
            if(cartttt.length !== 0){
                swal("Maaf", "Product sudah ada di cart", "error");
            } else {
                userCart.push({
                    idProduct: idProduct,
                    quantity: 1
                })
        
                let userWithoutUserLogin = users.filter((user) => user.email !== emailLogin)
                let userWithNewCart = {
                    name: userWithoutUserLogin.name,
                    email: userLogin.email,
                    password: userLogin.password,
                    cart: userCart,
                    dateOfBirth: userLogin.dateOfBirth,
                    phone: userLogin.phone,
                    address: userLogin.address,
                    city: userLogin.city,
                    province: userLogin.province
                }
        
                userWithoutUserLogin.push(userWithNewCart)
                localStorage.setItem('users', JSON.stringify(userWithoutUserLogin));
                swal("Hore", "Berhasil", "success");
            } 
        }
    }

    return(
        <div className="container ProductDetail py-5 mt-5">
             <div className="row py-5">
            <div className="col-12 text-center mb-5">
                <h1>Detail Product</h1>
                <hr />
            </div>
            <div className="col-12 col-lg-6">
                <img src={detailProduct.image} class="card-img-top" alt="..." />
            </div>
            <div className="col-12 col-lg-6 px-4 py-3">
                <h6>若い女性 Wakai Josei</h6>
                <div className="d-flex justify-content-between">
                    <h3>{detailProduct.title}</h3>
                    <span className="fw-bold h3 text-danger" >Rp {handleToRupiah(detailProduct.price)}</span>
                </div>
                <hr />
                <div className="py-3" >
                    <h5>Size</h5>
                    <div className="size-box" >
                        <button className="me-3 btn btn-dark-outline-info border mb-2">36</button>
                        <button className="me-3 btn btn-dark-outline-info border mb-2">37</button>
                        <button className="me-3 btn btn-dark-outline-info border mb-2">38</button>
                        <button className="me-3 btn btn-dark-outline-info border mb-2">39</button>
                        <button className="me-3 btn btn-dark-outline-info border mb-2">40</button>
                        <button className="me-3 btn btn-dark-outline-info border mb-2">41</button>
                        <button className="me-3 btn btn-dark-outline-info border mb-2">42</button>
                        <button className="me-3 btn btn-dark-outline-info border mb-2">43</button>
                        <button className="me-3 btn btn-dark-outline-info border mb-2">44</button>
                        <button className="me-3 btn btn-dark-outline-info border mb-2">45</button>
                    </div>
                </div>
                 <div className="mt-4" >
                     <h5>Quality</h5>
                     <button onClick={handleAddToCart} className="btn btn-primary mb-4 w-100">ADD TO CART</button>
                     <h6>NAH X EVOS LEGENDARY</h6>
                     <p>The main course; 
                        10+ months in the making, Legendary is now ready to go straight to your plate. 
                        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                        Combining our latest-tech, MonoTranslucent, with more subtle and neutral materials,
                        faux-suede and faux leather, to make them taste perfect to each and every one of you.
                    </p>
                 </div>
            </div>
        </div>

        </div>
       
    )
}

export default ProductDetail;