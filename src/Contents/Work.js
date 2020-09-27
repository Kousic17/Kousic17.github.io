import React, {Component} from 'react'
import Fade from 'react-reveal/Fade'

class Work extends Component {
    render() {
        return(
            <div className="exp">
                <Fade bottom>
                <h1 className="title">Work</h1>
                <h3>UX/UI designer</h3>
                <br />
                <br />
                <p className="comp">
                    <a href="https://fusionpractices.com" target="_blank" rel="noopener noreferrer">Fusion Practices Technologies Pvt.Ltd</a>
                    <span>•</span>
                    <em style={{fontStyle: "normal"}}>Sep 2018 - Apr 2019</em>
                </p>
                <p className="role"><span>•</span>Developed fully functional responsive prototypes based on business requirements using HTML5, CSS3, JavaScript.<br />
                    <span>•</span>Performed key role in the development process of UI portion.<br />
                    <span>•</span>Created a fully functional design using a popular design platform known as Marvel app.<br />
                    <span>•</span>Worked effectively with design teams to ensure software solutions to improve client experience.</p>    
                </Fade>
                <hr />  
            </div>
        )
    }
}

export default Work