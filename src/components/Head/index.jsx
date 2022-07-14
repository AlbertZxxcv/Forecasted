import React, { Component } from 'react'
import './index.css'
import logoImg from './logo.png'

export default class Head extends Component {
  apearBorder = (home, product, comment, post)=>{
    if(home){
      this.homeref.style = "border-style: none none solid none;"
    }else{
      this.homeref.style = "border-bottom: none;"
    }
    if(product){
      this.productref.style = "border-style: none none solid none;"
    }else{
      this.productref.style = "border-bottom: none;"
    }
    if(comment){
      this.commentref.style = "border-style: none none solid none;"
    }else{
      this.commentref.style = "border-bottom: none;"
    }
    if(post){
      this.postref.style = "border-style: none none solid none;"
    }else{
      this.postref.style = "border-bottom: none;"
    }
  }

  clickFunction = (whichPage) =>{
    return  ()=>{
      const {switchPage} = this.props;
      switchPage(whichPage);
    }
  }
  componentDidUpdate(){
    const {home, product, comment, post} = this.props;
    this.apearBorder(home, product, comment, post);
  }

  render() {
    return (
      <div className='head'>
        <div className='midLayer'>
          <div className='logo'>
            <img src={logoImg} alt="logo" />
          </div>
          <div className='nav'>
            <div className=''>
              <div className='navItem'>
                <div onClick={this.clickFunction("home")} className='blueSelect' ref={c=>this.homeref=c} style={{'borderStyle':'none none solid none'}}>
                  Home
                </div>
              </div>
              <div className='navItem'>
                <div onClick={this.clickFunction("product")} className='blueSelect' ref={c=>this.productref=c}>
                  Product
                </div>
              </div>
              <div className='navItem'>
                <div onClick={this.clickFunction("comment")} className='blueSelect' ref={c=>this.commentref=c}>
                  Comments
                </div>
              </div>
              <div className='navItem'>
                <div onClick={this.clickFunction("post")} className='blueSelect' ref={c=>this.postref=c}>
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
