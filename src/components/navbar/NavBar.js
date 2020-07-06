import React, { useEffect } from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import 'react-materialize'
import '../../style.css'
import M from "materialize-css"
import Contact from '../email/Contact'
import {
    Link
} from "react-router-dom";
import github from '../../assets/random-icons/github.png'
import linkedin from '../../assets/random-icons/linkedin.png'

function NavBar() {

    useEffect(() => {
        var elems = document.querySelectorAll('.modal');
        M.Modal.init(elems);
    }, [])

    return (
        <div className="navbar-fixed">
            <nav>
                <div className="nav-wrapper color-2">
                    <ul className="left">
                        <li><Link className='' to='/'>Home</Link></li>
                        <li><Link className='' to='/projects'>Projects</Link></li>
                        <li><Link className='' to='/about'>About</Link></li>
                    </ul>
                    <ul className="right">
                        <li>
                            <a className="modal-trigger" href="#modal1">
                                <span className='hide-when-small'>
                                    Contact Me
                                </span>
                                <i className="material-icons right show-when-small">email</i>
                            </a>
                        </li>
                        <li>
                            <a href='https://drive.google.com/uc?export=download&id=1I1M8uinpTEEpA-RyhlSv6WCPP2PJ5Fes' rel="noopener noreferrer" download>
                                CV<i className="material-icons right hide-when-small">file_download</i>
                            </a>
                        </li>
                        <li href='#' className='small-margin-top hide-when-small'>
                            <a href='#' onClick={() => window.open("https://github.com/antoniotina", "_blank")}>
                                <img alt='Github logo' className='valign-wrapper navbar-icon' src={github} />
                            </a>
                        </li>
                        <li className='small-margin-top hide-when-small'>
                            <a href='#' onClick={() => window.open("https://www.linkedin.com/in/antonio-tina-727b781a7/", "_blank")}>
                                <img alt='LinkedIN logo' className='valign-wrapper navbar-icon' src={linkedin} />
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div id="modal1" className="modal color-2 overflow-hidden modal-contact">
                <Contact />
                {/* <div className="modal-content">
                    <h4>Modal Header</h4>
                    <p>A bunch of text</p>
                </div>
                <div className="modal-footer">
                    <a href="#!" className="modal-close waves-effect waves-green btn-flat">Agree</a>
                </div> */}
            </div>
        </div>
    )
}

export default NavBar
