import './Carousel.scss';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
// import OwlCarousel from 'react-owl-carousel2';


export const Carousel = () => {
    const options = {
        items: 1,
        nav: true,
        rewind: true,
        autoplay: true
    };
    return (
        <div id='wrapper'>
            <div className="owl-carousel" id='slider-area'>
                <img src="assets/slider01.avif" alt="" />
                <img src="assets/slider02.avif" alt="" />
                <img src="assets/slider3.avif" alt="" />
            </div>
            <div className="slider-text">
                <h1>Make your Online Payment
                    <br />
                    Safer &amp; Comfortable</h1>
                <p>Offer payment methods flexibility. Customers prefer a variety of payment options at the checkout.</p>
                <a class="common-btn" href="/">Let's Start Now
                    <span></span>
                </a>
            </div>
        </div>
    )
}
