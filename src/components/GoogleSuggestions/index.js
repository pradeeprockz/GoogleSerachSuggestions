import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  constructor() {
    super()
    this.state = {
      searchInput: '',
    }
  }

  handleInputChange = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state

    const filteredSuggestions = suggestionsList.filter(suggestion =>
      suggestion.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="app-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
          alt="search icon"
        />
        <input
          type="search"
          value={searchInput}
          onChange={this.handleInputChange}
          placeholder="Search Google"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
        />
        <ul className="list-container">
          {filteredSuggestions.map(suggestion => (
            <SuggestionItem
              key={suggestion.id}
              suggestion={suggestion}
              onSuggestionClick={this.handleSuggestionClick}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default GoogleSuggestions
