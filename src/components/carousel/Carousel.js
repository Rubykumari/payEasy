import './Carousel.scss';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';



export const Carousel = () => {
    const options = {
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 5000,
        responsive: {
            400: {
                items: 1
            }
        }
    };
    return (
        <div className="bannerSlider">
            <OwlCarousel className="owl-theme" {...options}>
                <div className="item slide1">
                    <div className="caption">
                        <h1>Make your Online Payment <br />Safer &amp; Comfortable</h1>
                        <p>Offer payment methods flexibility. Customers prefer a variety of payment options at the checkout.</p>
                        <a className="common-btn" href="/">Let's Start Now</a>
                    </div>
                </div>
                <div className="item slide2">
                    <div className="caption">
                        <h1>Your Success Is Our Ultimate Duty</h1>
                        <p>Is to firmly decide that you are with the company, industry and business that you want to be with.</p>
                        <a className="common-btn" href="/">Let's Start Now</a>
                    </div>
                </div>
                <div className="item slide3">
                    <div className="caption">
                        <h1>Investment Company With Experience</h1>
                        <p>An investment company is a trust or entity that collects capital from various investors and invests the pooled money in a range of financial securities.</p>
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
                    <h3>Banks Who Trust Us</h3>
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
        </>
    )
}
