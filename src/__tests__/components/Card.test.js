import React from 'react'
import renderer from 'react-test-renderer'
import Card from '../../components/card'

const book = {
  title: 'Test (The Testing #1)',
  title_without_series: 'Test',
  authors: {
    author: {
      name: 'Chris Otto',
    },
  },
  image_url:
    'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1589998653l/6043781._SX98_.jpg',
  link: 'https://www.goodreads.com/book/show/6043781-blood-of-elves',
}

const rating = ['4']

test('App Snapshot Matches', () => {
  const tree = renderer.create(<Card book={book} rating={rating} />).toJSON()
  expect(tree).toMatchSnapshot()
})
