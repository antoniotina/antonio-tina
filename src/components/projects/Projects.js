import React, { useEffect } from 'react'
import M from "materialize-css"
import 'materialize-css/dist/css/materialize.min.css'
import 'react-materialize'
import '../../style.css'
import December from './month/December'
import January from './month/January'
import February from './month/February'
import March from './month/March'
import April from './month/April'
import May from './month/May'
import June from './month/June'

function Projects() {

    useEffect(() => {
        const options = {
            swipeable: true
        }
        const tabsContainer = document.querySelector(".tabs")
        M.Tabs.init(tabsContainer, options)
    }, [])

    return (
        <div className="Projects swiiipe">
            <div className='row' style={{ height: '100vh', marginBottom: '0' }}>
                <div className='col s12' style={{ height: '100vh', padding: '0' }}>
                    <ul id="tabs-swipe-demo"
                        className="tabs"
                        style={{
                            position: 'fixed',
                            top: '6vh',
                            zIndex: 100
                        }}
                    >
                        <li className="tab col s2 color-5"><a className='black-font small-margin-top-tabs' href="#test-swipe-1">Dec</a></li>
                        <li className="tab col s1 color-5"><a className='black-font small-margin-top-tabs' href="#test-swipe-2">Jan</a></li>
                        <li className="tab col s2 color-5"><a className='black-font small-margin-top-tabs' href="#test-swipe-3">Feb</a></li>
                        <li className="tab col s2 color-5"><a className='black-font small-margin-top-tabs' href="#test-swipe-4">Mar</a></li>
                        <li className="tab col s2 color-5"><a className='black-font small-margin-top-tabs' href="#test-swipe-5">Apr</a></li>
                        <li className="tab col s1 color-5"><a className='black-font small-margin-top-tabs' href="#test-swipe-6">May</a></li>
                        <li className="tab col s2 color-5"><a className='black-font small-margin-top-tabs' href="#test-swipe-7">Jun</a></li>
                    </ul>
                    <div id="test-swipe-1" className="col s12 month december swiiipe">
                        <December />
                    </div>
                    <div id="test-swipe-2" className="col s12 month january swiiipe">
                        <January />
                    </div>
                    <div id="test-swipe-3" className="col s12 month february swiiipe">
                        <February />
                    </div>
                    <div id="test-swipe-4" className="col s12 month march swiiipe">
                        <March />
                    </div>
                    <div id="test-swipe-5" className="col s12 month april swiiipe">
                        <April />
                    </div>
                    <div id="test-swipe-6" className="col s12 month may swiiipe">
                        <May />
                    </div>
                    <div id="test-swipe-7" className="col s12 month june swiiipe">
                        <June />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
