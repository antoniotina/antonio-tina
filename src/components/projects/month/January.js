import React from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import 'react-materialize'
import '../../../style.css'
import Racingjs from '../../../assets/projects/racingjs.png'
import JS from '../../../assets/language-icon/js2.png'

function January() {
    return (
        <div>
            <div className="row white-font">
                <div className="col s12">
                    <div className="card overflow-hidden">
                        <div className="card-content center-when-small">
                            <h3 className='project-title'>Racingjs <br /><small>(2 weeks)</small></h3>
                            <div className='row'>
                                <div className='col l4 s12'>
                                    <a href='#' onClick={() => window.open("https://racingjs.herokuapp.com/ex_02.html", "_blank")}>
                                        <img alt='Screenshot of RacingJS' className="responsive-img project-image z-depth-4" src={Racingjs}></img>
                                    </a>
                                </div>
                                <div className='col l8 m12 s12'>
                                    <div className='row'>
                                        <div className='col l6 s12'>
                                            <h5>Objective of project</h5>
                                            <p>
                                                This project, we had to recreate our own function that could work with the DOM by searching by element, class or id.
                                                It was also a way to learn the many possibilities that javascript provides.
                                            </p>
                                        </div>
                                        <div className='col l6 s12'>
                                            <h5>Technologies used</h5>
                                            <ul>
                                                <li className='language'><img alt='' className='language-icon' src={JS} />Javascript</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className='row project-buttons'>
                                        <a href='#' className="col s5 m5 l5 waves-effect waves-light btn-large small-margin" onClick={() => window.open("https://racingjs.herokuapp.com/ex_02.html", "_blank")}>
                                            <i className="material-icons right">play_circle_filled</i>DEMO
                                        </a>
                                        <a href='#' className="col s5 m5 l5 waves-effect waves-light btn-large small-margin" onClick={() => window.open("https://github.com/antoniotina/racingjs", "_blank")}>
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

export default January
