import './About.css';
import React from 'react'
import Headshot from '../../assets/janelleheadshot.jpg'

export default function About() {
    return (
        <div className="About">
            <div className="container">
                <div className="row">
                    <header> 
                        <h2>About Me</h2>
                        <hr/>
                    </header> 
                 </div>

                <div className="row">
                     <div className="col-md-12">
                        <div className="pull-left"><img src={Headshot} alt="Janelle Picture" className="about-pic" /></div>

                         <div className="pull-left">
                         My name is Janelle and am living in the Columbia Gorge! I am full Stack web developer with a proven history of improving revenue in the events industry. Skilled in client relationships, contract development, event management, fundraising, and marketing strategy.  Utilizes skills in React, JavaScript, CSS, HTML, Node.js, MySQL and much more from a certification from University of Washington to build dynamic and engaging website designs. 
                        Strong academic background with a double degree in a Bachelor of Science (BS) focused in Biology & Bachelor of Arts (BA) focused in ART (INTERD VISUAL ARTS) from University of Washington. This unique set of skills and experiences has positioned me to be a valuable addition to any team. 
                         <br/>
                         <br/>
                         My personal hobbies are being active outside, gardening and making art. In previous professions I have been a wedding planner, substitute teacher to a wilderness ranger in the Enchantments. This wide range of work has given me the skills to interact with a wide range people from different backgrounds and encouraged me to approach work tasks with creativity and persistence.
                        <br/>
                        <br/>
                        If you are interested in seeing more about my life and sharing yours, feel free to give me a follow on LinkedIn!
                        <br/>
                        <a href="https://www.linkedin.com/in/janelle-deane-3033b467/" className="fa fa-linkedin" aria-hidden="true" />
                        <br/> 
                        Be kind, genuine and don’t forget to laugh and play often!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
