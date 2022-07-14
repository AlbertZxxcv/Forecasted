import React, { Component } from 'react'
import './index.css'
import overViewImg from './product.png'
import Footer from '../Footer'

export default class Home extends Component {
  render() {
    return (
      <div>
        <div id='titleBorder'>
          <div id='titleContent'>
            <h1>Overview</h1>
            <p>This page provides a convenient way to know your city's current and future 3days weather.</p>
          </div>
        </div>

        <div id='secondLayer'>
          <div id='overviewImg'>
              <img src={overViewImg} alt="Lost"/>
          </div>
          <div id='detailExplain'>
            <h3>Explain</h3>
            <p>On the Product Page, simply enter your city's name (or the post code) and click the Search button to find forecasted weather information in a few seconds.</p>
          </div>
        </div>

        <div id='thirdLayer'>
          <div id='thirdContent'>
            <h1>Comments our website!</h1>
            <p>If you have any comments for our web page, you can submit your comments on the Post page. And on the Comments page, you can also check others' comments.</p>
          </div>
        </div>

        <Footer/>
      </div>
    )
  }
}
