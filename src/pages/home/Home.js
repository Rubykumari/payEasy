import { Carousel, BankCarousel } from '../../components/carousel/Carousel';
import { Footer } from '../../components/footer/Footer';
import { Header } from '../../components/header/Header';
import './Home.scss';
import 'boxicons';

export const Home = () => {
  return (
    <>
      <Header />
      <Carousel />
      <BankCarousel />
      <section className="about-area sectionOverlay" id="about">
        <div className="container-fluid aboutSection">
          <div className="row features">
            <div className="col-lg-7">
              <div className="about-content">
                <div className="sectionTitle">
                  <h2>About us</h2>
                  <p>
                    We Are A Trusted Company With Years Of Experience
                    We help retailers across the country drive more footfall, save time, get valuable business insights, &amp; grow profitability.
                  </p>
                </div>
                <p className="about-p">From Domestic Money Transfer to Bill Payments, Prepaid Mobile &amp; DTH Recharge to Post Paid Mobile Payments, Aadhaar Enabled Payment Services to Micro ATMs, Flight &amp; Holidays to Bus Bookings, POS to Prepaid Cards, we provide everything a modern convenience store needs with full support &amp; services, &amp; a freephone contact center open 365 days a year.</p>
                <div className="row left">
                  <div className="col-sm-6 col-lg-6">
                    <ul>
                      <li>
                        <box-icon type='solid' name='award' color="#f31443" style={{ width: '45px', height: '45px' }}></box-icon>
                      </li>
                      <li>
                        <h3>Years Experience</h3>
                        <p>If you have the experience of ten years in an industry, no apostrophe is needed.</p>
                      </li>
                    </ul>
                  </div>
                  <div className="col-sm-6 col-lg-6">
                    <ul>
                      <li>
                      <box-icon name='star' type='solid' color="#f31443" style={{ width: '40px', height: '40px' }}></box-icon>
                        <i className="flaticon-star"></i>
                      </li>
                      <li>
                        <h3>Secured Transactions</h3>
                        <p>Transactions Processed are fully secured with OTP Validations .</p>
                      </li>
                    </ul>
                  </div>
                  <div className="col-sm-6 col-lg-6">
                    <ul>
                      <li>
                      <box-icon name='shield-quarter' color="#f31443" style={{ width: '40px', height: '40px' }}></box-icon>
                      </li>
                      <li>
                        <h3>24/7 Service</h3>
                        <p>Our knowledgeable team is always here to assist you 24/7/365 .</p>
                      </li>
                    </ul>
                  </div>
                  <div className="col-sm-6 col-lg-6">
                    <ul>
                      <li>
                      <box-icon type='solid' name='badge-dollar' color="#f31443" style={{ width: '40px', height: '40px' }}></box-icon>
                      </li>
                      <li>
                        <h3>Instant Payment</h3>
                        <p>Instantaneous payments guaranteed directly to the recipients account.</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <a className="common-btn" href="/">Explore About Us
                </a>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="aboutImg">
                <div className="row align-items-end">
                  <div className="col-sm-6 col-lg-6">
                    <img src="/assets/about1.jpeg" alt="About" />
                  </div>
                  <div className="col-sm-6 col-lg-6">
                    <img src="/assets/about2.jpeg" alt="About" />
                  </div>
                  <div className="col-lg-12">
                    <img src="/assets/about3.jpeg" alt="About" />
                  </div>
                </div>
                <div className="years">
                  <h3>
                    <img className="aboutLogo" src="/assets/logo.png" alt="Logo" />
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="services" id="service">
        <div className="container">
            <div className="sectionTitle">
                <div className="row">
                    <div className="col-lg-6">
                        <span className="subTitle">Our Services</span>
                        <h2>The <span>Services</span> That We Provide For Our Ultimate Clients</h2>
                    </div>

                </div>
            </div>
            <div className="row">
                <div className="col-sm-6 col-lg-4">
                    <div className="services-item card-overlay blueCard">
                        <i className="icon-img">
                            <img src="assets/api.png" alt='Dashboard'/>
                        </i>
                        <h3>
                            <a href="/">Open API Platform</a>
                        </h3>
                        <p>
                            A unified open API platform that brings all the solution seamlessly together for all your neo banking solution.

                        </p>
                        <a className="services-btn" href="/">Read More</a>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                    <div className="services-item card-overlay">
                        <i className="icon-img">
                            <img src="/assets/process.png" alt='Dashboard'/>
                        </i>
                        <h3>
                            <a href="/">Faster and Wholesome Integration</a>
                        </h3>
                        <p>Integrate and go live with our easy APIs to maximize your profitability and get the most out of it.</p>
                        <a className="services-btn" href="/">Read More</a>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                    <div className="services-item card-overlay blueCard">
                        <i className="icon-img">
                            <img src="/assets/smartphone.png" alt='Dashboard'/>
                        </i>
                        <h3>
                            <a href="/">Paperless Onboarding</a>
                        </h3>
                        <p>We believe in zero manual intervention, complete the online onboarding with minimum documentation, and get started.</p>
                        <a className="services-btn" href="/">Read More</a>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                    <div className="services-item card-overlay">
                        <i className="icon-img">
                            <img src="/assets/bank.png" alt='Dashboard'/>
                        </i>
                        <h3>
                            <a href="/">Choose Your Bank</a>
                        </h3>
                        <p>Create a primary and back-up bank as a pipe and get the transaction flow basis your preference.</p>
                        <a className="services-btn" href="/">Read More</a>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                    <div className="services-item card-overlay blueCard ">
                        <i className="icon-img">
                            <img src="/assets/customer-service.png" alt='Dashboard'/>
                        </i>
                        <h3>
                            <a href="/">Dedicated Customer Support</a>
                        </h3>
                        <p>Always available email, phone and chat based support to help you in your every step.</p>
                        <a className="services-btn" href="/">Read More</a>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                    <div className="services-item card-overlay">

                        <i className="icon-img">
                            <img src="/assets/dashboard.png" alt='Dashboard'/>
                        </i>
                        <h3>
                            <a href="/">Wide-Ranging Features on a Single Dashboard</a>
                        </h3>
                        <p>Get wide range of value added services on a single dashboard with better success rates.</p>
                        <a className="services-btn" href="/">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="workArea ptb-100">
        <div className="container">
            <div className="section-title">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <span className="subTitle">How We Work</span>
                        <h2>See How We Manage A Wide Range Of Work</h2>
                    </div>
                    <div className="col-lg-6">
                        <p>A payment gateway allows merchants to securely pass credit card information between the customer and the merchant and also between merchant and the payment processor. The payment gateway is the middleman between the merchant and their sponsoring bank.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-7">
                    <div className="work-video">
                        <img src="/assets/work1.jpeg" alt="Work"/>
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className="workItem">
                        <ul className="align-items-center">
                            <li>
                                <i className="">
                                    <img src="/assets/time.png" alt='Time'/>
                                </i>
                            </li>
                            <li>
                                <h3>Reduces Time to Market</h3>
                            </li>
                        </ul>
                    </div>
                    <div className="workItem">
                        <ul className="align-items-center">
                            <li>
                                <i className="">
                                    <img src="/assets/trust%20(1).png" alt='Time'/>
                                </i>
                            </li>
                            <li>
                                <h3>Ensures Uniformity </h3>
                            </li>
                        </ul>
                    </div>
                    <div className="workItem">
                        <ul className="align-items-center">
                            <li>
                                <i className="">
                                    <img src="/assets/analytics.png" alt='Time'/>
                                </i>
                            </li>
                            <li>
                                <h3>Improves Data Analytics</h3>

                            </li>
                        </ul>
                    </div>
                    <div className="workItem">
                        <ul className="align-items-center">
                            <li>
                                <i className="">
                                    <img src="/assets/planning.png" alt='Time'/>
                                </i>
                            </li>
                            <li>
                                <h3>High Scalability</h3>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="contact">
        <div className="counter-area sectionOverlay">
            <div className="container">
                <div className="subTitle">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <span className="sub-title">Get In Touch</span>
                            <h2>We're happy to answer any questions you may have
                            </h2>
                        </div>

                    </div>
                </div>
                <div className="row">

                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-lg-12">
                                <span id="cphMain_lblMsg" style={{color: 'red'}}></span>
                            </div>

                            <div className="col-lg-6">
                                <div className="form-group">
                                    <input name="ctl00$cphMain$txtFullName" type="text" maxLength="50" id="cphMain_txtFullName" className="form-control" placeholder="Full Name" />
                                    <div className="help-block with-errors"></div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <input name="ctl00$cphMain$txtMobileNo" type="text" maxLength="10" id="cphMain_txtMobileNo" className="form-control" placeholder="Mobile No" />
                                    <div className="help-block with-errors"></div>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="form-group">
                                    <input name="ctl00$cphMain$txtEmail" type="text" maxLength="50" id="cphMain_txtEmail" className="form-control" placeholder="Email" />
                                    <div className="help-block with-errors"></div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <textarea name="ctl00$cphMain$txtMessage" rows="10" cols="100" id="cphMain_txtMessage" className="form-control" placeholder="Message"></textarea>
                                    <div className="help-block with-errors"></div>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <input type="submit" name="ctl00$cphMain$cmdSend" value="Send Message" id="cphMain_cmdSend" className="btn common-btn" />
                                <div id="msgSubmit" className="h3 text-center hidden"></div>
                                <div className="clearfix"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <img src="/assets/contact.png" alt="About" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Footer/>
    </>
  )
}
