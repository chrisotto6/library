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
      <li className='card'>
        <header>
          <div>
            <img src={image_url[0]} alt={title[0]} />
          </div>
        </header>
        <section className='container'>
          <h4>{title_without_series[0]}</h4>
          <h5>{authors[0].author[0].name[0]}</h5>
          <StarRatingComponent
            name={''}
            value={Number(rating)}
            editing={false}
          />
          <div className='link'>
            <a href={link[0]}>Goodreads Page</a>
          </div>
        </section>
      </li>
    </>
  )
}

export default Card
