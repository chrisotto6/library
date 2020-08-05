import React from 'react'
import renderer from 'react-test-renderer'
import { ToReadBooks } from '../../components'

test('ToReadBooks Snapshot Matches', () => {
  const tree = renderer.create(<ToReadBooks />).toJSON()
  expect(tree).toMatchSnapshot()
})
