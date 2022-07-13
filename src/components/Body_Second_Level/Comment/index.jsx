import React, { Component } from 'react'
import Footer from '../Footer'
import './index.css'
import Item from './Item'

export default class Comment extends Component {
  render() {
    const {comments} = this.props;
    return (
      <div>
        <div id='commentBorder'>
          <h2>Comments about our website......</h2>
          <div id='commentBody'>
            {
              comments.map((obj, index)=>{
                return <Item key={obj.id} content = {obj.content} number = {index+1}/>
              })
            }
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}
