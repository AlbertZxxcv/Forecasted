import React, { Component } from 'react'
import './index.css'
import overViewImg from './img1.png'
import Footer from '../Footer'

export default class Home extends Component {
  render() {
    return (
      <div>
        <div id='titleBorder'>
          <div id='titleContent'>
            <h1>Overview</h1>
            <p>Balalalaallalala</p>
          </div>
        </div>

        <div id='secondLayer'>
          <div id='overviewImg'>
              <img src={overViewImg} alt="Lost"/>
          </div>
          <div id='detailExplain'>
            <h3>Explain</h3>
            <p>Balalalaallallalallalsadadsdadsadasdasdasdasdadasdasadasdasa</p>
          </div>
        </div>

        <div id='thirdLayer'>
          <div id='thirdContent'>
            <h1>adasda</h1>
          </div>
        </div>

        <Footer/>
      </div>
    )
  }
}
