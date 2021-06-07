import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  inputKeyword = event => {
    const {searchInput, suggestion} = this.state
    this.setState({searchInput: event.target.value})
    console.log(suggestion, searchInput)
  }

  setInputKeyword = suggestionKeyword => {
    this.setState({searchInput: suggestionKeyword})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const filteredSearResults = suggestionsList.filter(eachItem =>
      eachItem.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-div">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          className="google-image"
          alt="google logo"
        />
        <div className="google-search-div">
          <div className="search-input-div">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="search-icon"
            />
            <input
              onChange={this.inputKeyword}
              value={searchInput}
              type="search"
              className="input-box"
              placeholder="Search Google"
            />
          </div>
          <ul>
            {filteredSearResults.map(eachItem => (
              <SuggestionItem
                suggestItem={eachItem}
                onSearchKeyword={this.setInputKeyword}
                key={eachItem.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
