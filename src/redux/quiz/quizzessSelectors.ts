import { createSelector } from 'reselect';
import { QuizStateInterface } from './quizzes.types';

export const getQuizState = (state: { quiz: QuizStateInterface }) => state.quiz;

export const getQuizzes = createSelector(getQuizState, (quiz) => quiz.quizzes);
export const getActiveQuizz = createSelector(
  getQuizState,
  (quiz) => quiz.activeQuizzId
);
export const getIsLoading = createSelector(
  getQuizState,
  (quiz) => quiz.isLoading
);

export const getQuizById = (quizId: string | undefined) =>
  createSelector([getQuizzes], (quizzes) =>
    quizzes.find((quiz) => quiz.id === quizId)
  );

export const getQuestionsByQuizId = (quizId: string | undefined) =>
  createSelector([getQuizById(quizId)], (quiz) => (quiz ? quiz.questions : []));

export const getQuestionById = (
  quizId: string | undefined,
  questionId: string | undefined
) =>
  createSelector([getQuestionsByQuizId(quizId)], (questions) =>
    questions.find((question) => question.id === questionId)
  );
