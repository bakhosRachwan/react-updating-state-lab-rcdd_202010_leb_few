import React from 'react'

class GigitalClicker extends React.Component{
  this.state {
    timesClicked : 0
  }
  render(){
    return(
      <button>{this.state.timesClicked}</button>
    )
  }
}