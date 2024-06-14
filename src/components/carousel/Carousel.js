import './Carousel.scss';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';



export const Carousel = () => {
    const options = {
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            1000: {
                items: 1
            }
        }
    };
    return (
        <OwlCarousel className="owl-theme" {...options}>
            <div className="item">
                <img src="assets/slider01.avif" alt="" />
                <h4>1</h4></div>
            <div className="item">
                <img src="assets/slider02.avif" alt="" />
                <h4>2</h4></div>
            <div className="item">
                <img src="assets/slider3.avif" alt="" />

                <h4>3</h4></div>
        </OwlCarousel>
    )
}
