import React from 'react'
import renderer from 'react-test-renderer'
import App from '../App'

test('App Snapshot Matches', () => {
  const tree = renderer.create(<App />).toJSON()
  expect(tree).toMatchSnapshot()
})
