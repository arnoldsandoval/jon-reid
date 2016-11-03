import React from 'react'
import { Link } from 'react-router'
require('./button.component.scss')

/**
 * Application component
 */


 class Button extends React.Component {

  /**
   * Renders the component
   * @return {String} HTML markup for the component
   */
  render() {
    return (
        <Link
          to={this.props.link}
          href="#"
          id="btn-reel"
          data-btn={this.props.value}
          className="btn"
          >
          {this.props.value}
        </Link>
    )
  }

}

export default Button;
