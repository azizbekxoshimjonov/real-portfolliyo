import React from 'react'
import './Footer.css'
function Footer() {
    return (
        <div>
            <section className='footer'>
                <div className="container">
                    <nav className='nav__footer'>
                        <ul className='footer__left'>
                            <li className='footer__list'>
                                <h2>A</h2>
                                <h1>Azizbek</h1>
                            </li>
                        </ul>
                        <ul className='footer__item'>
                            <li>Home</li>
                            <li>About</li>
                            <li>Services</li>
                            <li>Process</li>
                            <li>Portfolio</li>
                            <li>Blog</li>
                            <li>Contact</li>
                        </ul>
                        <p className='footer__picto'>Copyright © 2022 Picto.</p>

                    </nav>


                </div>

            </section>
        </div>
    )
}

export default Footer
