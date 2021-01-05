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
        <>
        <button className="bitrate"></button>
        <button className="resolution"></button>
        </>
      )
    }
  }

export default YouTubeDebugger
