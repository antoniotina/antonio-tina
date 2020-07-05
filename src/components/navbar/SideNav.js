import React, { useEffect } from 'react'
import M from "materialize-css"
import 'materialize-css/dist/css/materialize.min.css'
import 'react-materialize'
import '../../style.css'
import {
    Link
} from "react-router-dom";

function SideNav() {

    useEffect(() => {
        const options = {
            draggable: true
        }
        var elems = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(elems, options);
    }, [])

    return (
        <div className="SideNav">
            <ul id="slide-out" className="sidenav color-3">
                <li style={{ height: '20vh' }}></li>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/projects'>Projects</Link></li>
            </ul>
            <a href="#"
                data-target="slide-out"
                className="sidenav-trigger btn-floating btn-large waves-effect waves-light red"
                style={{
                    position: 'fixed',
                    top: '45%',
                    left: '1vh'
                }}
            >
                <i className="material-icons right">menu</i>
            </a>
        </div>
    )
}

export default SideNav
