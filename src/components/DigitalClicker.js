import React from 'react'

class DigitalClicker extends React.Component{
  constructor(){
    super();

    this.state = {
      timesClicked : 0
    }
  }

  render(){
    return(
      <button>{this.state.timesClicked}</button>
    )
  }
}

export default DigitalClicker