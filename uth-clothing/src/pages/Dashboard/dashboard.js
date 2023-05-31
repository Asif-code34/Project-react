import React from 'react';
import "./dashboard.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faRotateLeft, faStar, faThumbsUp, faTruck ,} from '@fortawesome/free-solid-svg-icons';
import img1 from './images/background.png';
import img2 from './images/p6.png';
import img3 from './images/a1.png';
import img4 from './images/laptop2.png';
import img5 from './images/t1.png';
import img6 from './images/c1.png';
import img7 from './images/c2.png';
import{faFacebook, faInstagram, faLinkedin, faSkype, faTwitter} from '@fortawesome/free-brands-svg-icons'




const dashboard = () => {

  return (
    <div className='container-fluid'>
      <div className='home'>
        <div className='content'>
          <h1>
            <span>Electronics Product</span>
            <br />
            Upto
            <span id='span2'>50%</span>
            off
          </h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta, saepe.
            <br />Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
        <div className="img">
          <img src={img1} alt='' />
        </div>

      </div>
      <div className='container' id='product-cards'>
        <h1 className='text-center'>Our Products</h1>
        <div className="row" style={{ "margin-top": "30px" }}>
          <div className="col-md-3 py-3 py-md-0">
            <div className="card">
              <img src={img2} alt="" />
              <div class="card-body">
                <h3 className="text-center">Iphone 13 pro</h3>
                <p className="text-center">Lorem ipsum dolor sit amet.</p>
                <div className="star text-center">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </div>
                <h2 className='text-center'>$1000 <span><li> <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon></li></span></h2>
              </div>
            </div>
          </div>

          <div className="col-md-3 py-3 py-md-0">
            <div className="card">
              <img src={img3} alt="" />
              <div class="card-body">
                <h3 className="text-center">Airpods</h3>
                <p className="text-center">Lorem ipsum dolor sit amet.</p>
                <div className="star text-center">
                 <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />

                </div>
                <h2 className='text-center'>$100 <span><li> <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon></li></span></h2>
              </div>
            </div>
          </div>

          <div className="col-md-3 py-3 py-md-0">
            <div className="card">
              <img src={img4} alt="" />
              <div className="card-body">
                <h3 className="text-center">Laptop</h3>
                <p className="text-center">Lorem ipsum dolor sit amet.</p>
                <div className="star text-center">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </div>
                <h2 className='text-center'>$200 <span><li><FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon></li></span></h2>
              </div>
            </div>
          </div>
          <div className="col-md-3 py-3 py-md-0">
            <div className="card">
              <img src={img5} alt="" />
              <div className="card-body">
                <h3 className="text-center">Ipad</h3>
                <p className="text-center">Lorem ipsum dolor sit amet.</p>
                <div className="star text-center">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </div>
                <h2 className='text-center'>$300 <span><li> <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon></li></span></h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container" id="other-cards">
        <div className="row" style={{ display: "flex" }}>
          <div clasName="col-md-6 py-3 py-md-0">
            <div className="card">
              <img src={img6} alt="" />
              <div class="card-img-overlay">
                <h3>Best Laptop</h3>
                <h5>Latest Collection</h5>
                <p>Up To 50% Off</p>
                <button id="shopnow">Shop Now</button>
              </div>
            </div>
          </div>
          <div className="col-md-6 py-3 py-md-0">
            <div className="card">
              <img src={img7} alt="" />
              <div className="card-img-overlay">
                <h3>Best Headphone</h3>
                <h5>Latest Collection</h5>
                <p>Up To 50% Off</p>
                <button id="shopnow">Shop Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container" id="offer">
        <div className="row">
          <div className="col-md-3 py-3 py-md-0">
            <i className="fa-solid"><FontAwesomeIcon icon={faTruck} /></i>
            <h3>Free Shipping</h3>
            <p>On order over $1000</p>
          </div>
          <div className="col-md-3 py-3 py-md-0">
            <i className="fa-solid"><FontAwesomeIcon icon={faRotateLeft} /></i>
            <h3>Free Returns</h3>
            <p>Within 30 days</p>
          </div>
          <div className="col-md-3 py-3 py-md-0">
            <i className="fa-solid"><FontAwesomeIcon icon={faTruck} /></i>
            <h3>Fast Delivery</h3>
            <p>World Wide</p>
          </div>
          <div className="col-md-3 py-3 py-md-0">
            <i className="fa-solid"><FontAwesomeIcon icon={faThumbsUp} /></i>
            <h3>Big choice</h3>
            <p>Of products</p>
          </div>
        </div>
      </div>
      <div className="container" id="newslater">
        <h3 className="text-center">Subscribe To The Electronic Shop For Latest upload.</h3>
        <div className="input text-center">
          <input type="text" placeholder="Enter Your Email.." />
          <button id="subscribe">SUBSCRIBE</button>
        </div>
      </div>

      <div id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">

              <div className="col-lg-3 col-md-6 footer-contact">
                <h3>Electronic Shop</h3>
                <p>
                  Mumbai <br></br>
                  Pune<br></br>
                  Ahemdabad <br></br>
                </p>
                <strong>Phone:</strong> +000000000000000 <br></br>
                <strong>Email:</strong> electronicshop@.com <br></br>
              </div>

              <div class="col-lg-3 col-md-6 footer-links">
                <h4>Usefull Links</h4>
                <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="/aboutus">About Us</a></li>
                  <li><a href="#">Services</a></li>
                  <li><a href="#">Terms of service</a></li>
                  <li><a href="#">Privacy policey</a></li>
                </ul>
              </div>





              <div class="col-lg-3 col-md-6 footer-links">
                <h4>Our Services</h4>

                <ul>
                  <li><a href="#">PS 5</a></li>
                  <li><a href="#">Computer</a></li>
                  <li><a href="#">Gaming Laptop</a></li>
                  <li><a href="#">Mobile Phone</a></li>
                  <li><a href="#">Gaming Gadget</a></li>
                </ul>
              </div>

              <div class="col-lg-3 col-md-6 footer-links">
                <h4>Our Social Networks</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, quibusdam.</p>

                <div class="socail-links mt-3">
                <a href="#"><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a>
                  <a href="#"><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></a>
                  <a href="#"><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a>
                  <a href="#"><FontAwesomeIcon icon={faSkype}></FontAwesomeIcon></a>
                  <a href="#"><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></a>
                </div>

              </div>

            </div>
          </div>
        </div>


      </div>

    </div>


  );
};

export default dashboard;