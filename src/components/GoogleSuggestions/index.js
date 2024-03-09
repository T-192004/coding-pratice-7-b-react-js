// Write your code here
import './index.css'
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem/index'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  updateSearch = (id,suggestion) => {
    this.setState({searchInput: suggestion})
  }
  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    let searchResults = null
    if (searchInput === '') {
      searchResults = suggestionsList
    } else {
      searchResults = suggestionsList.filter(eachSuggestion =>
        eachSuggestion.suggestion.includes(searchInput),
      )
    }

    return (
      <div>
        <div className="bg-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            className="logo-img"
            alt="google logo"
          />
          <div className="search-container">
            <div className="search-bar">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                className="search-bar-icon"
                alt="search icon"
              />
              <input
                type="search"
                placeholder="Google Search"
                className="search-input"
                onChange={this.onChangeSearchInput}
                value={searchInput}
              />
            </div>
            <ul className="search-list">
              {searchResults.map(eachSuggestion => (
                <SuggestionItem
                  suggestionItem={eachSuggestion}
                  key={eachSuggestion.id}
                  updateSearch={this.updateSearch}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
