import React, { Component } from 'react'
import './App.css';
import Head from './components/Head';
import Body from './components/Body';


export default class App extends Component {
  state = {home:true,product: false,comment:false,post:false};
  switchPage = (page) =>{
    if (page === "home"){
      return this.setState({home:true,product: false,comment:false,post:false}) 

    }
    if (page === "product"){
      return this.setState({home:false,product: true,comment:false,post:false}) 
    }
    if (page === "comment"){
      return this.setState({home:false,product: false,comment:true,post:false}) 
    }
    if (page === "post"){
      return this.setState({home:false,product: false,comment:false,post:true}) 
    }
  }

  render() {
    return (
      <div className='body'>
        <Head switchPage = {this.switchPage} {...this.state}/>
        <Body {...this.state} switchPage = {this.switchPage}/>
      </div>
    )
  }
}
