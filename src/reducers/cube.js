const size = {width: 100, height: 10}
const capacity = size.width * size.height

const getCoord = (count) => {
  const index = count % capacity

  const x = Math.floor(index / size.width)
  const y = index - size.width * x
  return { x, y }
}

const newCell = (index) => {
  return { value: 0, id: index }
}

const newRow = (index) => {
  let row= []
  row.id = index
  return row
}

const getCell = (rows, index) => {
  const coord = getCoord(index) 
  return rows[coord.x][coord.y]
}

const updateCell = (rows, index) => {
  const cell = getCell(rows, index)
  cell.value++
  return rows
}

const getNewArray = () => {
  let rows = []
  for(let i = 0; i < capacity; i++) {
    const coord = getCoord(i)
    const row = rows[coord.x] = rows[coord.x] || newRow(i)
    row[coord.y] = newCell(i)
  }
  return rows
}

const cube = (state = { title: 'cube', count: 0, rows: getNewArray()}, action) => {
  switch(action.type){
    case 'NEW_CELL':
      return {
        ...state,
        count: state.count + 1,
        rows: updateCell(state.rows, state.count)
      }
    default:
      return state
  }
}

export default cube

export const getTitle = (state) => `${state.title} ${state.count}`