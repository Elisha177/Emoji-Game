// Write your code here.

import './index.css'

const EmojiCard = props => {
  const {emojiDetails, clickEmoji} = props
  const {emojiName, emojiUrl, id} = emojiDetails
  /* onClickEmojiItem sends clicked emoji id to EmojiGame main page  */
  const onclickEmojiCard = () => {
    clickEmoji(id)
  }
  return (
    <li className="emoji-item">
      <button type="button" className="emoji-btn" onClick={onclickEmojiCard}>
        <img src={emojiUrl} alt={emojiName} className="emoji-icon" />
      </button>
    </li>
  )
}

export default EmojiCard
