import React from 'react'
import { Link } from 'react-router'
require('./load-indicator.component.scss')

/**
 * Application component
 */


 class LoadIndicator extends React.Component {

  /**
   * Renders the component
   * @return {String} HTML markup for the component
   */
  render() {
    return (
      <div className="load-indicator">
        <div className="child bounce1"></div>
        <div className="child bounce2"></div>
        <div className="child bounce3"></div>
      </div>
    )
  }

}

export default LoadIndicator;
