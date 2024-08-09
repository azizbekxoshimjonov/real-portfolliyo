import React, { useState, useEffect } from 'react';
import './Work.css';
import frame from '../../Assets/Img/Frame 44.png';
import frame44 from '../../Assets/Img/Frame 44 (2).png';
import frame45 from '../../Assets/Img/Frame 44 (1).png';
import frame46 from '../../Assets/Img/Frame 44 (3).png';

function Work() {
    const [activeDiv, setActiveDiv] = useState(1);

    const handleDivClick = (divNumber) => {
        setActiveDiv(divNumber);
    };

    useEffect(() => {
        setActiveDiv(1); 
    }, []);

    return (
        <div>
            <section id='work' className='work'>
                <div className="container">
                    <div className="procces">
                        <div>
                            <h1 className='work__titlep'>Work Process</h1>
                            <p className='work__desp'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> 
                                Nulla purus arcu, varius eget velit non, laoreet imperdiet <br /> 
                                orci. Mauris ultrices eget lorem ac vestibulum. Suspendis <br /> 
                                imperdiet, <br /><br />
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> 
                                Nulla purus arcu, varius eget velit non.
                            </p>
                        </div>
                        <div>
                            <div 
                                onClick={() => handleDivClick(1)} 
                                className={`research ${activeDiv === 1 ? 'active' : ''}`}
                            >
                                <img src={frame} alt="Research" />
                                <h2>1. Research</h2>
                                <p>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. <br /> Nulla purus arcu.</p>
                            </div>
                            <div 
                                onClick={() => handleDivClick(2)} 
                                className={`design ${activeDiv === 2 ? 'active' : ''}`}
                            >
                                <img src={frame44} alt="Design" />
                                <h2>2. Design</h2>
                                <p>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. <br /> Nulla purus arcu.</p>
                            </div>
                        </div>
                        <div>
                            <div 
                                onClick={() => handleDivClick(3)} 
                                className={`analize ${activeDiv === 3 ? 'active' : ''}`}
                            >
                                <img src={frame45} alt="Analyze" />
                                <h2>3. Analyze</h2>
                                <p>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. <br /> Nulla purus arcu.</p>
                            </div>
                            <div 
                                onClick={() => handleDivClick(4)} 
                                className={`launch ${activeDiv === 4 ? 'active' : ''}`}
                            >
                                <img src={frame46} alt="Launch" />
                                <h2>4. Launch</h2>
                                <p>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. <br /> Nulla purus arcu.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Work;
