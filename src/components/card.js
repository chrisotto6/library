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
      <li className="card">
        <header>
          <div>
            <img src={image_url} alt={title} />
          </div>
        </header>
        <section className="container">
          <h4>{title_without_series}</h4>
          <h5>{authors.author.name}</h5>
          <StarRatingComponent name={''} value={Number(rating)} editing={false} />
          <div className="link">
            <a href={link} target="_blank" rel="noreferrer">
              Goodreads Page
            </a>
          </div>
        </section>
      </li>
    </>
  )
}

export default Card
