import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {
  Quizz,
  QuestionPayload,
  AddQuestionPayload,
  RemoveQuestionPayload,
} from './quizzes.types';
import { initialState } from './initialState';
import { nanoid } from 'nanoid';

export const quizzesSlice = createSlice({
  name: 'quizzes',
  initialState,
  reducers: {
    setActiveQuizz: (state, action: PayloadAction<string>) => {
      state.activeQuizzId = action.payload;
    },
    removeActiveQuizz: (state) => {
      state.activeQuizzId = '';
    },
    addQuiz: (state, action: PayloadAction<Quizz>) => {
      const newQuiz = { ...action.payload };
      state.quizzes.push(newQuiz);
    },
    editQuiz: (state, action: PayloadAction<Quizz>) => {
      const index = state.quizzes.findIndex(
        (quiz) => quiz.id === action.payload.id
      );
      if (index !== -1) {
        state.quizzes[index] = action.payload;
      }
    },
    removeQuiz: (state, action: PayloadAction<string>) => {
      state.quizzes = state.quizzes.filter(
        (quiz) => quiz.id !== action.payload
      );
    },
    addQuestion: (state, action: PayloadAction<AddQuestionPayload>) => {
      const { quizId, question } = action.payload;
      const quiz = state.quizzes.find((q) => q.id === quizId);
      if (quiz) {
        const newQuestion = { ...question, id: nanoid() };
        quiz.questions.push(newQuestion);
      }
    },
    editQuestion: (state, action: PayloadAction<QuestionPayload>) => {
      const { quizId, id, title, options, correctIndex } = action.payload;
      const quiz = state.quizzes.find((q) => q.id === quizId);
      if (quiz) {
        const questionIndex = quiz.questions.findIndex((q) => q.id === id);
        if (questionIndex !== -1) {
          quiz.questions[questionIndex] = { id, title, options, correctIndex };
        }
      }
    },

    removeQuestion: (state, action: PayloadAction<RemoveQuestionPayload>) => {
      const { quizId, questionId } = action.payload;
      const quiz = state.quizzes.find((q) => q.id === quizId);
      if (quiz) {
        quiz.questions = quiz.questions.filter((q) => q.id !== questionId);
      }
    },
  },
});

const persistConfig = {
  key: 'quizzes',
  storage,
};

export const persistedQuizzesReducer = persistReducer(
  persistConfig,
  quizzesSlice.reducer
);

export const {
  addQuiz,
  removeQuiz,
  editQuiz,
  addQuestion,
  removeQuestion,
  editQuestion,
  setActiveQuizz,
  removeActiveQuizz,
} = quizzesSlice.actions;
