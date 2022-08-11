import './index.css'

const VisitedCountries = props => {
  const {countryDetails, onClickRemove} = props
  const {name, imageUrl} = countryDetails

  return (
    <li className="visited-countries-list">
      <img src={imageUrl} alt="thumbnail" className="flag" />
      <div className="name-and-button-container">
        <p className="country-name">{name}</p>
        <button
          type="button"
          className="button"
          onClick={() => onClickRemove(countryDetails)}
        >
          Remove
        </button>
      </div>
    </li>
  )
}

export default VisitedCountries
