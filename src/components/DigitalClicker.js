import React from 'react'

class DigitalClicker extends React.Component{
  constructor(){
    super();

    this.state = {
      timesClicked : 0
    }
  }
handleButton(){

}
  render(){
    return(
      <button onClick="handleButton">{this.state.timesClicked}</button>
    )
  }
}

export default DigitalClicker
