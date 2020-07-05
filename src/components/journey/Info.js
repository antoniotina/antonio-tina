import React from 'react'
import photo from '../../assets/myphotos/me.png'
import 'materialize-css/dist/css/materialize.min.css'
import 'react-materialize'
import HTML5 from '../../assets/language-icon/html5.png'
import css3 from '../../assets/language-icon/css3.png'
import expressjs from '../../assets/language-icon/expressjs.png'
import jquery from '../../assets/language-icon/jquery.png'
import js2 from '../../assets/language-icon/js2.png'
import laravel from '../../assets/language-icon/laravel.png'
import mongodb from '../../assets/language-icon/mongodb.png'
import mysql from '../../assets/language-icon/mysql.png'
import nodejs from '../../assets/language-icon/nodejs.png'
import php from '../../assets/language-icon/php.png'
import reactjs2 from '../../assets/language-icon/reactjs2.png'
import socketio from '../../assets/language-icon/socketio.png'
import sql from '../../assets/language-icon/sql.png'
import symfony from '../../assets/language-icon/symfony.png'

function Info() {
    return (
        <div className=''>
            <div className="row white-font">
                <div className="col s12">
                    <div className="card card-home overflow-hidden">
                        <div className="card-content center-when-small">
                            <div className='row'>
                            </div>
                            <h4 className='project-title'>Education</h4>
                            <div className='row'>
                                <div className='col s12 l6'>
                                    <b>2019-2021</b>
                                    <p>
                                        FULL STACK WEB DEVELOPER
                                    </p>
                                    <p>
                                        Samsung Campus – Epitech, Saint-Ouen 93400, FR
                                    </p>
                                    <p>
                                        BAC + 2
                                    </p>
                                    <hr />
                                </div>
                                <div className='col s12 l6'>
                                    <b>2009-2012</b>
                                    <p>
                                        TÉCNICO DE GESTÃO E PROGRAMAÇÃO DE SISTEMAS INFORMÁTICOS
                                    </p>
                                    <p>
                                        Escola Secundaria, Braga, PT
                                    </p>
                                    <p>
                                        BAC PRO
                                    </p>
                                    <hr />
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col s12 l6'>
                                    <h4 className='project-title'>Experience</h4>
                                    <b>2015-2019</b>
                                    <p>
                                        Technicien Informatique
                                    </p>
                                    <p>
                                        Entreprise Adaptée LOXY - 95310 Saint-Ouen-l'Aumône
                                    </p>
                                    <p>
                                        Technicien Informatique – Maintenance Matériel et Administration Réseaux.
                                    </p>
                                    <hr />
                                </div>
                                <div className='col s12 l6'>
                                    <h4 className='project-title'>Languages</h4>
                                    <p>
                                        <b>English</b> - Fluent
                                    </p>
                                    <p>
                                        <b>French</b> - Fluent
                                    </p>
                                    <p>
                                        <b>Portuguese</b> - Fluent
                                    </p>
                                    <p>
                                        <b>Spanish</b> - Basic
                                    </p>
                                    <hr />
                                </div>
                            </div>
                            <div className='row'>
                                <h4>Skills</h4>
                                <ul className='col l6 m6 s6'>
                                    <li className='language'><img alt='' className='language-icon' src={HTML5} />HTML5</li>
                                    <li className='language'><img alt='' className='language-icon' src={css3} />CSS3</li>
                                    <li className='language'><img alt='' className='language-icon' src={js2} />Javascript</li>
                                    <li className='language'><img alt='' className='language-icon' src={jquery} />JQuery</li>
                                    <li className='language'><img alt='' className='language-icon' src={expressjs} />ExpressJS</li>
                                    <li className='language'><img alt='' className='language-icon' src={laravel} />Laravel</li>
                                    <li className='language'><img alt='' className='language-icon' src={mongodb} />MongoDB</li>
                                </ul>
                                <ul className='col l6 m6 s6'>
                                    <li className='language'><img alt='' className='language-icon' src={mysql} />MySQL</li>
                                    <li className='language'><img alt='' className='language-icon' src={nodejs} />NodeJS</li>
                                    <li className='language'><img alt='' className='language-icon' src={php} />PHP</li>
                                    <li className='language'><img alt='' className='language-icon' src={reactjs2} />ReactJS</li>
                                    <li className='language'><img alt='' className='language-icon' src={socketio} />SocketIO</li>
                                    <li className='language'><img alt='' className='language-icon' src={sql} />SQL</li>
                                    <li className='language'><img alt='' className='language-icon' src={symfony} />Symfony</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Info
