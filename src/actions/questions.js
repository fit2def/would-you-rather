import { _saveQuestionAnswer, _saveQuestion, generateUID } from '../utils/_DATA';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ANSWER_QUESTION = 'ANSWER_QUESTION';
export const ADD_QUESTION = 'ADD_QUESTION';

export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  };
}

export function answerQuestionAsync(authedUser, question, answer){
  return (dispatch) => {

    const saved = {
      ...question
    };

    const answered = {
      ...question,
      [answer]: {
        ...question[answer],
        votes: question[answer].votes.concat([authedUser])
      }
    };

    const answerInfo = {
      authedUser,
      qid: [question.id],
      answer
    };

    dispatch(answerQuestion(answered));

    _saveQuestionAnswer(answerInfo)
        .catch(() => {
          dispatch(answerQuestion(saved))
        })
  }
}

function answerQuestion(question) {
  return {
    type: ANSWER_QUESTION,
    question
  };
}

export function addQuestionAsync(question) {
  return (dispatch) => {
    _saveQuestion(question)
      .then((q) => {
        dispatch(addQuestion(q))
      })
      .catch(() => {
        alert('There was a problem adding that question. Please try again.')
      })
  }
}

function addQuestion(question){
  return {
    type: ADD_QUESTION,
    question
  }
}