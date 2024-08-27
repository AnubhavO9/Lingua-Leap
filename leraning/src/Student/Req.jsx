import React from 'react'
import './Req.css';

import { Link } from 'react-router-dom';
import Calenda from './Calenda';

export default function Req() {

    return (
        <body>
            <div className='wraap-14'>
                <div id='left-14'>

                    <Calenda />
                </div>
                <div id="right-14">
                    <div class="combined">
                        <div class="dot1-14"></div>
                        <div class="msg1-14"><p align="center">Waiting..</p></div>
                        <div class="dot2-14"></div>
                        <div class="wait-14"><p class="waitt-14">Alloted</p></div>
                        <center><Link to="/presentlearning" className="btn btn-info mt-4 mb-4 studbtn">Student Dashboard</Link></center>

                    </div>
                </div>

            </div>
        </body>

    )
}