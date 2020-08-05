import React from 'react'
import renderer from 'react-test-renderer'
import { HighlyRated } from '../../components'

test('HighlyRated Snapshot Matches', () => {
  const tree = renderer.create(<HighlyRated />).toJSON()
  expect(tree).toMatchSnapshot()
})
