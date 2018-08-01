import { getInitialData } from '../utils/api'
import { receiveUsers } from './users.js'
import { receiveQuestions } from './questions.js'

export function getInitialDataAsync() {
  return (dispatch) => {
    return getInitialData()
      .then(({users, questions}) => {
        dispatch(receiveUsers(users))
        dispatch(receiveQuestions(questions))
      })
  }
}