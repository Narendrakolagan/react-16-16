import {formatDistanceToNow} from 'date-fns'

import './index.css'

const CommentItem = props => {
  const {commentDetails, onDeleteComment} = props
  const {id, name, comment, date, isLiked, initialClassName} = commentDetails
  const initial = name ? name[0].toUpperCase() : ''
  const postedTime = formatDistanceToNow(date)
  const likedTextClassName = isLiked ? `like-button active` : `like-button`
  const likedImageClassName = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const onClickLike = () => {
    const {toggleIsLiked} = props
    toggleIsLiked(id)
  }

  const onDelete = () => {
    onDeleteComment(id)
  }

  return (
    <li className="comment-item">
      <div className="comments-container">
        <div className={initialClassName}>
          <p className="initial">{initial}</p>
        </div>
        <div>
          <div className="name-time-container">
            <p className="person-name">{name}</p>
            <p className="posted-time">{postedTime}</p>
          </div>
          <p className="comment">{comment}</p>
        </div>
      </div>

      <div className="buttons-container">
        <div className="like-container">
          <img src={likedImageClassName} alt="Like" />
          <button
            className={likedTextClassName}
            type="button"
            onClick={onClickLike}
          >
            Like
          </button>
        </div>
        <button className="delete-button" type="button" data-testid="delete">
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="delete-button"
            onClick={onDelete}
          />
        </button>
      </div>

      <hr />
    </li>
  )
}

export default CommentItem
