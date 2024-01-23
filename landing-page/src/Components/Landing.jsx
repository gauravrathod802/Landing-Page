import React from 'react'
import './Landing.css';
const Landing = () => {
    return (
        <div class="container">
            <header>
                <h1>Product Landing Page</h1>
            </header>

            <section>
                <div class="product-image">
                    {/* <img src="product-image.jpg" alt="Product Image" style="width: 100%;" /> */}
                </div>

                <div class="product-details">
                    <h2>Product Name</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget neque elit.</p>

                    <div class="product-price">
                        $99.99
                    </div>

                    <a href="#" class="cta-button">Buy Now</a>
                </div>
            </section>
        </div>
    )
}

export default Landing;