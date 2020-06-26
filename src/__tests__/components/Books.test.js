import React from 'react'
import renderer from 'react-test-renderer'
import Book from '../../components/books'

test('Books Snapshot Matches', () => {
  const tree = renderer.create(<Book />).toJSON()
  expect(tree).toMatchSnapshot()
})
