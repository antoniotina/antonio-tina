import React from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import 'react-materialize'
import '../../../style.css'
import mysnapchat from '../../../assets/projects/mysnapchat.png'
import Reactjs from '../../../assets/language-icon/reactjs.png'

function May() {
    return (
        <div>
            <div className="row white-font">
                <div className="col s12">
                    <div className="card overflow-hidden">
                        <div className="card-content center-when-small">
                            <h3 className='project-title'>My_snapchat <br /><small>(1 week)</small></h3>
                            <div className='row'>
                                <div className='col l4 s12'>
                                    <a onClick={() => window.open("http://cumbersome-beetle.surge.sh/", "_blank")}>
                                        <img alt='Screenshot of My Snapchat' className="responsive-img project-image z-depth-4" src={mysnapchat}></img>
                                    </a>
                                </div>
                                <div className='col l8 m12 s12'>
                                    <div className='row'>
                                        <div className='col l6 s12'>
                                            <h5>Objective of project</h5>
                                            <p>
                                                Recreating snapchat. Use the provided API(server) and creating a React app that works like snapchat.
                                                Sending and receiving snaps with a pre determined timer on them.
                                                Nothing is saved locally.
                                            </p>
                                        </div>
                                        <div className='col l6 s12'>
                                            <h5>Technologies used</h5>
                                            <ul>
                                                <li className='language'><img alt='' className='language-icon' src={Reactjs} />React.js</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className='row project-buttons'>
                                        <a className="col s5 m5 l5 waves-effect waves-light btn-large small-margin" onClick={() => window.open("http://cumbersome-beetle.surge.sh/", "_blank")}>
                                            <i className="material-icons right">play_circle_filled</i>DEMO
                                        </a>
                                        <a className="col s5 m5 l5 waves-effect waves-light btn-large small-margin" onClick={() => window.open("https://github.com/antoniotina/my_snapchat_a", "_blank")}>
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

export default May
