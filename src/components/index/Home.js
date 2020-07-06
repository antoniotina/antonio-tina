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

function Home() {
    return (
        <div className=''>
            <div className="row white-font">
                <div className="col s12">
                    <div className="card card-home overflow-hidden">
                        <div className="card-content center-when-small">
                            <h4 className='project-title'>Antonio Tina - <small>Full Stack Web developer</small></h4>
                            <div className='row'>
                                <div className='col l6 m12 s12'>
                                    <div className='row'>
                                        <br />
                                        <p>
                                            Hello, I'm Antonio Tina and I'm a Full Stack Web developer based in Paris, France.&nbsp
                                            <span className='paragraph-too-big'>
                                                Born and raised in Portugal, I moved to france when I was 18.
                                            </span>
                                            <br />
                                            I worked as an IT technician and Network Administrator for 4 and a half years. Always having a passion for coding, once I saw Samsung Campus' offer,
                                            I couldn't have passed on it!
                                        </p>
                                        <hr />
                                        <small className='valign-wrapper'>
                                            <i className="material-icons font-size-16">phone_android</i> 07 83 17 43 65 <br />
                                        </small>
                                        <small className='valign-wrapper'>
                                            <i className="material-icons font-size-16">email</i> antonio.tina@epitech.eu
                                        </small>
                                    </div>
                                    <div className='row'>
                                        <h5>
                                            Skills
                                        </h5>
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
                                <div className='col l6 s12'>
                                    <img alt='Antonio Tina' className="responsive-img project-image" src={photo}></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
