import { combineReducers } from 'redux';
import { persistedQuizzesReducer } from './quiz/quizSlice';
import { persistedUserReducer } from './user/userSlice';
import { QuizStateInterface } from './quiz/quizzes.types';
import { UserStateInterface } from './user/user.types';

export interface RootState {
  quiz: QuizStateInterface;
  user: UserStateInterface;
}

const rootReducer = combineReducers({
  quiz: persistedQuizzesReducer,
  user: persistedUserReducer,
});

export default rootReducer;
