import React from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import 'react-materialize'
import '../../../style.css'
import Maquette from '../../../assets/projects/maquette-responsive.png'
import HTML5 from '../../../assets/language-icon/html5.png'
import CSS3 from '../../../assets/language-icon/css3.png'
import JS from '../../../assets/language-icon/js2.png'
import JQuery from '../../../assets/language-icon/jquery.png'

function December() {
    return (
        <div>
            <div className="row white-font">
                <div className="col s12">
                    <div className="card overflow-hidden">
                        <div className="card-content center-when-small">
                            <h3 className='project-title'>Maquette Responsive <br /><small>(2 weeks)</small></h3>
                            <div className='row'>
                                <div className='col l4 s12'>
                                    <a onClick={() => window.open("https://maquette-responsive.herokuapp.com/", "_blank")}>
                                        <img alt='Screenshot of Maquette Responsive' className="responsive-img project-image z-depth-4" src={Maquette}></img>
                                    </a>
                                </div>
                                <div className='col l8 m12 s12'>
                                    <div className='row'>
                                        <div className='col l6 s12'>
                                            <h5>Objective of project</h5>
                                            <p>
                                                Recreate a static website out of an image. The website is a simple HTML5 and CSS3 template with a JQuery Carousel/Slideshow.
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
                                </div>
                                <div className='row project-buttons'>
                                    <a className="col s5 m5 l5 waves-effect waves-light btn-large small-margin" onClick={() => window.open("https://maquette-responsive.herokuapp.com/", "_blank")}>
                                        <i className="material-icons right">play_circle_filled</i>DEMO
                                    </a>
                                    <a className="col s5 m5 l5 waves-effect waves-light btn-large small-margin" onClick={() => window.open("https://github.com/antoniotina/maquette-responsive", "_blank")}>
                                        <i className="material-icons right">code</i>CODE
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default December
