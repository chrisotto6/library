import React from 'react'
import renderer from 'react-test-renderer'
import { RecentBooks } from '../../components'

test('RecentBooks Snapshot Matches', () => {
  const tree = renderer.create(<RecentBooks />).toJSON()
  expect(tree).toMatchSnapshot()
})
