import React, { Component } from 'react'
import Footer from '../Footer'
import './index.css'

export default class Post extends Component {
  render() {
    return (
      <div>
        <div id='postBorder'>
          
        </div>
        <div id='postBody'>
          <h2>Post your comment here</h2>
          <div id='inputArea'>
            <div id='postInformation'>
              <input type="text" placeholder='  Name' className='leftInput' />
              <input type="text" placeholder='  Email' className='leftInput' />
              <input type="text" placeholder='  Phone' className='leftInput' />
            </div>
            <div id='postText'>
              <input type="text" placeholder='Text' />
            </div>
          </div>
          <button id='submitBtn'>Submit</button>
        </div>
        <Footer />
      </div>
    )
  }
}
