import classes from "./Footer.module.css";

export default function Footer() {
  return (
    <>
      <div className={classes["sub-footer"]}>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h1 className="text-danger">Quick Links</h1>
              <li className="nav-item">
                <a href="" className="nav-link">
                  Customer Service
                </a>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link">
                  Customer Portal Logins
                </a>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link">
                  Digital Partners and Integrations
                </a>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link">
                  Developer Portal
                </a>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link">
                  Get a Quote
                </a>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link">
                  DHL for Business
                </a>
              </li>
            </div>
            <div className="col-md-4">
              <h1>Our Divisions</h1>
              <li className="nav-item">
                <a href="" className="nav-link">
                  DHL Express
                </a>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link">
                  DHL Global Forwarding
                </a>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link">
                  Other Global Divisions
                </a>
              </li>
            </div>
            <div className="col-md-4">
              <h1>Company Information</h1>
              <li className="nav-item">
                <a href="" className="nav-link">
                  About DHL
                </a>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link">
                  Delivered
                </a>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link">
                  Careers
                </a>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link">
                  Press Center
                </a>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link">
                  Investors
                </a>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link">
                  Sustainability
                </a>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link">
                  Brand Partnerships
                </a>
              </li>
            </div>
          </div>
        </div>
      </div>
      <footer className={classes.footer}>
        <div className="container">
          <div className="row px-3">
            <div className="col-md-9">
              <div>
                <img
                  src="https://www.dhl.com/content/dam/dhl/global/core/images/logos/glo-footer-logo.svg"
                  alt="dhl"
                />
              </div>

              <ul className="nav">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Fraud Awareness
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Legal Notice
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Terms of Use
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Privacy Notice
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Dispute Resolution
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Additional Information
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Consent Settings
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <h1>Follow Us</h1>
              <div className="d-flex flex-wrap gap-3">
                <a href="https://www.youtube.com/user/dhl" className="nav-link">
                  <i className="fa-brands fa-youtube"></i>
                </a>
                <a href="https://web.facebook.com/dhl" className="nav-link">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a
                  href="https://www.linkedin.com/company/dhl"
                  className="nav-link"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
                <a
                  href="https://www.instagram.com/dhl_global/"
                  className="nav-link"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>

          <div>
            <p>
              <span>{new Date().getFullYear()}</span>
              <span> &copy; - All right reserved</span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
