import React from 'react'
import './Portfolyo.css'
import seedra from '../../Assets/Img/seedra.png'
import onflow from '../../Assets/Img/onflow.png'
import jager from '../../Assets/Img/jagerresto.png'
import uzmovie from '../../Assets/Img/uzmovie.png'
import koffe from '../../Assets/Img/koffe.png'
import kampaniyam from '../../Assets/Img/kompaniyam.png'
function Portfolyo() {
    return (
        <div>
            <section id='portfolyo' className='portfol'>
                <div className="container">
                    <h1 className='port__titles'>Portfolio</h1>
                    <p className='port__dess'>There are many variations of passages of Lorem Ipsum available,<br />
                        but the majority have suffered alteration.</p>
                        <div className="projects">
                            <div className='project__box1'>
                                <img src={seedra} alt="" />
                                <h1>SEEDRA</h1>
                                <p>Vivamus eleifend convallis ante, non pharetra libero <br /> molestie laoreet. Donec id imperdiet lacus.</p>
                                <ul>
                                    <li>
                                        <a href="https://react-seeds.vercel.app/">Case Study</a>
                                    </li>
                                </ul>
                            </div>
                            <div className='project__box1'>
                            <img src={onflow} alt="" />
                                <h1>Oneflow</h1>
                                <p>Vivamus eleifend convallis ante, non pharetra libero <br /> molestie laoreet. Donec id imperdiet lacus.</p>
                                <ul>
                                    <li>
                                        <a href="https://react-oneflow.vercel.app/">Case Study</a>
                                    </li>
                                </ul>

                            </div>
                            <div className='project__box1'>
                            <img src={jager} alt="" />
                                <h1>Jaegar Resto</h1>
                                <p>Vivamus eleifend convallis ante, non pharetra libero <br /> molestie laoreet. Donec id imperdiet lacus.</p>
                                <ul>
                                    <li>
                                        <a href="https://jaegar-resto-woad.vercel.app/">Case Study</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="projects2">
                        <div className='project__box1'>
                                <img src={uzmovie} alt="" />
                                <h1>Uzmovie</h1>
                                <p>Vivamus eleifend convallis ante, non pharetra libero <br /> molestie laoreet. Donec id imperdiet lacus.</p>
                                <ul>
                                    <li>
                                        <a href="https://uz-moviy-uz-m56y.vercel.app/">Case Study</a>
                                    </li>
                                </ul>
                            </div>
                            <div className='project__box1'>
                            <img src={koffe} alt="" />
                                <h1>Coffe</h1>
                                <p>Vivamus eleifend convallis ante, non pharetra libero <br /> molestie laoreet. Donec id imperdiet lacus.</p>
                                <ul>
                                    <li>
                                        <a href="https://make-cofe.vercel.app/">Case Study</a>
                                    </li>
                                </ul>

                            </div>
                            <div className='project__box1'>
                            <img src={kampaniyam} alt="" />
                                <h1>Kampaniyam</h1>
                                <p>Vivamus eleifend convallis ante, non pharetra libero <br /> molestie laoreet. Donec id imperdiet lacus.</p>
                                <ul>
                                    <li>
                                        <a href="https://mening-kompaniyam.vercel.app/">Case Study</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                </div>
            </section>
        </div>
    )
}

export default Portfolyo
