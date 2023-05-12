import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import PasswordManager from './components/PasswordManager'

import './App.css'

class App extends Component {
  state = {
    passwordsList: [],
    isCheckboxClicked: false,
    website: '',
    username: '',
    password: '',
    searchInput: '',
  }

  getWebsiteName = event => {
    this.setState({website: event.target.value})
  }

  getInputPassword = event => {
    this.setState({password: event.target.value})
  }

  getSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  userName = event => {
    this.setState({username: event.target.value})
  }

  addPassword = event => {
    event.preventDefault()
    const {website, username, password, passwordsList} = this.state
    const newPassword = {
      id: uuidv4(),
      website,
      password,
      username,
    }
    this.setState(prevState => ({
      passwordsList: [...prevState.passwordsList, newPassword],
      website: '',
      username: '',
      password: '',
    }))
  }

  changeValue = () => {
    const {isCheckboxClicked} = this.state
    this.setState({isCheckboxClicked: !isCheckboxClicked})
  }

  deletePassword = id => {
    const {passwordsList} = this.state
    const newList = passwordsList.filter(eachItem => eachItem.id !== id)
    this.setState({passwordsList: newList})
  }

  render() {
    const {
      passwordsList,
      isCheckboxClicked,
      website,
      username,
      password,
      searchInput,
    } = this.state

    const searchedPasswordList = passwordsList.filter(eachItem =>
      eachItem.website.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="logo"
        />
        <div className="card">
          <form onSubmit={this.addPassword} className="container1">
            <h1 className="h1">Add New Password</h1>
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
                className="input-image"
              />
              <input
                type="text"
                placeholder="Enter Website"
                onChange={this.getWebsiteName}
                value={website}
                className="input"
              />
            </div>
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
                className="input-image"
              />
              <input
                type="text"
                placeholder="Enter Username"
                onChange={this.userName}
                value={username}
                className="input"
              />
            </div>
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password"
                className="input-image"
              />
              <input
                type="password"
                placeholder="Enter Password"
                onChange={this.getInputPassword}
                value={password}
                className="input"
              />
            </div>
            <button type="submit" className="btn">
              Add
            </button>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="password manager"
            className="img"
          />
        </div>
        <div className="card2">
          <div>
            <div className="password-container1">
              <div className="password-container2">
                <h1 className="h1">Your Passwords</h1>
                <p className="numbers">{searchedPasswordList.length}</p>
              </div>
              <div className="search">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  alt="search"
                  className="search-img"
                />
                <input
                  type="search"
                  placeholder="Search"
                  value={searchInput}
                  onChange={this.getSearchInput}
                  className="search-input"
                />
              </div>
            </div>
            <hr />
          </div>
          <input
            type="checkbox"
            value={searchInput}
            onClick={this.changeValue}
            id="check"
          />
          <label htmlFor="check" className="label">
            Show passwords
          </label>
          {searchedPasswordList.length === 0 ? (
            <div className="no-password-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                alt="no passwords"
                className="password-img"
              />
              <p className="no-password">No Passwords</p>
            </div>
          ) : (
            <ul>
              {searchedPasswordList.map(eachPassword => (
                <PasswordManager
                  isCheckboxClicked={isCheckboxClicked}
                  details={eachPassword}
                  key={eachPassword.id}
                  deletePassword={this.deletePassword}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default App
