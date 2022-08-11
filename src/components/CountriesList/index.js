import './index.css'

const CountriesList = props => {
  const {countryDetails, onClickVisit} = props
  const {name, isVisited} = countryDetails

  return (
    <li className="countries-list">
      <p className="country-name">{name}</p>
      {isVisited ? (
        <p className="un-active-button">Visited</p>
      ) : (
        <button
          type="button"
          className="active-button"
          onClick={() => onClickVisit(countryDetails)}
        >
          Visit
        </button>
      )}
    </li>
  )
}

export default CountriesList
