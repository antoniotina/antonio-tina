import React from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import 'react-materialize'
import '../../../style.css'
import myirc from '../../../assets/projects/myirc.png'
import Nodejs from '../../../assets/language-icon/nodejs.png'
import Reactjs from '../../../assets/language-icon/reactjs.png'
import Socketio from '../../../assets/language-icon/socketio.png'
import Expressjs from '../../../assets/language-icon/expressjs.png'

function April() {
    return (
        <div>
            <div className="row white-font">
                <div className="col s12">
                    <div className="card overflow-hidden">
                        <div className="card-content center-when-small">
                            <h3 className='project-title'>My_irc <br /><small>(2 weeks)</small></h3>
                            <div className='row'>
                                <div className='col l4 s12'>
                                    <a onClick={() => window.open("https://reverent-hopper-3054e4.netlify.app/", "_blank")}>
                                        <img alt='Screenshot of My IRC' className="responsive-img project-image z-depth-4" src={myirc}></img>
                                    </a>
                                </div>
                                <div className='col l8 m12 s12'>
                                    <div className='row'>
                                        <div className='col l6 s12'>
                                            <h5>Objective of project</h5>
                                            <p>
                                                Creating a chat room without any database. Only using Socket.io via Node.js and React.js.
                                                No data is saved, everything is volatile.
                                            </p>
                                        </div>
                                        <div className='col l6 s12'>
                                            <h5>Technologies used</h5>
                                            <ul>
                                                <li className='language'><img alt='' className='language-icon' src={Reactjs} />React.js</li>
                                                <li className='language'><img alt='' className='language-icon' src={Socketio} />Socket.io</li>
                                                <li className='language'><img alt='' className='language-icon' src={Nodejs} />Nodejs</li>
                                                <li className='language'><img alt='' className='language-icon' src={Expressjs} />Express.js</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className='row project-buttons'>
                                        <a className="col s5 m5 l5 waves-effect waves-light btn-large small-margin" onClick={() => window.open("https://reverent-hopper-3054e4.netlify.app/", "_blank")}>
                                            <i className="material-icons right">play_circle_filled</i>DEMO
                                        </a>
                                        <a className="col s5 m5 l5 waves-effect waves-light btn-large small-margin" onClick={() => window.open("https://github.com/antoniotina/my_irc", "_blank")}>
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

export default April
