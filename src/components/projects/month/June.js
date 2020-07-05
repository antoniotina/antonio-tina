import React from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import 'react-materialize'
import '../../../style.css'
import commerce from '../../../assets/projects/8commerce.png'
import Reactjs from '../../../assets/language-icon/reactjs.png'
import PHP from '../../../assets/language-icon/php.png'
import Symfony from '../../../assets/language-icon/symfony.png'
import MySQL from '../../../assets/language-icon/mysql.png'

function June() {
    return (
        <div>
            <div className="row white-font">
                <div className="col s12">
                    <div className="card overflow-hidden">
                        <div className="card-content center-when-small">
                            <h3 className='project-title'>8 Commerce - Blueprint. <br /><small>(1 month)</small></h3>
                            <div className='row'>
                                <div className='col l4 s12'>
                                    <a onClick={() => window.open("https://e-8commerce-client.herokuapp.com/", "_blank")}>
                                        <img alt='Screenshot of 8 Commerce - blueprint.' className="responsive-img project-image z-depth-4" src={commerce}></img>
                                    </a>
                                </div>
                                <div className='col l8 m12 s12'>
                                    <div className='row'>
                                        <div className='col l6 s12'>
                                            <h5>Objective of project</h5>
                                            <p>
                                                The biggest project of the year. In a group of 8 students, we had to create an e-commerce website from scratch, marketing included.
                                                <span className='paragraph-too-big'>
                                                    There's a user system. Categories, subcategories and products. Each product has different sub products.
                                                    There's also a fully fledged admin page with statistics, Categories /subcategories /products /subproducts update/creation/deletion AND
                                                    restocking from Suppliers.
                                                    We also added some bonuses like user reviews, social media share buttons, google login and even order tracking.
                                                </span>
                                            </p>
                                        </div>
                                        <div className='col l6 s12'>
                                            <h5>Technologies used</h5>
                                            <ul>
                                                <li className='language'><img alt='' className='language-icon' src={Reactjs} />React.js</li>
                                                <li className='language'><img alt='' className='language-icon' src={PHP} />PHP</li>
                                                <li className='language'><img alt='' className='language-icon' src={Symfony} />Symfony</li>
                                                <li className='language'><img alt='' className='language-icon' src={MySQL} />MySQL</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className='row project-buttons-june'>
                                        <a className="col s5 m5 l5 waves-effect waves-light btn-large small-margin" onClick={() => window.open("https://e-8commerce-client.herokuapp.com/", "_blank")}>
                                            <i className="material-icons right">play_circle_filled</i>DEMO
                                        </a>
                                        <a className="col s5 m5 l5 waves-effect waves-light btn-large small-margin" onClick={() => window.open("https://github.com/reyesvictor/8-commerce", "_blank")}>
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

export default June
