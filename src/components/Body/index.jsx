import React, { Component } from 'react'
import './index.css'
import Home from '../Body_Second_Level/Home'
import Product from '../Body_Second_Level/Product'
import Comment from '../Body_Second_Level/Comment'
import Post from '../Body_Second_Level/Post'

export default class Body extends Component {
  sendAjax = (url) => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.responseType = 'json';
      xhr.open("GET", url);
      xhr.send();
      // handle the result
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status >= 200 && xhr.status < 300) {
            resolve(xhr.response);
          } else {
            reject(xhr.status);
          }
        }
      }
    })
  }
  sendPostAjax = (url, body) => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.responseType = 'json';
      xhr.open("POST", url);
      console.log("This is the body in sendpostAjax ", body)
      // 设置请求头信息
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
      xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
      xhr.send(body);
      // handle the result
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status >= 200 && xhr.status < 300) {
            resolve(xhr.response);
          } else {
            reject(xhr.status);
          }
        }
      }
    })
  }
  state = {comments : []}

  componentDidMount(){
    this.sendAjax("https://u8pmks2bql.execute-api.us-east-2.amazonaws.com/dbtest1").then(value =>{
      let array = value.results
      this.setState({comments: array})
    }, reason =>{
      console.warn(reason);
    })
  }
  // state = {comments: [{id:1, content:"Web pages should be more colourful.", name:"", phone:"", email:""}, 
  // {id:2, content:"Comments that have been sent could be edited.", name:"", phone:"", email:""}, 
  // {id:3, content:"I hope the personal information will not be leaked.", name:"", phone:"", email:""}, 
  // {id:4, content:"If I enter the wrong city name, I hope there will be an alert to tell me the spelling is false rather than nonresponsive.", name:"", phone:"", email:""}]};
  // nextId = 5;

  changeComments = (text, name, phone, email)=>{
    const {switchPage} = this.props
    let body = "username=" + name + "&password=a&text="+text 
    console.log(body)
    this.sendPostAjax("https://u8pmks2bql.execute-api.us-east-2.amazonaws.com/dbtest1", body).then(value=>{
      console.log(value)
      this.sendAjax("https://u8pmks2bql.execute-api.us-east-2.amazonaws.com/dbtest1").then(value =>{
      // console.log(value)
      let array = value.results
      this.setState({comments: array})
    }, reason =>{
      console.warn(reason);
    })
    }, reason=>{console.warn(reason);})
    
    switchPage("comment")
    // this.setState({comments:[...this.state.comments, {id:this.nextId, content:text, name, phone, email}]})
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
