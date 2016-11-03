import React from 'react'
import { Router, Route, browserHistory } from 'react-router';
import Button from './components/button/button.component'
import YouTube from 'react-youtube'
import LoadIndicator from './components/load-indicator/load-indicator.component'

/**
 * Application component
 */
 class Reel extends React.Component {

   constructor(props) {
     super(props);
     this.state = {
       isLoaded: false
     };
   }

  componentDidMount() {
    document.title = 'Jon Reid/Negative House, Inc. | Reel';
  }

  _videoOnReady(event) {
    console.log('_videoOnReady', event)
  }

  /**
   *
   */
  _videoOnStateChange(event) {
    if (event.data !== 1) {
      browserHistory.push({
        pathname: '/',
        search: '?t=' + event.target.getCurrentTime(),
        state: { some: 'state' }
      })
    }
    if (event.data === 1) {
      this.setState({
        isLoaded: true
      });
    }
    console.log('_videoOnStateChange', event)
  }

  /**
   * Renders the component
   * @return {String} HTML markup for the component
   */
  render() {
    const loadingClass = this.state.isLoaded ? 'is-loaded' : 'is-loading';
    const opts = {
      playerVars: {
        'autoplay': 1,
        'controls': 0,
        'iv_load_policy': 3,
        'showinfo': 0,
        'modestbranding': 1,
        'rel': 0,
        'loop': 1
      }
    };
    return (
      <div className={loadingClass}>
        <LoadIndicator />
        <YouTube
          className='component-video'
          videoId='kPyDTbgjDG8'
          opts={opts}
          onStateChange={this._videoOnStateChange.bind(this)}
          onReady={this._videoOnReady} />
      </div>
    )
  }
}


export default Reel;
