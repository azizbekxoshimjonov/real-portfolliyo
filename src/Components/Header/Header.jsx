import React, { useEffect, useState } from 'react'
import { Link, animateScroll as scroll } from 'react-scroll';
import './Header.css'
function Header() {
    const [headerStyle, setHeaderStyle] = useState({
        position: 'static',
        backgroundColor: 'transparent',
      });
    
      const handleScroll = () => {
        const newStyle = window.scrollY > 0
          ? { position: 'fixed', top: '0', backgroundColor: 'white', zIndex: 1000, width: '100%' }
          : { position: 'static', backgroundColor: 'transparent' };
    
        setHeaderStyle(newStyle);
      };
    
      useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    return (
        <div>
            <section  style={headerStyle} className='header'>
                <div className="container">
                    <nav className='nav__item'>
                        <ul className='nav__left'>
                            <li className='nav__list1'>
                                <h2>A</h2>
                                <h1>Azizbek</h1>
                            </li>
                        </ul>
                        <ul className='nav__list'>
                            <li >
                            <Link to="About" smooth={true} duration={1000}>Home</Link>
                            </li>
                            <li >
                            <Link to="About" smooth={true} duration={1000}> About</Link>     
                            </li>
                            <li >
                            <Link to="work" smooth={true} duration={1000}> Process</Link>     
                            </li>
                            <li >
                            <Link to="portfolyo" smooth={true} duration={1000}> Portfolio</Link>
                            </li>
                            <li >
                            <Link to="Home" smooth={true} duration={1000}> Blog</Link>     
                            </li>
                            <li >
                            <Link to="Home" smooth={true} duration={1000}> Services</Link>   
                            </li>
                            
                        </ul>
                        <button className='nav__btn'>Contact</button>
                    </nav>
                  
                </div>


            </section>

        </div>
    )
}

export default Header
