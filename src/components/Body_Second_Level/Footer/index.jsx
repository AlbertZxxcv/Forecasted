import React, { Component } from 'react'
import './index.css'
import googleIcon from './google.png'
import facebookIcon from './facebook.png'

export default class Footer extends Component {
    render() {
        return (
            <div id='forthLayer'>
                <div id='forthContent'>
                    <h1>API Provided by:</h1>
                    <p>openweathermap.org</p>
                    <p>www.google.com/maps</p>
                    <p>©️Wanghao Tang(Albert)</p>

                </div>
                <div id='socialMedia'>
                    <h3>Social</h3>
                    <div id='socialPic'>
                        <img src={googleIcon} alt="Missing" />
                        <img src={facebookIcon} alt="Missing" />
                        <img src={googleIcon} alt="Missing" />
                        <img src={facebookIcon} alt="Missing" />
                    </div>
                </div>
            </div>
        )
    }
}
