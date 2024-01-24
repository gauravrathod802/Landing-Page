import React from 'react'
import './Landing.css';
import Apple from './../image/apple15pro.jpg';
import Nothing from './../image/nothingPhone2.jpg';
import Oppo from './../image/oppoA17.jpg';
import Realme from './../image/realmeGT2pro.jpg';
import Redmi from './../image/redmi13Pro.jpg';
import Samsung from './../image/s20ultra.jpg';
import Vivo from './../image/vivoT2Pro5g.jpg';
const Landing = () => {
    return (
        <div class="container">
            <header>
                <h1>Product Landing Page</h1>
            </header>

            <section>
                <div className="products">
                    <div class="product-image">
                        <img src={Apple} alt="img" style={{ width: "100%", height: "100%" }} />
                    </div>
                    <div class="product-details">
                        <h2>Apple 14 pro</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget neque elit.</p>

                        <div class="product-price">
                            $99.99
                        </div>

                        <a href="#123" class="cta-button">Buy Now</a>
                        <a href="#123" class="cta-button">Add to cart</a>
                    </div>
                </div>
                <div className="products">
                    <div class="product-image">
                        <img src={Nothing} alt="img" style={{ width: "100%", height: "100%" }} />
                    </div>

                    <div class="product-details">
                        <h2>Nothing Phone 2</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget neque elit.</p>

                        <div class="product-price">
                            $99.99
                        </div>

                        <a href="#123" class="cta-button">Buy Now</a>
                        <a href="#123" class="cta-button">Add to cart</a>
                    </div>
                </div>

                <div className="products">
                    <div class="product-image">
                        <img src={Realme} alt="img" style={{ width: "100%", height: "100%" }} />
                    </div>

                    <div class="product-details">
                        <h2>Realme GT 2</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget neque elit.</p>

                        <div class="product-price">
                            $99.99
                        </div>

                        <a href="#123" class="cta-button">Buy Now</a>
                        <a href="#123" class="cta-button">Add to cart</a>
                    </div>
                </div>

                <div className="products">
                    <div class="product-image">
                        <img src={Oppo} alt="img" style={{ width: "100%", height: "100%" }} />
                    </div>

                    <div class="product-details">
                        <h2>Oppo A17</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget neque elit.</p>

                        <div class="product-price">
                            $99.99
                        </div>

                        <a href="#123" class="cta-button">Buy Now</a>
                        <a href="#123" class="cta-button">Add to cart</a>
                    </div>
                </div>

                <div className="products">
                    <div class="product-image">
                        <img src={Samsung} alt="img" style={{ width: "100%", height: "100%" }} />
                    </div>

                    <div class="product-details">
                        <h2>Samsung 20 Ultra</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget neque elit.</p>

                        <div class="product-price">
                            $99.99
                        </div>

                        <a href="#123" class="cta-button">Buy Now</a>
                        <a href="#123" class="cta-button">Add to cart</a>
                    </div>
                </div>

                <div className="products">
                    <div class="product-image">
                        <img src={Redmi} alt="img" style={{ width: "100%", height: "100%" }} />
                    </div>

                    <div class="product-details">
                        <h2>Redmi 13 Pro</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget neque elit.</p>

                        <div class="product-price">
                            $99.99
                        </div>

                        <a href="#123" class="cta-button">Buy Now</a>
                        <a href="#123" class="cta-button">Add to cart</a>
                    </div>
                </div>

                <div className="products">
                    <div class="product-image">
                        <img src={Vivo} alt="img" style={{ width: "100%", height: "100%" }} />
                    </div>

                    <div class="product-details">
                        <h2>Vivo T2 Pro 5G</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget neque elit.</p>

                        <div class="product-price">
                            $99.99
                        </div>

                        <a href="#123" class="cta-button">Buy Now</a>
                        <a href="#123" class="cta-button">Add to cart</a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Landing;