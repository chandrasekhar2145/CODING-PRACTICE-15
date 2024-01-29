// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
state = {activeReviewList: 0}

getReviewList = reviewsList => {
    const {activeReviewList} = this.state
    const {imgUrl, username, companyName, description} =
      reviewsList[activeReviewList]

    return (
      <div className="review-container">
        <h1 className="heading">Reviews</h1>
        <img src={imgUrl} alt={username} />
        <p className="username">{username}</p>
        <p>{companyName}</p>
        <p>{description}</p>
      </div>
    )
  }

clickLeftIcon = () => {
    const {activeReviewList} = this.state
    if (activeReviewList > 0) {
      this.setState(prevState => ({
        activeReviewList: prevState.activeReviewList - 1,
      }))
    }
}

  clickRightIcon = () => {
    const {activeReviewList} = this.state
    const {reviewsList} = this.props
    if (activeReviewList < reviewsList.length - 1) {
      this.setState(prevState => ({
        activeReviewList: prevState.activeReviewList + 1,
      }))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {activeReviewList} = this.state
    console.log(activeReviewList)

    return (
      <div className="app-container">
        <button
          className="btn"
          type="button"
          onClick={this.clickLeftIcon}
          data-testid="leftArrow"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
            alt=" left arrow"
            className="left-arrow"
          />
        </button>
        {this.getReviewList(reviewsList)}
        <button
          className="btn"
          type="button"
          onClick={this.clickRightIcon}
          data-testid="rightArrow"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
            alt="right arrow"
            className="right-arrow"
          />
        </button>
      </div>
    )
  }
}

export default ReviewsCarousel
