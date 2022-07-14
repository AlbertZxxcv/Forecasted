import React, { Component } from 'react'
import './index.css'
import Home from '../Body_Second_Level/Home'
import Product from '../Body_Second_Level/Product'
import Comment from '../Body_Second_Level/Comment'
import Post from '../Body_Second_Level/Post'

export default class Body extends Component {
  state = {comments: [{id:1, content:"Web pages should be more colourful.", name:"", phone:"", email:""}, 
  {id:2, content:"Comments that have been sent could be edited.", name:"", phone:"", email:""}, 
  {id:3, content:"I hope the personal information will not be leaked.", name:"", phone:"", email:""}, 
  {id:4, content:"If I enter the wrong city name, I hope there will be an alert to tell me the spelling is false rather than nonresponsive.", name:"", phone:"", email:""}]};
  nextId = 5;

  changeComments = (text, name, phone, email)=>{
    this.setState({comments:[...this.state.comments, {id:this.nextId, content:text, name, phone, email}]})
  }

  render() {
    const { home, product, comment, post} = this.props
    return (
      <div className='mainbody'>
      {
        home ? <Home/> :
        product? <Product/> :
        comment? <Comment comments = {this.state.comments}/>:
        post? <Post changeComments={this.changeComments}/> : <h1>error</h1>
      }
      </div>
    )
  }
}
