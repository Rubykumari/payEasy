import './Header.scss';
import 'boxicons';
import { Link } from 'react-router-dom';

export const Header = () => {
    const handleClick = (event) => {
        event.preventDefault();
      };
    return (
        <>
            <div className="topHeader">
                <div className="contacts">
                    <div className="contact">
                        <box-icon name='mail-send' color="white"></box-icon>
                        <span>payeassy.api@gmail.com</span>
                    </div>
                    <div className="contact">
                        <box-icon name='phone-call' color="white"></box-icon>
                        <a href="tel:9172907290">9172907290</a>
                    </div>
                    <div className="contact">
                        <box-icon name='time' color="white"></box-icon>
                        <span>Mon - Sat: 8:00 AM - 7:00 PM</span>
                    </div>
                </div>
                <div className="icons">
                    <a href="https://www.facebook.com/">
                        <box-icon type='logo' name='facebook' color="#f31443"></box-icon>
                    </a>
                    <a href="https://x.com/i/flow/login">
                        <box-icon type='logo' name='twitter' color="#f31443"></box-icon>
                    </a>
                    <a href="https://www.youtube.com/">
                        <box-icon type='logo' name='youtube' color="#f31443"></box-icon>
                    </a>
                    <box-icon type='logo' name='instagram' color="#f31443"></box-icon>
                </div>
            </div>
            <div className="bottomHeader">
                <a href="/" onClick={handleClick}>
                    <img src="assets/logo.png" alt="" />
                </a>
                <ul className="right">
                    <li><Link to="/" className='defaultActive'>Home</Link></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#service">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </div>
        </>
    )
}
