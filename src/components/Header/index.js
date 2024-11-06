import {Component} from 'react'
import {Link} from 'react-router-dom' // Use named import for Link
import './index.css'

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div>
          <Link to="/">
            <img
              src="https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png"
              alt="website logo"
              className="header-img"
            />
          </Link>
        </div>
      </div>
    )
  }
}
