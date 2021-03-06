import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import ImmutablePropTypes from 'react-immutable-proptypes'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { Label } from 'reactstrap'

import AccountForm from 'components/AccountForm'
import avatarPlaceHolder from 'images/avatar-placeholder.svg'
import Section from 'components/Section'
import Spinner from 'components/Spinner'
import Uploader from 'components/Uploader'
import { authSelector, countriesSelector } from 'store/selectors'
import { formSubmit } from 'utils/form'
import { getCountries } from 'store/modules/settings'
import { uploadCurrentUserAvatar, updateCurrentUser } from 'store/modules/auth'


class AccountInfo extends PureComponent {

  static propTypes = {
    auth: ImmutablePropTypes.map.isRequired,
    countries: PropTypes.array.isRequired,
    getCountries: PropTypes.func.isRequired,
    updateCurrentUser: PropTypes.func.isRequired,
  }

  componentDidMount() {
    const { getCountries } = this.props
    getCountries()
  }

  handleSubmit = (data) => {
    const { updateCurrentUser } = this.props
    return formSubmit(updateCurrentUser, { data })
  }

  render() {
    const { auth, countries, uploadCurrentUserAvatar } = this.props
    const currentUser = auth.get('currentUser')

    if (!currentUser) {
      return <Spinner />
    }

    return (
      <Section title="Account Information">
        <div className="mb-40 mb-md-50">
          <Label>Your avatar</Label>
          <div style={{ width: 80 }}>
            <Uploader
              uploadAction={uploadCurrentUserAvatar}
              defaultImageURL={currentUser.get('avatar') || avatarPlaceHolder}
            />
          </div>
        </div>
        <AccountForm
          countries={countries}
          initialValues={currentUser}
          onSubmit={this.handleSubmit}
        />
      </Section>
    )
  }
}

const selector = createStructuredSelector({
  auth: authSelector,
  countries: countriesSelector
})

const actions = {
  getCountries,
  uploadCurrentUserAvatar,
  updateCurrentUser
}

export default compose(
  connect(selector, actions)
)(AccountInfo)
