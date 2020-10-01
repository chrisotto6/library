import React from 'react'
import Card from '../components/card'

export default {
  title: 'Card',
  component: Card,
}

const Template = (args) => <Card {...args} />

export const CardStory = Template.bind({})

CardStory.args = {
  book: {
    title: 'Harry Potter and the Goblet of Fire (Harry Potter, #4)',
    title_without_series: 'Harry Potter and the Goblet of Fire',
    authors: 'J.K. Rowling',
    image_url:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1554006152l/6._SX98_.jpg',
    link: 'https://www.goodreads.com/book/show/6.Harry_Potter_and_the_Goblet_of_Fire',
  },
  rating: 4.5,
}
