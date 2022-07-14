import React, { Component } from 'react'
import Footer from '../Footer'
import './index.css'

export default class Post extends Component {
  postSubmit = ()=>{
    const {name, email, phone, textContent} = this;
    this.props.changeComments(textContent.value, name.value, phone.value, email.value);
    name.value = "";
    email.value = "";
    phone.value = "";
    textContent.value = "";
    alert("Comment Submit Successfully");
  }
  render() {
    return (
      <div>
        <div id='postBorder'>
          <div id='postBody'>
            <h2>Post your comment here</h2>
            <div id='inputArea'>
              <div id='postInformation'>
                <input type="text" placeholder='  Name'  className='leftInput' ref={c=>this.name=c}/>
                <input type="text" placeholder='  Email' className='leftInput' ref={c=>this.email=c}/>
                <input type="text" placeholder='  Phone' className='leftInput' ref={c=>this.phone=c}/>
              </div>
              <div id='postText'>
                <input type="text" placeholder='  Text' ref={c=>this.textContent=c}/>
              </div>
            </div>
            <button id='submitBtn' onClick={this.postSubmit}>Submit</button>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
