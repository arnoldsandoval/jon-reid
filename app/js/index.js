import React  from 'react';
import ReactDOM  from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import App from './app'
import Reel from './reel'

/**
 * Index (Root) Application component
 */
const Index = React.createClass({

  /**
   * Renders the component
   * @return {String} HTML markup for the component
   */
  render: function() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={App}/>
        <Route path="reel" component={Reel} />
        <Route path="*" component={App}/>
      </Router>
    )
  }
})

ReactDOM.render(<Index />, document.getElementById('app'))
