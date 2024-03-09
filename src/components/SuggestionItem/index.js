// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionItem, updateSearch} = props
  const {id, suggestion} = suggestionItem
  const onUpdateSearch = () => {
    updateSearch(id, suggestion)
  }
  return (
    <li className="search-item">
      <p className="suggestion">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        className="suggestion-icon"
        alt="arrow"
        onClick={onUpdateSearch}
      />
    </li>
  )
}

export default SuggestionItem
