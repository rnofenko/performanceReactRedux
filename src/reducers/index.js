import { combineReducers } from 'redux'
import byId, * as fromById from './byId'
import createList, * as fromList from './createList'
import cube from './cube'

const listByFilter = combineReducers({
  all: createList('all'),
  active: createList('active'),
  completed: createList('completed'),
})

const todos = combineReducers({ byId, listByFilter, cube })

export default todos;

export const getVisTodos = (state, filter) => {
  const ids  = fromList.getIds(state.listByFilter[filter])
  return ids.map(id => fromById.getTodo(state.byId, id))
}

export const getIsFetching = (state, filter) => fromList.getIsFetching(state.listByFilter[filter])

export const getErrorMessage = (state, filter) => fromList.getErrorMessage(state.listByFilter[filter])