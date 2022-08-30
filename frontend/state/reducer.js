// ❗ You don't need to add extra reducers to achieve MVP
import { combineReducers } from 'redux'
import * as types from './action-types'

// const initialWheelState = 0
// function wheel(state = initialWheelState, action) {
//   switch(action.type) {
//     case types.MOVE_CLOCKWISE: {
//       if ((state === 0) || (state === 1) || (state === 2) || (state === 3) || (state === 4)) {
//         return state += 1
//       }
//       if (state === 5) {
//         return state = 0
//       }
//     }
//     break
//     case types.MOVE_COUNTERCLOCKWISE: {
//       if ((state === 5) || (state === 1) || (state === 2) || (state === 3) || (state === 4)) {
//         return state -= 1
//       }
//       if (state === 0) {
//         return state = 5
//       }
//     }
//     break
//     default:
//       return state
//   }
// }

const initialWheelState = 0
function wheel(state = initialWheelState, action) {
  switch(action.type) {
    case types.MOVE_CLOCKWISE: {
      const nextNumber = state+1
      return nextNumber > 5 ? 0 : nextNumber
    }
  
    case types.MOVE_COUNTERCLOCKWISE: {
      const nextNumber = state - 1
      return nextNumber < 0 ? 5 : nextNumber
    }
  
    default:
      return state
  }
}

const initialQuizState = {
  question: '',
  correctQuestion: '',
  incorrectQuestion: '',
  correctAnswerID: '',
  incorrectAnswerID: '',
  questionID: '',
}
function quizQuestion(state = initialQuizState, action) {
  switch(action.type) {
    case types.SET_QUIZ_INTO_STATE: {
      return ({...state, question: action.payload})
    }
    case types.SET_QUIZ_INTO_STATE_C_ANSWER: {
      return ({...state, correctQuestion: action.payload})
    }
    case types.SET_QUIZ_INTO_STATE_I_ANSWER: {
      return ({...state, incorrectQuestion: action.payload})
    }
    case types.QUESTION_ID: {
      return ({...state, questionID: action.payload })
    }
    case types.CORRECT_ANSWER_ID: {
      return ({...state, correctAnswerID: action.payload})
    }
    case types.INCORRECT_ANSWER_ID: {
      return ({...state, incorrectAnswerID: action.payload})
    }
    default:
      return state
  }
}



const initLoadingState = true;
function loadingReducer(state = initLoadingState, action) {
  switch(action.type) {
    case types.SET_LOADING: {
      return action.payload
    }
    default: 
    return state
  }
}

const initialSelectedAnswerState = {
  answer1: false,
  answer2: false
}
function selectedAnswer(state = initialSelectedAnswerState, action) {
  switch(action.type) {
    case types.SET_SELECTED_ANSWER: {
      if(state.answer2 === true){
        return ({...state, answer1: true, answer2: false}) 
      }
      if(state.answer2 === false){
        return ({...state, answer1: true})
      }
    }
    break
    case types.SET_SELECTED_ANSWER2: {
      if(state.answer1 === true){
        return ({...state, answer1: false, answer2: true})
      }
      if(state.answer1 === false){
        return({...state, answer2: true})
      }
    }
    break
    case types.RESET_QUIZ: {
      return ({...state, answer1: false, answer2: false})
    }
    default:
      return state
  }
}

const initTrueFalse = true
function renderORNaw(state = initTrueFalse, action) {
  switch(action.type) {
    case types.RENDER_OR_NAW: {
      if (state === false) {
        return !state
      }
      if (state === true) {
        return !state
    }
  }
  break
    default:
      return state
  }
}

const initialMessageState = {
  message: '',
}
function infoMessage(state = initialMessageState, action) {
  switch(action.type) {
    case types.SET_INFO_MESSAGE: {
      return ({...state, message: action.payload })
    }
    case types.RESET_MESSAGE: {
      return ({...state, message: ""})
    }
    case types.SET_FORM_MESSAGE: {
      return ({...state, message: `Congrats: "${action.payload}" is a great question!`})
    }
    default:
      return state
  }
}

const initialFormState = {
  question_text: '',
  true_answer_text: '',
  false_answer_text: '',
}
function form(state = initialFormState, action) {
  switch(action.type) {
    case types.INPUT_CHANGE: {
      const { name, value } = action.payload
      return {...state, [name] : value.trim()}
    }
    case types.RESET_FORM: {
      return {...state, question_text: "", true_answer_text: "", false_answer_text: ""}
    }
    default:
      return state
  }
}


export default combineReducers({ wheel, quizQuestion, loadingReducer, selectedAnswer, renderORNaw, infoMessage, form})
