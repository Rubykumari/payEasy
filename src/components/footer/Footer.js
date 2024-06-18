import './Footer.scss';
import 'boxicons';

export const Footer = () => {
    return (
        <>
            <footer className="footerArea pt-100">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-lg-3">
                            <div className="footer-item">
                                <div className="footer-logo">
                                    <a className="footer-inva" href="/">
                                        <img src="/assets/white-logo.png" alt="Logo" />
                                    </a>
                                    <p>We help retailers across the country drive more footfall, save time, get valuable business insights, &amp; grow profitability.</p>
                                    <ul className="icons">
                                        <li><box-icon type="logo" name="facebook" color="#fff"></box-icon></li>
                                        <li><box-icon type="logo" name="twitter" color="#fff"></box-icon></li>
                                        <li><box-icon type="logo" name="linkedin" color="#fff"></box-icon></li>
                                        <li><box-icon type="logo" name="youtube" color="#fff"></box-icon></li>
                                        <li><box-icon type="logo" name="instagram" color="#fff"></box-icon></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <div className="footerItem">
                                <div className="footerLink">
                                    <h3>Quick Links</h3>
                                    <ul>
                                        <li>
                                            <box-icon name='chevron-right' color="#fff"></box-icon>
                                            <a href="/">Home</a>
                                        </li>
                                        <li>
                                            <box-icon name='chevron-right' color="#fff" ></box-icon>
                                            <a href="/">About</a>
                                        </li>
                                        <li>
                                            <box-icon name='chevron-right' color="#fff"></box-icon>
                                            <a href="/">Services</a>
                                        </li>
                                        <li>
                                            <box-icon name='chevron-right' color="#fff"></box-icon>
                                            <a href="/">Contact</a>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <div className="footer-item">
                                <div className="footer-link">
                                    <h3>Important Links</h3>
                                    <ul>
                                        <li>
                                            <box-icon name='chevron-right' color="#fff"></box-icon>
                                            <a href="RefundCancellation.aspx">Refund &amp; Cancellation</a>
                                        </li>
                                        <li>
                                            <box-icon name='chevron-right' color="#fff"></box-icon>
                                            <a href="TermsConditions.aspx">Terms And Conditions</a>
                                        </li>
                                        <li>
                                            <box-icon name='chevron-right' color="#fff"></box-icon>
                                            <a href="PrivacyPolicy.aspx">Privacy Policy</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <div className="footer-item">
                                <div className="footerContact">
                                    <h3>Contact Info</h3>
                                    <ul>
                                        <li className='location'>
                                        <box-icon type='solid' name='location-plus' color="#fff"></box-icon>
                                            <span>Pay Eassy<br />
                                                3rd Floor, Nirmal Heights,,Nandi Stop,Ausa Road,, Latur - 413512, Latur, Maharashtra.</span>
                                        </li>
                                        <li>
                                        <box-icon type='solid' name='phone-call' color="#fff"></box-icon>
                                            <a href="tel:9172907290"> +91 9172907290</a>
                                        </li>
                                        <li>
                                        <box-icon type='solid' name='envelope' color="#fff"></box-icon>
                                            <a href='/'><span className="__cf_email__" data-cfemail="#" mailto="payeassy.api@gmail.com">payeassy.api@gmail.com</span></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyrightArea">
                    <div className="container">
                        <p>Copyright 2021</p>
                    </div>
                </div>
                <div className="footerShape">
                    <img src="/assets/footer-bg.png" alt="Footer" />
                </div>
            </footer>
        </>
    )
}
