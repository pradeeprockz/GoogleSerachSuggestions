import {Component} from 'react'

class SuggestionItem extends Component {
  handleSuggestionClick = () => {
    const {suggestion, onSuggestionClick} = this.props
    onSuggestionClick(suggestion.suggestion)
  }

  render() {
    const {suggestion} = this.props

    return <li onClick={this.handleSuggestionClick}>{suggestion.suggestion}</li>
  }
}

export default SuggestionItem
