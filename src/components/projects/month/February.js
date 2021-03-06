import React from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import 'react-materialize'
import '../../../style.css'
import Puissance4 from '../../../assets/projects/puissance4.png'
import HTML5 from '../../../assets/language-icon/html5.png'
import CSS3 from '../../../assets/language-icon/css3.png'
import JS from '../../../assets/language-icon/js2.png'
import JQuery from '../../../assets/language-icon/jquery.png'

function February() {
    return (
        <div>
            <div className="row white-font">
                <div className="col s12">
                    <div className="card overflow-hidden">
                        <div className="card-content center-when-small">
                            <h3 className='project-title'>Connect 4 <br /><small>(1 week)</small></h3>
                            <div className='row'>
                                <div className='col l4 s12'>
                                    <a onClick={() => window.open("https://puissance4-jquery.herokuapp.com/", "_blank")}>
                                        <img alt='Screenshot of Connect 4' className="responsive-img project-image z-depth-4" src={Puissance4}></img>
                                    </a>
                                </div>
                                <div className='col l8 m12 s12'>
                                    <div className='row'>
                                        <div className='col l6 s12'>
                                            <h5>Objective of project</h5>
                                            <p>
                                                For this project, we had to create a JQuery plugin that took different parameters like number of rows and/or columns and make a dynamic connect 4 game.
                                                It was a good way to learn both how JQuery works and to create algorithms.
                                            </p>
                                        </div>
                                        <div className='col l6 s12'>
                                            <h5>Technologies used</h5>
                                            <ul>
                                                <li className='language'><img alt='' className='language-icon' src={HTML5} />HTML5</li>
                                                <li className='language'><img alt='' className='language-icon' src={CSS3} />CSS3</li>
                                                <li className='language'><img alt='' className='language-icon' src={JS} />Javascript</li>
                                                <li className='language'><img alt='' className='language-icon' src={JQuery} />JQuery</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className='row project-buttons'>
                                        <a className="col s5 m5 l5 waves-effect waves-light btn-large small-margin" onClick={() => window.open("https://puissance4-jquery.herokuapp.com/", "_blank")}>
                                            <i className="material-icons right">play_circle_filled</i>DEMO
                                        </a>
                                        <a className="col s5 m5 l5 waves-effect waves-light btn-large small-margin" onClick={() => window.open("https://github.com/antoniotina/puissance4", "_blank")}>
                                            <i className="material-icons right">code</i>CODE
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default February
