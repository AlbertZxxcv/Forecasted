import React, { Component } from 'react'
import './index.css'
import googleIcon from './google.png'
import facebookIcon from './facebook.png'

export default class Footer extends Component {
    render() {
        return (
            <div id='forthLayer'>
                <div id='forthContent'>
                    <h1>1</h1>
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
