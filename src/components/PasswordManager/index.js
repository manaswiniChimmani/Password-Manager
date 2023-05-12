import './index.css'

const PasswordManager = props => {
  const {details, isCheckboxClicked, deletePassword} = props
  const {id, username, website, password} = details
  const userCard = username[0].toUpperCase()

  const deleteItem = () => {
    deletePassword(id)
  }
  return (
    <li key={id}>
      <div className="p">
        <p>{userCard}</p>
        <div>
          <p>{website}</p>
          <p>{username}</p>
          {isCheckboxClicked ? (
            <p>{password}</p>
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
              alt="stars"
              className="img"
            />
          )}
        </div>
        <button
          type="button"
          key={id}
          onClick={deleteItem}
          data-testid="delete"
          className="del-btn"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
            className="del-img"
          />
        </button>
      </div>
    </li>
  )
}

export default PasswordManager
