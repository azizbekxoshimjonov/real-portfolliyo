import React from 'react'
import './About.css'
import hero from '../../Assets/Img/ozim2.png'
import userimage from '../../Assets/Img/userimage.png'
import pasga from '../../Assets/Img/pasga strelka.png'
function About() {
    return (
        <div>
            <section id='About' className='about'>
                <div className="container">
                    <div className='box1'>
                        <div>
                            <h1 className='name__title'>Hello, I’m <br />
                                Azizbek</h1>
                            <p className='name__des'>Welcome to my personal portfolio website,you can see my goal , my <br /> skills, and works in there.I have been learning social media for 1 <br /> years. And now I am frontend-developer <br /> and student . <br /><br /><br />

                                So, My name is Azizbek. I'm 20 years old . I was born in Uzbekistan. <br /> I have learned many skills , HTML ,CSS ,JAVASCRIPT ,REACT,<br /> BOOTSTRAP ,GIT-HUB. AND MORE I can work with <br /> vercel.com , netlify.com ,  and and the most popular libraries <br /> material-ui.com and  and other. <br /><br />

                                I hope you like my work and results. You can learn about me through <br /> this website.</p>
                                
                                <button className='hello__btn'>Say Hello!</button>
                                <div className='careriya__box'>
                                    <div className='boxs'>
                                        <h2>start</h2>
                                        <p>Experience</p>
                                    </div>
                                    <div className='boxs'>
                                        <h2>20+</h2>
                                        <p>Project Completed</p>
                                    </div>
                                    <div className='boxs'>
                                        <h2>2</h2>
                                        <p>Happy Client</p>
                                    </div>
                                </div>
                        </div>
                        <div className='hero__box'>
                            <img className='hero__img' src={hero} alt="" />
                        </div>
                    </div>
                    <div className='user__box12'>
                        <div className="ichki__userbox">
                            <div className='hero__box2'>
                                <img src={hero} alt="" />
                            </div>
                            <div>
                                <h1 className='user__title'>I am Professional Experience <br /> Frontend Developer</h1>
                                <p className='user__des'>I can create modern, modern websites, <br /> web services and online stores. <br /> My passion is designing digital user experiences.</p>
                                <div className='buttons'>
                                <button className='user__btn1'>My Project</button>
                                <div className='user__btn2'>
                                    <img src={pasga} alt="" />

                                    Download CV
                                    </div>

                                </div>
                             
                            </div>
                        </div>

                    </div>
                </div>

            </section>
        </div>
    )
}

export default About
