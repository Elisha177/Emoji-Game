import './index.css'

const WON_IMAGE = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
const LOSE_IMAGE = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

const WinOrLoseCard = props => {
  const {isWon, onClickPlayAgain, score} = props
  const imageURL = isWon ? WON_IMAGE : LOSE_IMAGE
  const altText = isWon ? 'win or lose' : 'win or lose'
  const gameStatus = isWon ? 'You Won' : 'You Lose'
  const scoreLabel = isWon ? 'Best Score' : 'Score'

  return (
    <div className="win-or-lose-container">
      <div className="win-or-lose-text-container">
        <h1 className="win-or-lose-status">{gameStatus}</h1>
        <p className="win-or-lose-label">{scoreLabel}</p>
        <p className="win-or-lose-score">{score}/12</p>
        <button
          className="win-or-lose-button"
          type="button"
          onClick={onClickPlayAgain}
        >
          Play Again
        </button>
      </div>
      <div className="win-or-lose-image-container">
        <img className="win-or-lose-image" src={imageURL} alt={altText} />
      </div>
    </div>
  )
}

export default WinOrLoseCard
