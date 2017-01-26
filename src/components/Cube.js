import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getTitle } from '../reducers/cube'

class Cell extends Component {
  shouldComponentUpdate(next) {
    return next.value !== this.props.value
  }

  render () {
    const { value } = this.props
    return (
      <td>{value}</td>
    )
  }
}

let rowUpdates = 0
const Row = ({cells}) => (
  <tr>
    <td>{rowUpdates++}</td>
    {cells.map(c =>
      <Cell key={c.id} value={c.value} />
    )}
  </tr>
)

class Cube extends Component {
  render () {
    const { title, rows } = this.props
    return (
      <table>
        <caption>{title}</caption>
        <tbody>
          {rows.map(row =>
            <Row key={row.id} cells={row} />
          )}
        </tbody>
      </table>
    )
  }
}

const mapStateToProps = (state) => {
  const cube = state.cube
  return {
    title: getTitle(cube),
    rows: cube.rows
  }
}
Cube = connect(mapStateToProps)(Cube)

export default Cube