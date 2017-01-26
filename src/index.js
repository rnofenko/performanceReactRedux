import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './configureStore'
import Root from './components/Root'

const store = configureStore()

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root')
)

const newCellTimeout = () => {
  setTimeout(() => {
    for(let i=0;i<1;i++) {
      store.dispatch({type: 'NEW_CELL'})
    }
    newCellTimeout()
  }, 1000)
}
newCellTimeout()