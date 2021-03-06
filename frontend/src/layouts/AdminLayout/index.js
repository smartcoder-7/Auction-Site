import React, { PureComponent } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import PropTypes from 'prop-types'
import ImmutablePropTypes from 'react-immutable-proptypes'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import FaFacebook from 'react-icons/lib/fa/facebook'
import FaTwitter from 'react-icons/lib/fa/twitter'
import FaGoogle from 'react-icons/lib/fa/google'
import FaLinkedin from 'react-icons/lib/fa/linkedin'
import FaInstagram from 'react-icons/lib/fa/instagram'
import { Row, Col } from 'reactstrap'

import AdminHeader from 'components/AdminHeader'
import Spinner from 'components/Spinner'
import {
  registerRealTimeNotificationHandler, unregisterRealTimeNotificationHandler
} from 'managers/RealTimeNotificationManager'
import { signOut } from 'store/modules/auth'
import { getNotificationListOnMenu, addNotification, resetNotificationUnreadCount } from 'store/modules/admin/notifications'
import { authSelector, adminNotificationsSelector } from 'store/selectors'
import userAvatarPlaceholder from 'images/avatar-placeholder.svg'


class AdminLayout extends PureComponent {

  static propTypes = {
    auth: ImmutablePropTypes.map.isRequired,
    adminNotifications: ImmutablePropTypes.map.isRequired,
    history: PropTypes.object.isRequired,
    signOut: PropTypes.func,
    getNotificationListOnMenu: PropTypes.func,
    addNotification: PropTypes.func,
    resetNotificationUnreadCount: PropTypes.func,
  }

  state = {
    menuOpen: false,
  }

  handleSignOut = () => {
    this.props.signOut()
  }

  handleOpenMenu = (e) => {
    e.preventDefault()
    this.setState({
      menuOpen: !this.state.menuOpen
    })
  }

  handleCloseMenu = () => {
    this.setState({
      menuOpen: false
    })
  }

  handleNotification = (data) => {
    this.props.addNotification(data)
  }

  componentWillMount() {
    this.props.getNotificationListOnMenu()
  }

  componentDidMount() {
    registerRealTimeNotificationHandler(null, this.handleNotification)
  }

  componentWillUnmount() {
    unregisterRealTimeNotificationHandler(null, this.handleNotification)
  }

  render() {
    const { auth, adminNotifications, children, resetNotificationUnreadCount } = this.props
    const currentUser = auth.get('currentUser')
    const notificationListOnMenu = adminNotifications.get('notificationListOnMenu')
    const notificationListOnMenuLoaded = adminNotifications.get('notificationListOnMenuLoaded')
    const notificationUnreadCount = adminNotifications.get('notificationUnreadCount')

    if (!currentUser) {
      return <Spinner />
    }

    const { menuOpen } = this.state
    const username = currentUser.get('first_name') || currentUser.get('username')
    const userAvatarImage = currentUser.get('avatar') || userAvatarPlaceholder

    const menuClasses = ['admin-menu']
    const menuBgClasses = ['menu-bg']
    if (menuOpen) {
      menuClasses.push('open')
      menuBgClasses.push('open')
    }

    return (
      <div className="admin-layout">
        <a className="menu-toggle" href="/" onClick={this.handleOpenMenu}>
          <i className="fa fa-bars"></i>
        </a>

        <AdminHeader
          username={username}
          userAvatarImage={userAvatarImage}
          notificationListOnMenu={notificationListOnMenu}
          notificationListOnMenuLoaded={notificationListOnMenuLoaded}
          notificationUnreadCount={notificationUnreadCount}
          onSignOut={this.handleSignOut}
          resetNotificationUnreadCount={resetNotificationUnreadCount}
        />

        <div className={menuClasses.join(' ')}>
          <div className="container-fluid py-4 mb-4">
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/admin/auctions">Auctions</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/admin/do-gooders">Do-Gooders</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/admin/products">Products</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/admin/charities">Charities</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/admin/sales">Sales</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/admin/posts">Blog</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/admin/users">Users</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/admin/media">Media</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/admin/backlog">Backlog</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/admin/settings">Site Settings</Link>
              </li>
            </ul>
          </div>

          <div className="container-fluid py-3 mt-auto sep-line">
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/privacy-policy">Privacy Policy</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/terms-conditions">Terms & Conditions</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/shipping">Shipping</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/support">Support</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/careers">Careers</Link>
              </li>
            </ul>
          </div>

          <div className="container-fluid py-4 sep-line">
            <Row noGutters>
              <Col>
                <a href="/" className="text-dark">
                  <center><FaFacebook /></center>
                </a>
              </Col>
              <Col>
                <a href="/" className="text-dark">
                  <center><FaTwitter /></center>
                </a>
              </Col>
              <Col>
                <a href="/" className="text-dark">
                  <center><FaGoogle /></center>
                </a>
              </Col>
              <Col>
                <a href="/" className="text-dark">
                  <center><FaLinkedin /></center>
                </a>
              </Col>
              <Col>
                <a href="/" className="text-dark">
                  <center><FaInstagram /></center>
                </a>
              </Col>
            </Row>
          </div>
        </div>
        <div className={menuBgClasses.join(' ')} onClick={this.handleCloseMenu} />

        <div className="admin-content">
          <div className="container-fluid p-4 pt-5" style={{ maxWidth: 1200, marginLeft: 0 }}>
            {children}
          </div>
        </div>
      </div>
    )
  }
}

const selector = createStructuredSelector({
  auth: authSelector,
  adminNotifications: adminNotificationsSelector,
})

const actions = {
  signOut,
  getNotificationListOnMenu,
  addNotification,
  resetNotificationUnreadCount,
}

export default compose(
  withRouter,
  connect(selector, actions),
)(AdminLayout)
