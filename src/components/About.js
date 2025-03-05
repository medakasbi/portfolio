import React from 'react';



function About()
{
    const skills=['Python', 'Java',  'React', 'JavaScript'];
    const interests=['Blockchain', 'Web Development', 'Mobile Development', 'Machine Learning', 'Artificial Intelligence', 'Data'];
    return(
        <section id="about" className="py-5">
            <div className="container">
                <div className="row">
                    <div className= "col-md-4">
                        <img src="./public/assets/iaBird.jpg" alt="Professional Photo" className="img-fluid rounded-circle"/>
                    </div>
                    <div className='col-md-8'>
                        <h2>About Me</h2>
                        <p>
                            I am a Full Stack Developer with a background in Marketing. I have a passion for 
                            creating and designing applications that are both functional and visually appealing.
                        </p>
                        <p>
                            I am always eager to learn and explore new technologies. My goal is 
                            to create impactful and user-friendly applications. 
                        </p>
                        <div>
                            <h3>Skills & Expertise</h3>
                            <ul>
                                {renderList(skills)}   
                            </ul>
                        </div>
                        <div>
                            <h3>Areas of interest</h3>
                            <ul>
                                {renderList(interests)};
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

}

export  default  About;