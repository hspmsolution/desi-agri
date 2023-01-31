import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div>
      <div id="header">
        <div className="logo">
          <a href="#">
            <img src="./images/NCDEX-logo.png" alt="" />
          </a>
        </div>
        <nav>
          <form className="search" action="search.php">
            <input className="q" placeholder="Search..." type="search" />
          </form>
          <ul>
            <li>
              <a href="" id="main-tag">
                Market Data
              </a>
            </li>
            <li>
              <a href="" id="main-tag">
                Options
              </a>
            </li>
            <li>
              <a href="" id="main-tag">
                Products
              </a>
            </li>
            <li>
              <a href="" id="main-tag">
                Membership
              </a>
            </li>
            <li>
              <a href="" id="main-tag">
                Clearing
              </a>
            </li>
            <li>
              <a href="" id="main-tag">
                Circulars
              </a>
            </li>
            <li>
              <a href="" id="main-tag">
                INVESTOR SERVICES
              </a>
              <ul className="mega-dropdown">
                <li className="row">
                  <ul className="mega-col">
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                  </ul>
                  <ul className="mega-col">
                    <li>
                      <a href="#">Help</a>
                    </li>
                    <li>
                      <a href="#">Pricing</a>
                    </li>
                    <li>
                      <a href="#">Team</a>
                    </li>
                    <li>
                      <a href="#">Services</a>
                    </li>
                  </ul>
                  <ul className="mega-col">
                    <li>
                      <a href="#">Coming Soon</a>
                    </li>
                    <li>
                      <a href="#">404 Error</a>
                    </li>
                    <li>
                      <a href="#">Search</a>
                    </li>
                    <li>
                      <a href="#">Author Page</a>
                    </li>
                  </ul>
                  <ul className="mega-col">
                    <li>
                      <a href="#">Full Width</a>
                    </li>
                    <li>
                      <a href="#">Right Column</a>
                    </li>
                    <li>
                      <a href="#">Left Column</a>
                    </li>
                    <li>
                      <a href="#">Maintenance</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="" id="main-tag">
                TECHNOLOGY
              </a>
              <ul>
                <li>
                  <a href="#">About Version</a>
                </li>
                <li>
                  <a href="#">About Version</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="" id="main-tag">
                Reserch
              </a>
              <ul>
                <li>
                  <a href="#">About Version</a>
                </li>
                <li>
                  <a href="#">About Version</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="" id="main-tag">
                FPO
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
