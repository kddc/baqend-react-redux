import React from 'react'

import AccountForm from './AccountForm'
import AccountOverview from './AccountOveriew'
import './Account.scss'

export const Account = (props) => (
  <div>
    { props.isLoggedIn
      ? <AccountOverview user={props.user} logout={props.logout} />
      : <AccountForm
        submitLogin={props.submitLogin}
        submitRegister={props.submitRegister}
        inputChange={props.inputChange}
        />
    }
  </div>
)

Account.propTypes = {
  submitLogin    : React.PropTypes.func.isRequired,
  submitRegister : React.PropTypes.func.isRequired,
  inputChange    : React.PropTypes.func.isRequired,
  logout         : React.PropTypes.func.isRequired,
  isLoggedIn     : React.PropTypes.bool,
  user           : React.PropTypes.object
}

export default Account
