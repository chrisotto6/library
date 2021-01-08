import React from 'react'
import renderer from 'react-test-renderer'
import { Stats } from '../../components'

test('Stats Snapshot Matches', () => {
  const tree = renderer.create(<Stats year="2021" />).toJSON()
  expect(tree).toMatchSnapshot()
})
