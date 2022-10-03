import React, { Component } from 'react';

class ClassComp extends Component {
  constructor(props){
    super(props)
    this.state={
      count:1
    }
  }
  increment(){
    this.setState({
      count: this.state.count +1
    })
  }
  decrement(){
    this.setState({
      count:this.state.count-1
    })
  }
  
  render() {
    return(
      <div>
        <h1>this is class component from {this.props.location}</h1>
        <h2>Counter {this.state.count}</h2>
        <button onClick={()=>{this.setState({count: this.state.count +1})}}>Inline Increment Value</button>
        <button onClick={()=>{this.increment()}}>By Using Function Increment the Value</button>
        <button onClick={()=>{this.decrement()}}>Decrement Value</button>
        
      </div>
    )

  }

}

export default ClassComp