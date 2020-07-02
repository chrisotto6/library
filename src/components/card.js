import React from 'react'
import StarRatingComponent from 'react-star-rating-component'

import './card.styles.css'

const Card = (props) => {
  const {
    book: { title, title_without_series, authors, image_url, link },
    rating,
  } = props

  return (
    <>
      <li className="bookCard">
        <header>
          <div>
            <img src={image_url} alt={title} />
          </div>
        </header>
        <section className="cardContainer">
          <h4 className="h4 small">{title_without_series}</h4>
          <h5 className="h5 small">{authors.author.name}</h5>
          <StarRatingComponent name={''} value={Number(rating)} editing={false} />
          <div className="link">
            <a href={link} target="_blank" rel="noopener noreferrer" className="h5 small">
              Goodreads Page
            </a>
          </div>
        </section>
      </li>
    </>
  )
}

export default Card
