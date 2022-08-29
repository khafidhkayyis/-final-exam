import '../assets/css/CustomCarousel.scss';

const CustomCarousel = () => {
    return(
        <div id="carouselExampleIndicators" className="carousel carousel-fade slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://i.shgcdn.com/e3c506e2-d4f1-43ca-bf80-0983f1641896/-/format/auto/-/preview/3000x3000/-/quality/lighter/" className="d-block w-100 " alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="https://cdn.shopify.com/s/files/1/2485/4082/files/Banner-Desktop-NG-Flex_5c3bf547-7d77-41e2-83d2-23969642a858_1800x.jpg?v=1637286049" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="https://cdn.shopify.com/s/files/1/2485/4082/files/Banner-Desktop_8186caa1-259c-4464-bfba-c38f9bcf7df3_1800x.jpg?v=1632469664" className="d-block w-100" alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default CustomCarousel;