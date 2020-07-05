import React from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import 'react-materialize'
import '../../../style.css'
import myquizz from '../../../assets/projects/myquizz.png'
import PHP from '../../../assets/language-icon/php.png'
import Symfony from '../../../assets/language-icon/symfony.png'
import MySQL from '../../../assets/language-icon/mysql.png'
import Twig from '../../../assets/language-icon/twig.png'

function March() {
    return (
        <div>
            <div className="row white-font">
                <div className="col s12">
                    <div className="card overflow-hidden">
                        <div className="card-content center-when-small">
                            <h3 className='project-title'>MVC_My_Quiz <br /><small>(2 weeks)</small></h3>
                            <div className='row'>
                                <div className='col l4 s12'>
                                    <a onClick={() => window.open("https://mvc-my-quiz.herokuapp.com/quiz", "_blank")}>
                                        <img alt='Screenshot of My Quizz' className="responsive-img project-image z-depth-4" src={myquizz}></img>
                                    </a>
                                </div>
                                <div className='col l8 m12 s12'>
                                    <div className='row'>
                                        <div className='col l6 s12'>
                                            <h5>Objective of project</h5>
                                            <p>
                                                We had to create a quizz website that the user can create/answer to quizzes and check theirs and other people's scores.
                                                It also has a user registration and login system.
                                            </p>
                                        </div>
                                        <div className='col l6 s12'>
                                            <h5>Technologies used</h5>
                                            <ul>
                                                <li className='language'><img alt='' className='language-icon' src={MySQL} />MySQL</li>
                                                <li className='language'><img alt='' className='language-icon' src={PHP} />PHP</li>
                                                <li className='language'><img alt='' className='language-icon' src={Symfony} />Symfony</li>
                                                <li className='language'><img alt='' className='language-icon' src={Twig} />Twig</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className='row project-buttons'>
                                        <a className="col s5 m5 l5 waves-effect waves-light btn-large small-margin" onClick={() => window.open("https://mvc-my-quiz.herokuapp.com/quiz", "_blank")}>
                                            <i className="material-icons right">play_circle_filled</i>DEMO
                                        </a>
                                        <a className="col s5 m5 l5 waves-effect waves-light btn-large small-margin" onClick={() => window.open("https://github.com/antoniotina/MVC_My_Quiz", "_blank")}>
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

export default March
