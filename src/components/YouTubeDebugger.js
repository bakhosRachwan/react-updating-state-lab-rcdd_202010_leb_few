import React from 'react';

class YouTubeDebugger extends React.Component {
  constructor(){
    super()
    this.state =     {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }
    render(){
      return(
        <div>
          <button className="bitrate"></button>
          <button className="resolution"></button>
        </div>
      )
    }
  }

export default YouTubeDebugger
