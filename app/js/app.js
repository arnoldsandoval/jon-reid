import React from 'react'
import { Router } from 'react-router';
import YouTube from 'react-youtube'
import Button from './components/button/button.component'
import LoadIndicator from './components/load-indicator/load-indicator.component'


require('../scss/main.scss')


/**
 * Application component
 */

 class App extends React.Component {

   constructor(props) {
     super(props);
     this.state = {
       isLoaded: false
     };
   }

  componentDidMount() {
    document.title = 'Jon Reid/Negative House, Inc. | Colorist | Los Angeles, CA';
  }

  _videoOnReady(e) {
    e.target.mute()
  }

  _videoOnStateChange(event) {
    if (event.data === 1) {
      this.setState({
        isLoaded: true
      });
    }
    if (event.data === YT.PlayerState.ENDED) {
      event.target.playVideo();
    }
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
        <div className='bg-video'>
          <YouTube
            className='component-video'
            videoId='TxEG-764pkI'
            opts={opts}
            onReady={this._videoOnReady}
            onStateChange={this._videoOnStateChange.bind(this)} />
        </div>
        <div className='content'>
          <div className='inner'>
            <h1>Jon Reid</h1>
            <h3>Colorist – Los Angeles, CA</h3>
            <Button value='View Reel' link='reel' />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
