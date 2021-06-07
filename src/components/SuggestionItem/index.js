import './index.css'

const SuggestionItem = props => {
  const {suggestItem, onSearchKeyword} = props
  const {suggestion} = suggestItem

  const setSearchKeyword = () => {
    onSearchKeyword(suggestion)
  }

  return (
    <li>
      {suggestion}
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="arrow-image"
        onClick={setSearchKeyword}
      />
    </li>
  )
}

export default SuggestionItem
