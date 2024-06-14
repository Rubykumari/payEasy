import './Header.scss';
import 'boxicons';

export const Header = () => {
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
                    <box-icon type='logo' name='facebook' color="#f31443"></box-icon>
                    <box-icon type='logo' name='twitter' color="#f31443"></box-icon>
                    <box-icon type='logo' name='youtube' color="#f31443"></box-icon>
                    <box-icon type='logo' name='instagram' color="#f31443"></box-icon>
                </div>
            </div>
            <div className="bottomHeader">
                <a href="/">
                    <img src="assets/logo.png" alt="" />
                </a>
                <ul className="right">
                    <li><a href="/" className='defaultActive'>Home</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Services</a></li>
                    <li><a href="/">Contact</a></li>
                    <li><a href="/">Login</a></li>
                </ul>
            </div>
        </>
    )
}
