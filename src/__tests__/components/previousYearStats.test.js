import React from 'react'
import renderer from 'react-test-renderer'
import { PreviousYearStats } from '../../components'

test('PreviousYearStats Snapshot Matches', () => {
  const tree = renderer
    .create(
      <PreviousYearStats
        year="2019"
        totalBooks="70"
        totalPages="15479"
        longestBook="American Gods"
        longestPages="674"
        shortestBook="Deadpool Kills Deadpool"
        shortestPages="1"
        averagePages="221"
      />
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
