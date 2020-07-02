import React from 'react'
import renderer from 'react-test-renderer'
import { Footer } from '../../components'

test('Footer Matches', () => {
  const tree = renderer.create(<Footer />).toJSON()
  expect(tree).toMatchSnapshot()
})
