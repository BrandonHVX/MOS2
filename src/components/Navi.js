import React, { Component } from 'react'
import config from '../../config'
import Scroll from './Scroll'
import { FaTwitter, FaGithub, FaInstagram } from 'react-icons/fa'
import { Link } from 'gatsby'
import Logo from '../images/manofstl.png'

export default class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      openMenu: false,
      visibilityClass: '',
    }
  }
  toggleMenu = value => {
    this.setState({ openMenu: value })
  }

  handleScroll = () => {
    const { visibilityClass } = this.state
    if (window.pageYOffset > 300) {
      if (visibilityClass !== 'navbar-shrink') {
        this.setState({ visibilityClass: 'navbar-shrink' })
      }
    } else {
      if (visibilityClass === 'navbar-shrink') {
        this.setState({ visibilityClass: '' })
      }
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  render() {
    const { openMenu, visibilityClass } = this.state
    return (
      <div>
        <nav
          className={`navbar navbar-expand-lg navbar-light fixed-top ${visibilityClass}`}
          id="mainNav"
        >
          <div className="container">
            <a className="navbar-brand" href="#page-top">
              <img src={Logo} className="img-fluid" />
            </a>
            <button
              onClick={_ => this.toggleMenu(!openMenu)}
              className={`navbar-toggler navbar-toggler-right ${
                openMenu ? '' : 'collapsed'
              }`}
              type="button"
              aria-controls="navbarResponsive"
              aria-expanded={openMenu}
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars"></i>
            </button>

            <div
              className={`collapse navbar-collapse ${openMenu ? 'active' : ''}`}
              id="navbarResponsive"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Scroll
                    onClick={_ => this.toggleMenu(!openMenu)}
                    type="id"
                    element="download"
                  >
                    <a className="nav-link" href="#download">
                      Download
                    </a>
                  </Scroll>
                </li>
                <li className="nav-item">
                  <Scroll
                    onClick={_ => this.toggleMenu(!openMenu)}
                    type="id"
                    element="features"
                  >
                    <a className="nav-link" href="#features">
                      Features
                    </a>
                  </Scroll>
                </li>
                <li className="nav-item">
                  <Scroll
                    onClick={_ => this.toggleMenu(!openMenu)}
                    type="id"
                    element="contact"
                  >
                    <a className="nav-link" href="#contact">
                      Contact
                    </a>
                  </Scroll>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className={`app-sidenav ${openMenu && 'active'}`}>
          <div className="sidenav-menu">
            <div className="logo"> </div>
            <button
              className="button"
              onClick={_ => this.toggleMenu(!openMenu)}
            ></button>
            <ul className="sidenav-nav">
              <Link to="/" activeClassName="active">
                <li>
                  <span className="anchor">Home</span>
                </li>
              </Link>

              <Link to="/lineup/" activeClassName="active">
                <li>
                  <span className="anchor">Lineup</span>
                </li>
              </Link>
              <Link to="/lineup/" activeClassName="active">
                <li>
                  <span className="anchor">tickets</span>
                </li>
              </Link>
              <Link to="/lineup/" activeClassName="active">
                <li>
                  <span className="anchor">VIP Services</span>
                </li>
              </Link>
              <Link to="/contact/" activeClassName="active">
                <li>
                  <span className="anchor">MERCH</span>
                </li>
              </Link>
              <Link to="/contact/" activeClassName="active">
                <li>
                  <span className="anchor">FAQ</span>
                </li>
              </Link>
            </ul>
            <div className="sidenav-links">
              <ul>
                <li>
                  <a href="!#">
                    <FaTwitter className="icon" />
                  </a>
                </li>
                <li>
                  <a href="!#">
                    <FaGithub className="icon" />
                  </a>
                </li>
                <li>
                  <a href="!#">
                    <FaInstagram className="icon" />
                  </a>
                </li>
              </ul>
              <p>Follow Us</p>
            </div>
          </div>
          <span className="sidenav-close" />
        </div>
      </div>
    )
  }
}
