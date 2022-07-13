import React, { Component } from 'react'
import './index.css'
import Home from '../Body_Second_Level/Home'
import Product from '../Body_Second_Level/Product'
import Comment from '../Body_Second_Level/Comment'
import Post from '../Body_Second_Level/Post'

export default class Body extends Component {
  state = {comments: [{id:1, content:"abc"}, {id:2, content:"qwe"}, {id:3, content:"zxc"}, {id:4, content:"fgh"}]};
  render() {
    const { home, product, comment, post} = this.props
    return (
      <div className='mainbody'>
      {
        home ? <Home/> :
        product? <Product/> :
        comment? <Comment comments = {this.state.comments}/>:
        post? <Post/> : <h1>error</h1>
      }
      </div>
    )
  }
}
