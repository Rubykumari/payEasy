import './Login.scss';
import { Link } from 'react-router-dom';

export const Login = () => {
  const handleClick = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <div className="loginBg">
        <div className="login">
          <div className="loginConnect">
            <h1>Our Services</h1>
            <a href="/" className="btn btn-social btn-recharge" onClick={handleClick}><box-icon name='mobile' color='#fff'></box-icon>Mobile Recharge</a>
            <a href="/" className="btn btn-social btn-post" onClick={handleClick}><box-icon name='note' color='#fff'></box-icon>Post Paid</a>
            <a href="/" className="btn btn-social btn-dth" onClick={handleClick}><box-icon name='broadcast' color='#fff'></box-icon>DTH</a>
            <a href="/" className="btn btn-social btn-utility" onClick={handleClick}><box-icon type='solid' name='dice-1' color='#fff'></box-icon>Utility Payment</a>
            <a href="/" className="btn btn-social btn-card" onClick={handleClick}><box-icon type='solid' name='file-archive' color='#fff'></box-icon>Money Transfer</a>
            <a href="/" className="btn btn-social btn-aeps"onClick={handleClick} ><box-icon name='qr' color='#fff'></box-icon>QR / UPI</a>
            <a href="/" className="btn btn-social btn-aeps"onClick={handleClick} ><box-icon name='calculator' color='#fff'></box-icon>Payout</a>
          </div>
          <div id="divLogin" className="loginRight" style={{ marginBottom: '30px', display: 'block' }}>
            <a className="" href="/">
              <img className="center" src="/assets/logo.png" alt='Logo' />
            </a>
            <h2>Use the classical way</h2>
            <div className="col-lg-12">
              <div className="form-group">
                <label className="newlabel">Mobile Number</label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">
                    <box-icon name='user'></box-icon>
                    </span>
                  </div>
                  <input name="txtLoginID" type="text" maxLength="15" id="txtLoginID" className="form-control" placeholder="Enter Login ID" />
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="form-group">
                <label className="newlabel">Password</label>
                <div className="input-group mb-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">
                    <box-icon name='lock-alt'></box-icon>
                    </span>
                  </div>
                  <input name="txtPassword" type="password" maxLength="15" id="txtPassword" className="form-control" placeholder="Enter Password" />
                </div>
              </div>
            </div>
            <div id="divOTP" className="col-lg-12" style={{ display: 'none' }}>
              <div className="form-group">
                <label className="newlabel">Password</label>
                <div className="input-group mb-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">
                      <i className="las la-lock loginicon"></i>
                    </span>
                  </div>
                  <span id="lblOTPMsg" className="label label-danger" style={{ fontSize: '10px' }}></span>
                  <input name="txtOTP" type="text" maxLength="10" id="txtOTP" className="form-control" placeholder="Enter OTP" />
                </div>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="form-group">
                <div className="input-group mb-6 text-left">
                  <div className="input-group-prepend">
                  <li><Link to="/" className='defaultActive'>Home</Link></li>
                    {/* <a href="/" id="divGotoHome" className="m-link">Home</a> */}
                  </div>
                </div>
                <div className="input-group mb-6 text-right">
                  <div className="input-group-prepend">
                    <a href="/" id="divForgotPwd" className="m-link" onClick={handleClick}>Forgot Password?</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <input type="submit" name="cmdLogin" value="Sign-In" id="cmdLogin" className="btn btn-primary btn-block loginbtn1" disabled="disabled" />
            </div>
            <div className="col-lg-12">
              <label style={{ color: 'red' }}>
                <span id="lblIPInfo"></span>
                <span id="lblLocation"></span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
