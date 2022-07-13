import React, { Component } from 'react'
import './index.css'
import logoImg from './logo.png'

export default class Head extends Component {
  render() {
    const {switchPage} = this.props;
    return (
      <div className='head'>
        <div className='midLayer'>
          <div className='logo'>
            <img src={logoImg} alt="logo" />
          </div>
          <div className='nav'>
            <div className=''>
              <div className='navItem'>
                <div onClick={switchPage("home")}>
                  Home
                </div>
              </div>
              <div className='navItem'>
                <div onClick={switchPage("product")}>
                  Product
                </div>
              </div>
              <div className='navItem'>
                <div onClick={switchPage("comment")}>
                  Comments
                </div>
              </div>
              <div className='navItem'>
                <div onClick={switchPage("post")}>
                  Post
                </div>
              </div>
            </div>
          </div>
          <div className='searchIcon'>
            <img src={logoImg} alt="logo" />
          </div>
        </div>
      </div>
    )
  }
}
