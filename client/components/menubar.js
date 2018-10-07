import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Menubar = ({handleClick, isLoggedIn}) => (
  <div>
    <nav>

          <Link to="/reading">Sight Reading</Link>
          <a href="#" onClick={handleClick}>
          </a>

          <Link to="/videos">Videos</Link>
          <a href="#" onClick={handleClick}>
          </a>

          <Link to="/resources">Resources</Link>
          <a href="#" onClick={handleClick}>
          </a>

          <Link to="/profile">Profile</Link>
          <a href="#" onClick={handleClick}>
          </a>

    </nav>
    <hr />
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Menubar)

/**
 * PROP TYPES
 */
Menubar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
