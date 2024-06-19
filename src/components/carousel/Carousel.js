import './Carousel.scss';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'animate.css/animate.min.css';
import { useRef } from 'react';


export const Carousel = () => {
    
    const options = {
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 3000,
        smartSpeed: 450,
        responsive: {
            400: {
                items: 1
            }
        }
    };

    const carouselRef = useRef(null);
    const handleTranslate = () => {
        const items = document.querySelectorAll('.owl-item');
        items.forEach(item => {
            const content = item.querySelector('.captionText');
            if (content) {
                content.classList.remove('animate__animated', 'animate__fadeInLeft');
            }
        });
    };

    const handleTranslated = () => {
        const activeItems = document.querySelectorAll('.owl-item.active');
        activeItems.forEach(item => {
            const content = item.querySelector('.captionText');
            if (content) {
                content.classList.add('animate__animated', 'animate__fadeInLeft');
            }
        });
    };
    return (
        <div className="bannerSlider">
            <OwlCarousel className="owl-theme" 
            {...options} 
            onTranslate={handleTranslate} onTranslated={handleTranslated}
            ref={carouselRef}
            >
                <div className="item slide1">
                    <div className="caption">
                        <div className="captionText">
                            <h1>Make your Online Payment <br />Safer &amp; Comfortable</h1>
                            <p>Offer payment methods flexibility. Customers prefer a variety of payment options at the checkout.</p>
                        </div>
                        <a className="common-btn" href="/">Let's Start Now</a>
                    </div>
                </div>
                <div className="item slide2">
                    <div className="caption">
                        <div className="captionText" >
                            <h1>Your Success Is Our Ultimate Duty</h1>
                            <p>Is to firmly decide that you are with the company, industry and business that you want to be with.</p>
                        </div>
                        <a className="common-btn" href="/">Let's Start Now</a>
                    </div>
                </div>
                <div className="item slide3">
                    <div className="caption">
                        <div className="captionText">
                            <h1>Investment Company With Experience</h1>
                            <p>An investment company is a trust or entity that collects capital from various investors and invests the pooled money in a range of financial securities.</p>
                        </div>
                        <a className="common-btn" href="/">Let's Start Now</a>
                    </div>
                </div>
            </OwlCarousel>
        </div>
    )
}

export const BankCarousel = () => {
    const features = {
        loop: true,
        margin: 10,
        nav: false,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
            700: {
                items: 5
            }
        }
    };
    return (
        <>
            <div className="bankSlider">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-12">
                            <div className="logoText">
                                <h3>Banks Who Trust Us</h3>
                            </div>
                        </div>
                        <div className="col-md-9 col-sm-12">
                            <div className="bankCarousel">
                                <OwlCarousel className="owl-theme" {...features}>
                                    <div className="item slide1">
                                        <img src="/assets/FinoBank.jpeg" alt="" />
                                    </div>
                                    <div className="item slide2">
                                        <img src="/assets/bob.png" alt="" />
                                    </div>
                                    <div className="item slide3">
                                        <img src="/assets/AirtelBank.jpeg" alt="" />
                                    </div>
                                    <div className="item slide4">
                                        <img src="/assets/ICICIBank.png" alt="" />
                                    </div>
                                </OwlCarousel>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
