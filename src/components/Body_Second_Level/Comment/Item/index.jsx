import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
  state = {display:true}
  btnClick = ()=>{
    const{display} = this.state;
    this.setState({display:!display});
    if (this.state.display){
      this.text.style = "display:none;"
      this.btn.innerText = "v"
    }else{
      this.text.style = "display:block;"
      this.btn.innerText = "^"
    }
  }
  render() {
    return (
      <div>
        <div id='ItemBody'>
          <div id="number">
            <div id='headDiv'>
              <div></div>
              <h4>Comments {this.props.number}</h4>
              <div id='dropBtn' onClick={this.btnClick} ref={c=>this.btn=c}>^</div>
            </div>
          </div>
          <div id="commentText" ref={c=>this.text=c} style={{'display':'block'}}>
            <div id='textArea'>
              <p>{this.props.content}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
