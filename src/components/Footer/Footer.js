import React from 'react';
import './Footer.css';

function Footer() {
	return (
		<>
			<footer className="footer">
				<div className="container">
					<div className="row">
						<div className="footer-col">
							<h4>Quick Link</h4>
							<ul>
								<li><a href="#">Policies</a></li>
								<li><a href="#">Disclaimers</a></li>
								<li><a href="#">Regd. Trademarks</a></li>
								<li><a href="#">Careers</a></li>
								<li><a href="#">Contact Us</a></li>
								<li><a href="#">Downloads</a></li>
								<li><a href="#">Extranet Common files</a></li>
								<li><a href="#">Sitemap</a></li>
								<li><a href="#">Web Information Manager</a></li>

							</ul>
						</div>
						<div className="footer-col">
							<h4>Important Links</h4>
							<ul>
								<li><a href="#">NABARD</a></li>
								<li><a href="#">WDRA</a></li>
								<li><a href="#">Ministry of Agriculture</a></li>
								<li><a href="#">Ministry of Consumer Affairs</a></li>
								<li><a href="#">Food Corporation of India</a></li>
								<li><a href="#">NAFED</a></li>
								<li><a href="#">AGMARKNET </a></li>
								<li><a href="#">IMD</a></li>
								<li><a href="#">eNAM</a></li>
								<li><a href="#">Rems</a></li>
							</ul>
						</div>
						<div className="footer-col">
							<h4>online shop</h4>
							<ul>
								<li><a href="#">NICR</a></li>
								<li><a href="#">NeML</a></li>
								<li><a href="#">NCCL</a></li>
								<li><a href="#">NERL</a></li>
							</ul>
						</div>
						<div className="footer-col">
							<ul>
								<li><a href="#"><h4>Download Mandi.com App</h4></a></li>
								<li><a href="#"><h4>Connect with SEBI</h4></a></li>
								<li><a href="#">
									<h4>Connect with NCDEX</h4>
									<div className="social-links">
										<a href="#"><i className="fab fa-facebook-f"> </i></a>
										<a href="#"><i className="fab fa-twitter"> </i></a>
										<a href="#"><i className="fab fa-instagram"> </i></a>
										<a href="#"><i className="fab fa-linkedin-in"> </i></a>
									</div>
								</a></li>
							</ul>
						</div>
					</div>
				</div>
			</footer>
		</>
	)
}

export default Footer